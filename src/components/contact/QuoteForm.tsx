"use client";

import Link from "next/link";
import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import { SERVICES, SITE } from "@/lib/site";

const initialState: ContactFormState = { ok: false, message: "" };

const FREQUENCIES = [
  "Daily",
  "3× per week",
  "2× per week",
  "Weekly",
  "Fortnightly",
  "Monthly",
  "One-off",
  "Not sure",
] as const;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-700">{message}</p>;
}

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.ok) {
    return (
      <div
        className="rounded-xl border border-brand-teal/30 bg-brand-cream p-8 text-center"
        role="status"
      >
        <p className="font-display text-xl font-semibold text-brand-dark">
          Enquiry received
        </p>
        <p className="mt-3 text-brand-dark/90">{state.message}</p>
        <p className="mt-4">
          Urgent? Call{" "}
          <a
            href={`tel:${SITE.phone}`}
            className="font-semibold text-brand-teal"
          >
            {SITE.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
    >
      {state.message && !state.ok && (
        <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name <span className="text-brand-teal">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <FieldError message={state.fieldErrors?.fullName} />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium">
            Business / Organisation Name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone Number <span className="text-brand-teal">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <FieldError message={state.fieldErrors?.phone} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address <span className="text-brand-teal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <FieldError message={state.fieldErrors?.email} />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">
          Service Required <span className="text-brand-teal">*</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <label key={s.name} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name={`service-${s.name}`}
                className="rounded border-gray-300"
              />
              {s.name}
            </label>
          ))}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="service-Other"
              className="rounded border-gray-300"
            />
            Other
          </label>
        </div>
        <FieldError message={state.fieldErrors?.services} />
      </fieldset>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="siteAddress" className="block text-sm font-medium">
            Site Address <span className="text-brand-teal">*</span>
          </label>
          <input
            id="siteAddress"
            name="siteAddress"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <FieldError message={state.fieldErrors?.siteAddress} />
        </div>
        <div>
          <label htmlFor="frequency" className="block text-sm font-medium">
            Frequency Required
          </label>
          <select
            id="frequency"
            name="frequency"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select frequency
            </option>
            {FREQUENCIES.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="additionalInfo" className="block text-sm font-medium">
          Additional Information
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="photos" className="block text-sm font-medium">
          Upload site photos or floor plan if available
        </label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
          className="mt-1 w-full text-sm"
        />
        <p className="mt-1 text-xs text-brand-dark/70">
          JPG, PNG or PDF, max 10MB. You can also email files to{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-brand-teal underline"
          >
            {SITE.email}
          </a>{" "}
          after submitting.
        </p>
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            name="privacyAccepted"
            required
            className="mt-1 rounded border-gray-300"
          />
          <span>
            I have read the{" "}
            <Link href="/privacy-policy/" className="text-brand-teal underline">
              Privacy Policy
            </Link>{" "}
            and agree to FACILITIES MAN contacting me about this enquiry.
          </span>
        </label>
        <FieldError message={state.fieldErrors?.privacyAccepted} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-md bg-brand-gold py-4 text-lg font-bold text-brand-dark fm-hover-lift fm-tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {pending
          ? "Sending…"
          : "Send Enquiry — We'll Respond Within 24 Hours"}
      </button>

      <p className="mt-4 text-center text-sm text-brand-dark/80">
        Owner-operated · ABN {SITE.abn} · Fully insured · No call centres
      </p>
    </form>
  );
}
