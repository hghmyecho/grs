"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Loader2,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import {
  GRADIENT_OPTIONS,
  GROUPS,
  GROUP_LABELS,
  type StaffProfile,
  type TeamGroup,
  type TeamMember,
} from "@/lib/content/team";
import { saveTeamAction } from "@/app/team-editor/actions";

const inputStyles =
  "w-full rounded-lg border border-honey/20 bg-white px-3 py-2 text-sm text-charcoal placeholder:text-slate-400 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/15";

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function uniqueSlug(base: string, existing: Set<string>): string {
  const root = base || "new-team-member";
  if (!existing.has(root)) return root;
  let i = 2;
  while (existing.has(`${root}-${i}`)) i++;
  return `${root}-${i}`;
}

const EMPTY_PROFILE: StaffProfile = {
  badges: [],
  about: [],
  trainingApproaches: [],
  qualifications: "",
  previousRoles: [],
};

/** Add/remove/edit rows of a string[] field — used for badges, training tags, about paragraphs, and previous roles. */
function ListField({
  label,
  items,
  onChange,
  placeholder,
  multiline = false,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
          {label}
        </span>
        <button
          type="button"
          onClick={() => onChange([...items, ""])}
          className="inline-flex items-center gap-1 text-xs font-semibold text-honey hover:underline"
        >
          <Plus className="h-3.5 w-3.5" />
          Add
        </button>
      </div>
      <div className="mt-2 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            {multiline ? (
              <textarea
                value={item}
                placeholder={placeholder}
                rows={2}
                onChange={(e) => {
                  const next = [...items];
                  next[i] = e.target.value;
                  onChange(next);
                }}
                className={inputStyles}
              />
            ) : (
              <input
                type="text"
                value={item}
                placeholder={placeholder}
                onChange={(e) => {
                  const next = [...items];
                  next[i] = e.target.value;
                  onChange(next);
                }}
                className={inputStyles}
              />
            )}
            <button
              type="button"
              onClick={() => onChange(items.filter((_, idx) => idx !== i))}
              className="mt-2 shrink-0 text-charcoal/40 hover:text-red-600"
              aria-label="Remove"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-xs italic text-charcoal/40">Nothing added yet.</p>
        )}
      </div>
    </div>
  );
}

