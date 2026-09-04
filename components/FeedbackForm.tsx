"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

const inputStyles =
  "w-full rounded-xl border border-honey/20 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-slate-400 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/15";

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-honey/20 pt-10 first:mt-0 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-bold text-charcoal">{title}</h2>
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
  required,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-honey/20 px-3.5 py-2.5 text-sm text-charcoal transition-colors has-[:checked]:border-honey has-[:checked]:bg-tan"
        >
          <input
            type="radio"
            name={name}
            value={option}
            required={required}
            checked={value !== undefined ? value === option : undefined}
            onChange={() => onChange?.(option)}
            className="h-4 w-4 accent-honey"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [anonymous, setAnonymous] = useState("");
  const [interpreter, setInterpreter] = useState("");
  const [onBehalf, setOnBehalf] = useState("");
  const [discussed, setDiscussed] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm sm:p-14">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tan text-honey">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-charcoal">
          Thank you for your feedback
        </h2>
        <p className="mt-3 text-charcoal/80">
          Your submission has been received. Our team reviews every
          compliment, complaint, and piece of feedback personally.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm sm:p-10 lg:p-12"
    >
      <div className="space-y-10">
        <Section title="Indicate your response below — this is a:">
          <Field label="Response type" required full>
            <PillOptions name="responseType" options={["Compliment", "Complaint", "Feedback"]} required />
          </Field>
        </Section>

        <Section title="Section 1: Your details">
          <Field label="Do you want to remain anonymous?" required full>
            <PillOptions
              name="anonymous"
              options={["Yes", "No"]}
              required
              value={anonymous}
              onChange={setAnonymous}
            />
          </Field>

          {anonymous === "No" && (
            <>
              <Field label="Your full name" required>
                <input type="text" name="respondentName" required className={inputStyles} />
              </Field>
              <Field label="Your contact details" required hint="Email or phone number">
                <input type="text" name="respondentContact" required className={inputStyles} />
              </Field>
            </>
          )}

          <Field label="Do you require an interpreter?" required full>
            <PillOptions
              name="interpreter"
              options={["Yes", "No"]}
              required
              value={interpreter}
              onChange={setInterpreter}
            />
          </Field>

          {interpreter === "Yes" && (
            <Field label="If yes, what language" full>
              <input type="text" name="interpreterLanguage" className={inputStyles} />
            </Field>
          )}

          <Field
            label="Are you providing feedback on another person's behalf?"
            required
            full
          >
            <PillOptions
              name="onBehalf"
              options={["Yes", "No"]}
              required
              value={onBehalf}
              onChange={setOnBehalf}
            />
          </Field>

          {onBehalf === "Yes" && (
            <>
              <Field label="Your relationship to this person" required>
                <input type="text" name="relationshipToPerson" required className={inputStyles} />
              </Field>
              <Field label="Do you have their consent to provide this feedback on their behalf?" required>
                <PillOptions name="hasConsent" options={["Yes", "No"]} required />
              </Field>
            </>
          )}
        </Section>

        <Section title="Section 4: Details of the Compliment / Feedback / Complaint">
          <Field label="Name of the person that the feedback concerns" required>
            <input type="text" name="feedbackConcernsName" required className={inputStyles} />
          </Field>
          <Field label="Contact person's name and position in the service">
            <input type="text" name="contactPersonPosition" className={inputStyles} />
          </Field>
          <Field
            label="Please provide details of your main concerns"
            required
            full
            hint="Include what events led to making the complaint, compliment or feedback, approximate dates, and who was involved."
          >
            <textarea name="details" required rows={5} className={inputStyles} />
          </Field>
          <Field
            label="Have you discussed your concerns with the service provider or another agency or person for assistance with these concerns?"
            required
            full
          >
            <PillOptions
              name="discussed"
              options={["Yes", "No"]}
              required
              value={discussed}
              onChange={setDiscussed}
            />
          </Field>
          {discussed === "Yes" && (
            <Field label="If yes, with whom and what was the outcome?" full>
              <textarea name="discussedOutcome" rows={3} className={inputStyles} />
            </Field>
          )}
          <Field
            label="What outcomes would you like as a result of providing your feedback?"
            required
            full
          >
            <textarea name="desiredOutcome" required rows={3} className={inputStyles} />
          </Field>
        </Section>

        <Section title="Section 5: Privacy">
          <div className="space-y-3 text-sm leading-relaxed text-charcoal/80 sm:col-span-2">
            <p>
              GRS is committed to protecting your privacy. We collect and
              handle personal information that you provide on this feedback
              form for the purpose of investigating and responding.
            </p>
            <p>
              GRS will only use your information in accordance with relevant
              privacy and other laws. In order for us to provide services to
              you effectively and efficiently, we may need to share your
              personal information with others, such as those that deal with
              the matters identified in your feedback.
            </p>
            <p>
              If you choose to remain anonymous, GRS may be unable to deliver
              the full range of services you require.
            </p>
            <p>
              If you wish to contact GRS Service Managers who are responsible
              for managing the personal information that you provide on this
              form, please call:
              <br />
              QLD area service manager: Dan Bock, 0435 152 821
              <br />
              NSW area service manager: Howard Law, 0422 953 236
            </p>
            <p>
              You also have the right to access your information and seek its
              correction under the Freedom of Information Act 1982. For
              information about making a Freedom of Information application,
              please contact our service director Nick Jiang on 0419 618 540.
            </p>
          </div>
        </Section>

        <Section title="Section 6: Declaration">
          <Field
            label="I declare that the information provided in this GRS Compliment and Complaint Registration Form is, to the best of my knowledge and belief, accurate, truthful, and complete."
            required
            full
            hint="Type your full name to sign this declaration."
          >
            <input type="text" name="signature" required placeholder="Full name" className={inputStyles} />
          </Field>
          <Field label="Date" required>
            <input type="date" name="declarationDate" required className={inputStyles} />
          </Field>
        </Section>
      </div>

      <button
        type="submit"
        className="mt-10 w-full rounded-full bg-rust px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-110"
      >
        Submit
      </button>
    </form>
  );
}
