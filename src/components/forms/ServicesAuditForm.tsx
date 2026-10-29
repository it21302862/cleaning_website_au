"use client";

import { useState } from "react";
import { servicesPageContent } from "@/config/content/services-page";
import { siteConfig } from "@/config/site";

const { audit } = servicesPageContent;
const { fields } = audit.form;

export function ServicesAuditForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm text-brand-charcoal" role="status">
        Thank you — your audit request has been received.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field
        label={fields.company}
        name="company"
        placeholder={fields.companyPlaceholder}
        required
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={fields.contactName}
          name="contactName"
          placeholder={fields.contactPlaceholder}
          required
        />
        <Field
          label={fields.phone}
          name="phone"
          type="tel"
          placeholder={fields.phonePlaceholder}
          required
        />
      </div>
      <Field
        label={fields.suburb}
        name="suburb"
        placeholder={fields.suburbPlaceholder}
        required
      />
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-forest px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-forest-light"
      >
        {fields.submit}
        <span aria-hidden>→</span>
      </button>
      <p className="text-center text-xs text-brand-charcoal">
        {fields.callPrefix}{" "}
        <a
          href={siteConfig.phones.landlineHref}
          className="font-semibold text-brand-forest underline underline-offset-2"
        >
          {siteConfig.phones.landline}
        </a>
      </p>
    </form>
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
