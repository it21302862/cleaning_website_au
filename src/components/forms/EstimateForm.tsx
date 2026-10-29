"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl bg-white p-6 text-brand-forest shadow-2xl sm:p-8">
      <h3 className="text-xl font-bold">Quick Facility Assessment Form</h3>
      <p className="mt-1 text-sm text-brand-slate">
        Fill out the brief details below for an upfront quote.
      </p>

      {submitted ? (
        <p className="mt-6 rounded-xl bg-brand-mint/60 p-4 text-sm" role="status">
          Thanks — your request has been received. Our Melbourne team will contact
          you shortly. (Connect this form to your CRM or email API when ready.)
        </p>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Your Full Name *"
              name="fullName"
              placeholder="e.g. Marcus Vance"
              required
            />
            <Field
              label="Business Email *"
              name="email"
              type="email"
              placeholder="e.g. m.vance@company.com.au"
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Direct Phone / Mobile *"
              name="phone"
              type="tel"
              placeholder="0400 000 000"
              required
            />
            <Field
              label="Facility Type & Suburb *"
              name="facility"
              placeholder="e.g. Medical Clinic, Richmond"
              required
            />
          </div>
          <div>
            <label
              htmlFor="requirements"
              className="text-xs font-bold text-brand-forest"
            >
              Specific Requirements / Estimated Floor Area
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows={4}
              className="mt-1.5 w-full rounded-xl bg-brand-surface px-4 py-3 text-sm outline-none ring-1 ring-brand-gray/20 focus:ring-2 focus:ring-brand-lime"
              placeholder="Tell us about the size of your facility, current schedule, floor care needs, or carpet steam cleaning requirements..."
            />
          </div>
          <label className="flex cursor-pointer items-start gap-2 text-sm text-brand-slate">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-brand-emerald text-brand-emerald focus:ring-brand-lime"
              required
            />
            I agree to receive a tailored facilities proposal.
          </label>
          <Button type="submit" variant="dark" className="w-full">
            Submit
            <span aria-hidden>→</span>
          </Button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
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
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-brand-surface px-4 py-3 text-sm outline-none ring-1 ring-brand-gray/20 focus:ring-2 focus:ring-brand-lime"
      />
    </div>
  );
}
