/** Descriptions for Tier-3 GenerateImage calls — keyed by basename. */
export const TIER3_IMAGE_PROMPTS = {
  "about-certifications-hero":
    "Photorealistic professional photograph of insurance and compliance documents on a clean commercial desk with a hi-vis work vest nearby in a Newcastle office, trustworthy facilities management mood. Natural daylight, authentic Australian commercial environment. No text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, shallow depth of field, editorial quality.",
  "about-certifications-section-1":
    "Photorealistic professional photograph of a facilities supervisor reviewing WHS and police-check paperwork before a site induction in a modern Australian commercial lobby. Natural daylight, authentic Australian commercial environment. No text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, shallow depth of field, editorial quality.",
  "about-certifications-section-2":
    "Photorealistic professional photograph of a public liability insurance certificate folder and safety helmet on a meeting table in a Newcastle facilities company office. Natural daylight. No text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, shallow depth of field, editorial quality.",
  "sitemap-hero":
    "Photorealistic professional photograph of a clean modern website wireframe printed on paper next to a laptop showing a facilities company homepage, organised navigation mood, Newcastle office setting. Natural daylight. No readable text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, shallow depth of field, editorial quality.",
  "sitemap-section-1":
    "Photorealistic professional photograph of a facilities manager pointing at a large wall map of Australian service cities with coloured pins, planning coverage. Natural daylight. No readable text, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "sitemap-section-2":
    "Photorealistic professional photograph of organised binder tabs and a tablet showing a site directory in a clean Australian office. Natural daylight. No readable text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "case-studies-hero":
    "Photorealistic professional photograph of a facilities team presenting before-and-after cleaning results on a tablet to a client in a bright commercial lobby, hopeful founding-customer mood. Natural daylight, Australia. No text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "case-studies-section-1":
    "Photorealistic professional photograph of an empty professional portfolio book open on a desk with a pen, ready for first case studies, clean minimal Newcastle office. Natural daylight. No readable text, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "case-studies-section-2":
    "Photorealistic professional photograph of a commercial building exterior after professional cleaning, gleaming glass and tidy entrance, Australian CBD. Natural daylight. No text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "reviews-hero":
    "Photorealistic professional photograph of a smartphone showing a blank review screen held over a clean commercial reception desk, honest new-business mood, Australia. Natural daylight. No readable text or star ratings burned in, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "reviews-section-1":
    "Photorealistic professional photograph of a client handshake with a facilities company owner after a site walk-through in a Newcastle commercial foyer. Natural daylight. No text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "reviews-section-2":
    "Photorealistic professional photograph of a Google Business Profile style storefront plaque area outside a small Australian office building, soft focus background. Natural daylight. No readable business name text, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "privacy-hero":
    "Photorealistic professional photograph of a secure laptop with privacy lock gesture metaphor — hands closing a folder of client enquiry forms on a tidy desk, trustworthy Australian office. Natural daylight. No readable personal data, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "privacy-section-1":
    "Photorealistic professional photograph of encrypted drive and notepad beside a keyboard in a modern Australian compliance office setting. Natural daylight. No readable text, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "privacy-section-2":
    "Photorealistic professional photograph of a privacy policy discussion between two professionals across a meeting table in Newcastle, calm and professional. Natural daylight. No readable documents, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
  "blog-hub-mid":
    "Photorealistic professional photograph of a facilities manager reading industry articles on a tablet in a bright commercial breakout space, Newcastle Australia. Natural daylight. No readable screen text, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, editorial quality.",
};

function cityPrompt(city, scene) {
  return `Photorealistic professional photograph, commercial facilities and cleaning services in ${city}, Australia. ${scene} Natural daylight, authentic Australian commercial environment. No text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, shallow depth of field, editorial quality suitable for a facilities management company website.`;
}

for (const city of ["Sydney", "Brisbane", "Melbourne"]) {
  const slug = city.toLowerCase();
  const skyline =
    city === "Sydney"
      ? "CBD skyline and harbour-adjacent commercial towers"
      : city === "Brisbane"
        ? "CBD and river precinct commercial towers"
        : "CBD and Docklands commercial precinct";
  TIER3_IMAGE_PROMPTS[`locations-${slug}-hero`] = cityPrompt(
    city,
    `Uniformed cleaners maintaining a modern office lobby with ${skyline} visible through glass. Newcastle-managed national delivery mood.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-${slug}-region`] = cityPrompt(
    city,
    `Wide view of ${city} commercial district streets with professional service van context, coverage map feeling without readable map labels.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-${slug}-section-local`] = cityPrompt(
    city,
    `Facilities supervisor coordinating local contractors on a ${city} commercial site walk-through.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-${slug}-section-industries`] = cityPrompt(
    city,
    `Mixed commercial property interiors in ${city} — office, strata lobby and retail common area montage feel as a single coherent photo of a premium lobby.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-${slug}-cluster-1`] = cityPrompt(
    city,
    `Dense CBD office towers and corporate entrances being maintained in ${city}.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-${slug}-cluster-2`] = cityPrompt(
    city,
    `Suburban commercial strip and professional suites receiving scheduled cleaning in ${city}.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-${slug}-card-commercial-cleaning`] = cityPrompt(
    city,
    `Commercial cleaning team polishing floors in a ${city} office tower after hours.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-${slug}-card-strata-cleaning`] = cityPrompt(
    city,
    `Strata common-area cleaning in a ${city} apartment building lobby and lifts.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-${slug}-card-facilities-management`] = cityPrompt(
    city,
    `Facilities manager with tablet inspecting building plant room and common areas in ${city}.`,
  );
  TIER3_IMAGE_PROMPTS[`locations-hub-card-${slug}`] = cityPrompt(
    city,
    `Recognisable ${city} commercial streetscape suitable as a location hub card image.`,
  );
}

for (const [service, scene] of [
  ["commercial-cleaning", "after-hours commercial office cleaning in a Sydney CBD tower"],
  ["strata-cleaning", "strata lobby and bin-room cleaning in a Sydney high-rise apartment building"],
  ["facilities-management", "integrated facilities inspection across a Sydney mixed-use commercial portfolio"],
]) {
  for (const slot of ["hero", "body", "region", "section-1"]) {
    const extra =
      slot === "region"
        ? "Sydney harbour and CBD skyline soft in background"
        : slot === "body"
          ? "close detail of professional cleaning work"
          : "wide establishing shot";
    TIER3_IMAGE_PROMPTS[`combos-sydney-${service}-${slot}`] = cityPrompt(
      "Sydney",
      `${scene}, ${extra}.`,
    );
  }
}
