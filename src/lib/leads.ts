import { ALL_LOCATIONS } from "@/data/locations";
import { SERVICES } from "@/lib/site";
import { getPrisma } from "@/lib/prisma";

const OTHER_SERVICE_SLUG = "other";
const DEFAULT_LOCATION_SLUG = "newcastle";

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? fullName,
    lastName: parts.slice(1).join(" ") || null,
  };
}

function serviceSlugForName(name: string) {
  if (name === "Other") return OTHER_SERVICE_SLUG;
  return SERVICES.find((s) => s.name === name)?.slug ?? null;
}

function inferLocationSlug(siteAddress: string) {
  const hay = siteAddress.toLowerCase();
  const match = ALL_LOCATIONS.find((location) => {
    const name = location.name.toLowerCase();
    const slugAsWords = location.slug.replace(/-/g, " ");
    return hay.includes(name) || hay.includes(slugAsWords);
  });
  return match?.slug ?? DEFAULT_LOCATION_SLUG;
}

export async function createWebsiteLead(input: {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  services: string[];
  siteAddress: string;
  frequency: string;
  additionalInfo: string;
}) {
  const { firstName, lastName } = splitName(input.fullName);
  const serviceSlugs = input.services
    .map(serviceSlugForName)
    .filter((slug): slug is NonNullable<typeof slug> => slug != null);
  const locationSlug = inferLocationSlug(input.siteAddress);
  const primarySlug = serviceSlugs[0];

  const prisma = getPrisma();
  const [primaryService, location] = await Promise.all([
    primarySlug
      ? prisma.service.findUnique({ where: { slug: primarySlug } })
      : Promise.resolve(null),
    prisma.location.findUnique({ where: { slug: locationSlug } }),
  ]);

  return prisma.lead.create({
    data: {
      firstName,
      lastName,
      email: input.email,
      phone: input.phone,
      company: input.businessName || null,
      serviceId: primaryService?.id,
      locationId: location?.id,
      siteAddress: input.siteAddress,
      frequency: input.frequency || null,
      requestedServices: input.services,
      message: input.additionalInfo || null,
      source: "WEBSITE_CONTACT",
      status: "INBOX",
    },
  });
}