function MemberEditor({
  member,
  onChange,
}: {
  member: TeamMember;
  onChange: (member: TeamMember) => void;
}) {
  const profile = member.profile ?? EMPTY_PROFILE;

  const setProfile = (patch: Partial<StaffProfile>) =>
    onChange({ ...member, profile: { ...profile, ...patch } });

  return (
    <div className="space-y-4 border-t border-honey/10 bg-cream/50 p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
            Name
          </span>
          <input
            type="text"
            value={member.name}
            onChange={(e) => onChange({ ...member, name: e.target.value })}
            className={`mt-1 ${inputStyles}`}
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
            Role
          </span>
          <input
            type="text"
            value={member.role}
            onChange={(e) => onChange({ ...member, role: e.target.value })}
            className={`mt-1 ${inputStyles}`}
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
            Group
          </span>
          <select
            value={member.group}
            onChange={(e) => onChange({ ...member, group: e.target.value as TeamGroup })}
            className={`mt-1 ${inputStyles}`}
          >
            {GROUPS.map((g) => (
              <option key={g} value={g}>
                {GROUP_LABELS[g]}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
            URL slug
          </span>
          <input
            type="text"
            value={member.slug}
            onChange={(e) => onChange({ ...member, slug: slugify(e.target.value) })}
            className={`mt-1 font-mono ${inputStyles}`}
          />
        </label>
      </div>

      <div>
        <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
          Photo placeholder color
        </span>
        <div className="mt-2 flex flex-wrap gap-2">
          {GRADIENT_OPTIONS.map((opt) => (
            <button
              key={opt.classes}
              type="button"
              title={opt.label}
              onClick={() => onChange({ ...member, gradient: opt.classes })}
              className={`h-9 w-9 rounded-full bg-gradient-to-br ${opt.classes} ${
                member.gradient === opt.classes
                  ? "ring-2 ring-charcoal ring-offset-2 ring-offset-cream"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm font-medium text-charcoal">
        <input
          type="checkbox"
          checked={member.hasProfile}
          onChange={(e) => {
            const hasProfile = e.target.checked;
            onChange({
              ...member,
              hasProfile,
              profile: hasProfile ? (member.profile ?? EMPTY_PROFILE) : member.profile,
            });
          }}
          className="h-4 w-4 rounded border-honey/40"
        />
        Give this person a full profile page (/{member.slug || "…"})
      </label>

      {member.hasProfile && (
        <div className="space-y-5 rounded-xl bg-white p-4 ring-1 ring-honey/10">
          <ListField
            label="Badges"
            items={profile.badges}
            onChange={(badges) => setProfile({ badges })}
            placeholder="e.g. QLD, Approved Supervisor"
          />
          <ListField
            label="About paragraphs"
            items={profile.about}
            onChange={(about) => setProfile({ about })}
            placeholder="A paragraph about this person"
            multiline
          />
          <ListField
            label="Training & Approaches"
            items={profile.trainingApproaches}
            onChange={(trainingApproaches) => setProfile({ trainingApproaches })}
            placeholder="e.g. Dialectical Behavioural Therapy"
          />
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
              Qualifications
            </span>
            <textarea
              value={profile.qualifications}
              rows={2}
              onChange={(e) => setProfile({ qualifications: e.target.value })}
              className={`mt-1 ${inputStyles}`}
            />
          </label>
          <ListField
            label="Previous Roles"
            items={profile.previousRoles}
            onChange={(previousRoles) => setProfile({ previousRoles })}
            placeholder="e.g. Team Leader, Beenleigh Adult Mental Health, Qld Health"
          />
        </div>
      )}
    </div>
  );
}

function GroupSection({
  group,
  members,
  expandedSlug,
  confirmDeleteSlug,
  onToggleExpand,
  onUpdate,
  onMove,
  onRequestDelete,
  onConfirmDelete,
  onAdd,
}: {
  group: TeamGroup;
  members: TeamMember[];
  expandedSlug: string | null;
  confirmDeleteSlug: string | null;
  onToggleExpand: (slug: string) => void;
  onUpdate: (member: TeamMember) => void;
  onMove: (slug: string, direction: "up" | "down") => void;
  onRequestDelete: (slug: string) => void;
  onConfirmDelete: (slug: string) => void;
  onAdd: (group: TeamGroup) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold text-charcoal">{GROUP_LABELS[group]}</h2>
        <button
          type="button"
          onClick={() => onAdd(group)}
          className="inline-flex items-center gap-1.5 rounded-full border border-honey/30 px-3.5 py-1.5 text-xs font-semibold text-charcoal transition-colors hover:bg-honey/10"
        >
          <Plus className="h-3.5 w-3.5" />
          Add person
        </button>
      </div>

      <div className="mt-3 divide-y divide-honey/10 overflow-hidden rounded-xl bg-white shadow-sm">
        {members.length === 0 && (
          <p className="p-4 text-sm italic text-charcoal/40">No one in this group yet.</p>
        )}
        {members.map((member, i) => (
          <div key={member.slug}>
            <div className="flex items-center gap-3 p-3">
              <div className={`h-9 w-9 shrink-0 rounded-full bg-gradient-to-br ${member.gradient}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-charcoal">
                  {member.name || "(unnamed)"}
                  {member.hasProfile && (
                    <span className="ml-2 rounded-full bg-honey/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-honey">
                      Profile page
                    </span>
                  )}
                </p>
                <p className="truncate text-xs text-charcoal/60">{member.role || "(no role)"}</p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => onMove(member.slug, "up")}
                  disabled={i === 0}
                  className="rounded p-1.5 text-charcoal/50 hover:bg-cream disabled:opacity-30"
                  aria-label="Move up"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onMove(member.slug, "down")}
                  disabled={i === members.length - 1}
                  className="rounded p-1.5 text-charcoal/50 hover:bg-cream disabled:opacity-30"
                  aria-label="Move down"
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onToggleExpand(member.slug)}
                  className="rounded p-1.5 text-charcoal/50 hover:bg-cream"
                  aria-label="Edit"
                >
                  {expandedSlug === member.slug ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    confirmDeleteSlug === member.slug
                      ? onConfirmDelete(member.slug)
                      : onRequestDelete(member.slug)
                  }
                  className={`rounded px-2 py-1.5 text-xs font-semibold ${
                    confirmDeleteSlug === member.slug
                      ? "bg-red-600 text-white"
                      : "text-charcoal/50 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  {confirmDeleteSlug === member.slug ? (
                    "Confirm?"
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            {expandedSlug === member.slug && (
              <MemberEditor member={member} onChange={onUpdate} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamEditorForm({ initialTeam }: { initialTeam: TeamMember[] }) {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [confirmDeleteSlug, setConfirmDeleteSlug] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const dirty = () => {
    setStatus("idle");
    setError(null);
  };

  const handleAdd = (group: TeamGroup) => {
    const existing = new Set(team.map((m) => m.slug));
    const slug = uniqueSlug("new-team-member", existing);
    const member: TeamMember = {
      slug,
      name: "",
      role: "",
      group,
      gradient: GRADIENT_OPTIONS[0].classes,
      hasProfile: false,
    };
    setTeam((prev) => [...prev, member]);
    setExpandedSlug(slug);
    dirty();
  };

  const handleUpdate = (updated: TeamMember) => {
    setTeam((prev) => prev.map((m) => (m.slug === updated.slug ? updated : m)));
    dirty();
  };

  const handleMove = (slug: string, direction: "up" | "down") => {
    setTeam((prev) => {
      const member = prev.find((m) => m.slug === slug);
      if (!member) return prev;
      const groupIndices = prev
        .map((m, i) => (m.group === member.group ? i : -1))
        .filter((i) => i !== -1);
      const posInGroup = groupIndices.indexOf(prev.indexOf(member));
      const swapWith =
        direction === "up" ? groupIndices[posInGroup - 1] : groupIndices[posInGroup + 1];
      if (swapWith === undefined) return prev;

      const next = [...prev];
      const currentIndex = prev.indexOf(member);
      [next[currentIndex], next[swapWith]] = [next[swapWith], next[currentIndex]];
      return next;
    });
    dirty();
  };

  const handleRequestDelete = (slug: string) => setConfirmDeleteSlug(slug);

  const handleConfirmDelete = (slug: string) => {
    setTeam((prev) => prev.filter((m) => m.slug !== slug));
    setConfirmDeleteSlug(null);
    if (expandedSlug === slug) setExpandedSlug(null);
    dirty();
  };

  const handleSave = async () => {
    setStatus("saving");
    setError(null);
    try {
      const result = await saveTeamAction(team);
      if (result.ok) {
        setStatus("saved");
      } else {
        setStatus("error");
        setError(result.error);
      }
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong — please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      {GROUPS.map((group) => (
        <GroupSection
          key={group}
          group={group}
          members={team.filter((m) => m.group === group)}
          expandedSlug={expandedSlug}
          confirmDeleteSlug={confirmDeleteSlug}
          onToggleExpand={(slug) => {
            setExpandedSlug((prev) => (prev === slug ? null : slug));
            setConfirmDeleteSlug(null);
          }}
          onUpdate={handleUpdate}
          onMove={handleMove}
          onRequestDelete={handleRequestDelete}
          onConfirmDelete={handleConfirmDelete}
          onAdd={handleAdd}
        />
      ))}

      <div className="sticky bottom-4 flex flex-col items-center gap-2 rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-honey/10 backdrop-blur">
        <button
          type="button"
          onClick={handleSave}
          disabled={status === "saving"}
          className="bounce-transition inline-flex items-center gap-2 rounded-full bg-orange-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-orange-800 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:rotate-0"
        >
          {status === "saving" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Saving…
            </>
          ) : (
            "Save & Publish"
          )}
        </button>
        {status === "saved" && (
          <p className="flex items-center gap-1.5 text-sm font-medium text-emerald-700">
            <CheckCircle2 className="h-4 w-4" />
            Saved — the site is rebuilding now and will update within about a minute.
          </p>
        )}
        {status === "error" && <p className="max-w-md text-center text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}
