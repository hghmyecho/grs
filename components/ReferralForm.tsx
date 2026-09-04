"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Paperclip, Save, X } from "lucide-react";

const TEAMS = [
  "Sydney",
  "Brisbane",
  "Gold Coast",
  "Tweed/Byron",
  "Rockhampton/Yeppoon (OT Only)",
];

const PRIORITIES = ["Urgent", "Standard", "Low"];

const AGE_GROUPS = [
  "Early Childhood (ECEI), under 9",
  "School age, 9-17",
  "Adult, 18+",
];

const SERVICES = [
  "Occupational Therapy",
  "Physiotherapy",
  "Speech Pathology",
  "Psychology",
  "Dietetics",
  "Art Therapy",
  "Music Therapy",
  "Specialist Behaviour Support",
  "ASD Diagnostic Assessment",
  "Pre-NDIS Assessment",
];

const RISK_FACTORS = [
  "Anaphylaxis (severe allergy)",
  "Falls risk",
  "Pressure injury",
  "Bariatric (over 120kg)",
  "Malnutrition (underweight)",
  "Dysphasia (communication difficulty)",
  "Restricted practice in place",
  "Visual impairment",
  "Hearing impairment",
  "Cognitive impairment",
  "Intellectual impairment",
  "Traumatic experience",
  "Suicidal ideation/history",
  "Social isolation",
  "Socioeconomic disadvantage",
  "Child Safety (FACS) involvement",
  "Aggressive/violent behaviour",
  "Dysphagia (swallowing difficulties)",
  "Forensic history",
];

const PLAN_MANAGEMENT = [
  "Self-managed fund",
  "NDIA managed",
  "Registered plan management service",
];

const HEAR_ABOUT = [
  "Already used GRS before",
  "Recommended by a friend/family",
  "Healthcare provider",
  "Online search",
  "Our website",
  "Social media",
  "Other",
];

const inputStyles =
  "w-full rounded-xl border border-honey/20 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-slate-400 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/15";

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-honey/20 pt-10 first:mt-0 first:border-t-0 first:pt-0">
      <span className="text-xs font-semibold uppercase tracking-wide text-honey">
        {eyebrow}
      </span>
      <h2 className="mt-1 font-display text-xl font-bold text-charcoal">
        {title}
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({
  label,
  required,
  hint,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <p className="text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-honey"> *</span>}
      </p>
      {hint && <p className="mt-0.5 text-xs text-charcoal/60">{hint}</p>}
      <div className="mt-2">{children}</div>
    </div>
  );
}

function PillOptions({
  name,
  options,
  type = "radio",
  columns = 1,
  required,
}: {
  name: string;
  options: string[];
  type?: "radio" | "checkbox";
  columns?: 1 | 2 | 3;
  required?: boolean;
}) {
  const cols =
    columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <div className={`grid gap-2 ${cols}`}>
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-honey/20 px-3.5 py-2.5 text-sm text-charcoal transition-colors has-[:checked]:border-honey has-[:checked]:bg-tan"
        >
          <input
            type={type}
            name={name}
            value={option}
            required={type === "radio" ? required : undefined}
            className="h-4 w-4 accent-honey"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

const DRAFT_KEY = "grs-referral-draft";

function readDraft(form: HTMLFormElement) {
  const draft: Record<string, string[]> = {};
  new FormData(form).forEach((value, name) => {
    if (typeof value !== "string") return;
    (draft[name] ??= []).push(value);
  });
  return draft;
}

function applyDraft(form: HTMLFormElement, draft: Record<string, string[]>) {
  Object.entries(draft).forEach(([name, values]) => {
    const field = form.elements.namedItem(name);
    if (!field) return;
    const elements = field instanceof RadioNodeList ? Array.from(field) : [field];
    elements.forEach((el) => {
      if (el instanceof HTMLInputElement && (el.type === "radio" || el.type === "checkbox")) {
        el.checked = values.includes(el.value);
      } else if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
        el.value = values[0] ?? "";
      }
    });
  });
}

