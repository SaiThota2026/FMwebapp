import { config } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { ALL_LOCATIONS } from "../src/data/locations";
import { ALL_SERVICES } from "../src/data/services";
import { SERVICES } from "../src/lib/site";

config({ path: ".env.local" });
config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString,
    ssl: { rejectUnauthorized: false },
  }),
});

async function main() {
  for (const service of ALL_SERVICES) {
    const nav = SERVICES.find((item) => item.slug === service.slug);
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {
        name: nav?.name ?? service.name,
        description: service.lead,
      },
      create: {
        slug: service.slug,
        name: nav?.name ?? service.name,
        description: service.lead,
      },
    });
  }

  await prisma.service.upsert({
    where: { slug: "other" },
    update: {
      name: "Other",
      description: "Enquiry that does not map to a listed service.",
    },
    create: {
      slug: "other",
      name: "Other",
      description: "Enquiry that does not map to a listed service.",
    },
  });

  for (const location of ALL_LOCATIONS) {
    await prisma.location.upsert({
      where: { slug: location.slug },
      update: {
        name: `${location.name}, NSW`,
        city: location.name,
        state: "NSW",
        country: "Australia",
        timezone: "Australia/Sydney",
      },
      create: {
        slug: location.slug,
        name: `${location.name}, NSW`,
        city: location.name,
        state: "NSW",
        country: "Australia",
        timezone: "Australia/Sydney",
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
