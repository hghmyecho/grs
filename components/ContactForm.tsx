"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const TOPICS = [
  "General enquiry",
  "Existing client support",
  "Careers / employment",
  "Media enquiry",
  "Other",
];

const BRANCHES = ["Sydney", "Gold Coast", "Brisbane"];

const inputStyles =
  "w-full rounded-xl border border-honey/20 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-slate-400 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/15";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm sm:p-14">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tan text-honey">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-charcoal">
          Message sent
        </h2>
        <p className="mt-3 text-charcoal/80">
          Thanks for reaching out — our team will get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-sm sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-charcoal">
          First name <span className="text-honey">*</span>
          <input
            type="text"
            name="firstName"
            required
            className={`mt-2 ${inputStyles}`}
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Last name <span className="text-honey">*</span>
          <input
            type="text"
            name="lastName"
            required
            className={`mt-2 ${inputStyles}`}
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Email <span className="text-honey">*</span>
          <input
            type="email"
            name="email"
            required
            className={`mt-2 ${inputStyles}`}
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Phone
          <input type="tel" name="phone" className={`mt-2 ${inputStyles}`} />
        </label>
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          Which branch would you like to contact?{" "}
          <span className="text-honey">*</span>
          <select
            name="branch"
            required
            defaultValue={BRANCHES[0]}
            className={`mt-2 ${inputStyles}`}
          >
            {BRANCHES.map((branch) => (
              <option key={branch}>{branch}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          What's this about? <span className="text-honey">*</span>
          <select
            name="topic"
            required
            defaultValue={TOPICS[0]}
            className={`mt-2 ${inputStyles}`}
          >
            {TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          Message <span className="text-honey">*</span>
          <textarea
            name="message"
            required
            rows={5}
            className={`mt-2 ${inputStyles}`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-rust px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-110"
      >
        Send Message
      </button>
    </form>
  );
}