export default function ReferralForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [restored, setRestored] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw || !formRef.current) return;
    try {
      applyDraft(formRef.current, JSON.parse(raw));
      setRestored(true);
    } catch {
      window.localStorage.removeItem(DRAFT_KEY);
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.localStorage.removeItem(DRAFT_KEY);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSaveForLater = () => {
    if (!formRef.current) return;
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(readDraft(formRef.current)));
    setRestored(false);
    setJustSaved(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearDraft = () => {
    window.localStorage.removeItem(DRAFT_KEY);
    formRef.current?.reset();
    setRestored(false);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm sm:p-14">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tan text-honey">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-charcoal">
          Referral received
        </h2>
        <p className="mt-3 text-charcoal/80">
          Thank you — a member of our intake team will review the details and
          be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm sm:p-10 lg:p-12"
    >
      {(restored || justSaved) && (
        <div className="mb-8 flex items-center justify-between gap-3 rounded-xl bg-tan px-4 py-3 text-sm text-charcoal">
          <span>
            {justSaved
              ? "Draft saved on this device — you can safely close this page and finish later."
              : "Your progress has been restored from a saved draft."}
          </span>
          {restored && (
            <button
              type="button"
              onClick={clearDraft}
              className="flex shrink-0 items-center gap-1 text-xs font-semibold text-rust hover:text-honey"
            >
              <X className="h-3.5 w-3.5" />
              Clear
            </button>
          )}
        </div>
      )}

      <div className="space-y-10">
        <Section eyebrow="Referral Details" title="Where should this referral go?">
          <Field label="GRS team / location" required full>
            <PillOptions name="team" options={TEAMS} required columns={2} />
          </Field>
          <Field
            label="Preferred referral priority"
            required
            full
            hint="Wait times vary with service capacity. For urgent needs, please call us directly on 1300 066 716."
          >
            <PillOptions name="priority" options={PRIORITIES} required columns={3} />
          </Field>
          <Field label="Date of referral">
            <input type="date" name="referralDate" className={inputStyles} />
          </Field>
        </Section>

        <Section eyebrow="Client Details" title="Who is this referral for?">
          <Field label="First name" required>
            <input type="text" name="clientFirstName" required className={inputStyles} />
          </Field>
          <Field label="Last name" required>
            <input type="text" name="clientLastName" required className={inputStyles} />
          </Field>
          <Field label="Client email" required>
            <input type="email" name="clientEmail" required className={inputStyles} />
          </Field>
          <Field
            label="Client contact number"
            required
            hint="Best contact for appointment scheduling."
          >
            <input type="tel" name="clientPhone" required className={inputStyles} />
          </Field>
          <Field label="Date of birth" required>
            <input type="date" name="clientDob" required className={inputStyles} />
          </Field>
          <Field label="Gender" required>
            <PillOptions name="gender" options={["Female", "Male", "Another gender"]} required />
          </Field>
          <Field label="Age group" required full>
            <PillOptions name="ageGroup" options={AGE_GROUPS} required columns={3} />
          </Field>
          <Field label="Preferred language">
            <input type="text" name="preferredLanguage" placeholder="English" className={inputStyles} />
          </Field>
          <Field label="Client's representative" hint="Optional">
            <input type="text" name="representative" className={inputStyles} />
          </Field>
          <Field label="Preferred contact method" required>
            <select name="contactMethod" required defaultValue="Email" className={inputStyles}>
              <option>Email</option>
              <option>Phone</option>
              <option>SMS</option>
            </select>
          </Field>
        </Section>

        <Section eyebrow="Client Address" title="Where does the client live?">
          <Field label="Street address" required full>
            <input type="text" name="addressLine1" required className={inputStyles} />
          </Field>
          <Field label="Street address line 2">
            <input type="text" name="addressLine2" className={inputStyles} />
          </Field>
          <Field label="City / suburb" required>
            <input type="text" name="city" required className={inputStyles} />
          </Field>
          <Field label="State" required>
            <input type="text" name="state" required className={inputStyles} />
          </Field>
          <Field label="Postal code" required>
            <input type="text" name="postcode" required className={inputStyles} />
          </Field>
          <Field label="Country">
            <select name="country" defaultValue="Australia" className={inputStyles}>
              <option>Australia</option>
            </select>
          </Field>
        </Section>

        <Section eyebrow="Service Request" title="What support is needed?">
          <Field label="Service(s) required" required full>
            <PillOptions name="services" type="checkbox" options={SERVICES} columns={2} />
          </Field>
          <Field label="Is it essential for the service to be delivered at home?" required full>
            <PillOptions
              name="homeDelivery"
              required
              options={[
                "Yes — we will require further information in our screening assessment",
                "No",
              ]}
            />
          </Field>
          <Field label="Clinician gender preference">
            <select name="clinicianGender" defaultValue="No preference" className={inputStyles}>
              <option>No preference</option>
              <option>Prefer female therapist</option>
              <option>Prefer male therapist</option>
              <option>Only female therapist</option>
              <option>Only male therapist</option>
            </select>
          </Field>
          <Field
            label="Preferred day(s) of the week"
            hint="Helps us match your preference to our booking schedule."
          >
            <input type="text" name="preferredDays" placeholder="e.g. Mon, Wed" className={inputStyles} />
          </Field>
          <Field
            label="Preferred time of day"
            hint="Helps us match your preference to our booking schedule."
          >
            <input type="text" name="preferredTime" placeholder="e.g. Mornings" className={inputStyles} />
          </Field>
        </Section>

        <Section eyebrow="Clinical Information" title="Tell us about the client's needs">
          <Field
            label="Current health/disability issue(s) related to this referral"
            required
            full
            hint="e.g. Stroke, ASD, Schizophrenia"
          >
            <input type="text" name="healthIssue" required className={inputStyles} />
          </Field>
          <Field
            label="Known client personal risk (select all that apply)"
            full
            hint="If you have immediate safety concerns, please contact emergency services. For mild risk of harm to self or others, consider referring to mainstream mental health services."
          >
            <PillOptions name="riskFactors" type="checkbox" options={RISK_FACTORS} columns={3} />
          </Field>
        </Section>

        <Section eyebrow="Funding" title="How is this referral funded?">
          <Field label="Funding source" required>
            <select name="fundingSource" required defaultValue="NDIS" className={inputStyles}>
              <option>NDIS</option>
              <option>Private / self-funded</option>
              <option>Medicare</option>
              <option>Other</option>
            </select>
          </Field>
          <Field
            label="Email address for invoicing"
            required
            hint="For NDIA managed clients, enter 'NDIA managed'."
          >
            <input type="text" name="invoicingEmail" required className={inputStyles} />
          </Field>
          <Field label="NDIS reference number">
            <input type="text" name="ndisNumber" className={inputStyles} />
          </Field>
          <Field label="NDIS plan management" hint="Please provide NDIS plan management method details.">
            <PillOptions name="planManagement" options={PLAN_MANAGEMENT} />
          </Field>
          <Field label="Plan manager's name" hint="Leave blank if not relevant">
            <input type="text" name="planManagerName" className={inputStyles} />
          </Field>
          <Field label="Plan manager's phone" hint="Leave blank if not relevant">
            <input type="tel" name="planManagerPhone" className={inputStyles} />
          </Field>
          <Field label="Plan manager's email" hint="Leave blank if not relevant" full>
            <input type="email" name="planManagerEmail" className={inputStyles} />
          </Field>
          <Field label="NDIS plan start date">
            <input type="date" name="planStartDate" className={inputStyles} />
          </Field>
          <Field label="NDIS plan end date">
            <input type="date" name="planEndDate" className={inputStyles} />
          </Field>
          <Field label="Does the plan have funding periods?" full>
            <PillOptions name="fundingPeriods" options={["Yes", "No", "Not sure"]} columns={3} />
          </Field>
        </Section>

        <Section eyebrow="Referrer Details" title="Who is making this referral?">
          <Field
            label="Reason for referral"
            required
            full
            hint="Please describe in detail your support request."
          >
            <textarea name="reasonForReferral" required rows={4} className={inputStyles} />
          </Field>
          <Field label="Referrer's first name" required>
            <input type="text" name="referrerFirstName" required className={inputStyles} />
          </Field>
          <Field label="Referrer's last name" required>
            <input type="text" name="referrerLastName" required className={inputStyles} />
          </Field>
          <Field label="Referrer's contact email" required>
            <input type="email" name="referrerEmail" required className={inputStyles} />
          </Field>
          <Field label="Referrer's phone number" required>
            <input type="tel" name="referrerPhone" required className={inputStyles} />
          </Field>
          <Field label="How did you hear about us?" required full>
            <PillOptions name="hearAboutUs" type="checkbox" options={HEAR_ABOUT} columns={2} />
          </Field>
          <Field
            label="Additional comments"
            full
            hint="e.g. a preferred clinician, or who you've already spoken to on our team"
          >
            <textarea name="additionalComments" rows={3} className={inputStyles} />
          </Field>
          <Field
            label="Attach referral related document"
            full
            hint="Previous medical summaries, assessments, or treatment records."
          >
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 px-4 py-8 text-sm text-charcoal/60 transition-colors hover:border-honey hover:text-honey">
              <Paperclip className="h-4 w-4" />
              Choose a file or drag it here
              <input type="file" name="attachment" className="hidden" />
            </label>
          </Field>
        </Section>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="flex-1 rounded-full bg-rust px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-110"
        >
          Submit Referral Form
        </button>
        <button
          type="button"
          onClick={handleSaveForLater}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-honey/20 px-6 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-cream"
        >
          <Save className="h-4 w-4" />
          Save for Later
        </button>
      </div>
    </form>
  );
}
