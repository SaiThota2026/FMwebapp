"use server";

export type ContactFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

const SERVICE_OPTIONS = [
  "Commercial Cleaning",
  "Strata Cleaning",
  "Facilities Management",
  "Office Cleaning",
  "Grounds & Garden Maintenance",
  "Industrial Cleaning",
  "Other",
] as const;

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const siteAddress = String(formData.get("siteAddress") ?? "").trim();
  const frequency = String(formData.get("frequency") ?? "").trim();
  const additionalInfo = String(formData.get("additionalInfo") ?? "").trim();
  const privacyAccepted = formData.get("privacyAccepted") === "on";

  const services = SERVICE_OPTIONS.filter(
    (s) => formData.get(`service-${s}`) === "on",
  );

  const fieldErrors: Record<string, string> = {};

  if (!fullName) fieldErrors.fullName = "Full name is required.";
  if (!phone) fieldErrors.phone = "Phone number is required.";
  if (!email) fieldErrors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (!siteAddress) fieldErrors.siteAddress = "Site address is required.";
  if (services.length === 0) {
    fieldErrors.services = "Select at least one service.";
  }
  if (!privacyAccepted) {
    fieldErrors.privacyAccepted = "You must accept the privacy policy.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  const payload = {
    fullName,
    businessName,
    phone,
    email,
    services,
    siteAddress,
    frequency,
    additionalInfo,
    submittedAt: new Date().toISOString(),
  };

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return {
          ok: false,
          message:
            "We could not send your enquiry right now. Please call 0450 924 377.",
        };
      }
    } catch {
      return {
        ok: false,
        message:
          "We could not send your enquiry right now. Please call 0450 924 377.",
      };
    }
  } else {
    console.info("[FACILITIES MAN] Contact enquiry:", payload);
  }

  return {
    ok: true,
    message:
      "Thank you — your enquiry was received. We will respond within 24 hours, usually the same business day.",
  };
}
