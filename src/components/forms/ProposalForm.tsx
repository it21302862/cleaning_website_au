"use client";

import { useState } from "react";
import { contactPageContent } from "@/config/content/contact-page";

const { proposal } = contactPageContent;

const placeholders: Record<string, string> = {
  firstName: "e.g. John",
  lastName: "e.g. Smith",
  organization: "e.g. Collins St Tower Pty Ltd",
  email: "name@company.com.au",
  phone: "0400 000 000",
  floorArea: "e.g. 850",
  suburb: "e.g. Melbourne CBD",
};

export function ProposalForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        className="rounded-2xl bg-brand-surface p-6 text-sm text-brand-charcoal"
        role="status"
      >
        Thank you — your proposal request has been received. A Victorian operations
        manager will contact you shortly. (Connect this form to your CRM or email
        API when ready.)
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First Name" name="firstName" required />
        <Field label="Last Name" name="lastName" required />
      </div>
      <Field label="Business/Organization Name" name="organization" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Corporate Email" name="email" type="email" required />
        <Field label="Direct Contact Number" name="phone" type="tel" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Est. Floor Area (sqm)" name="floorArea" type="number" min={0} />
        <Field label="Site Suburb" name="suburb" required />
      </div>
      <div>
        <label htmlFor="scope" className="text-xs font-bold text-brand-forest">
          Custom Instructions / Scope of Work
        </label>
        <textarea
          id="scope"
          name="scope"
          rows={5}
          placeholder="Describe schedules, compliance needs, floor care, or specialist sanitisation requirements…"
          className="mt-1.5 w-full rounded-xl bg-brand-surface px-4 py-3 text-sm text-brand-charcoal outline-none ring-1 ring-brand-gray/20 focus:ring-2 focus:ring-brand-lime"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-lime px-6 py-3.5 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-lime/90 sm:w-auto"
      >
        {proposal.submitLabel}
        <span aria-hidden>→</span>
      </button>
      <p className="text-xs leading-relaxed text-brand-gray">{proposal.privacyNote}</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold text-brand-forest">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        placeholder={placeholders[name]}
        className="mt-1.5 w-full rounded-xl bg-brand-surface px-4 py-3 text-sm text-brand-charcoal outline-none ring-1 ring-brand-gray/20 focus:ring-2 focus:ring-brand-lime"
      />
    </div>
  );
}
