import { getPayload } from "payload";
import config from "@payload-config";

async function main() {
  const email = process.env.PAYLOAD_ADMIN_EMAIL?.trim();
  const password = process.env.PAYLOAD_ADMIN_PASSWORD;

  if (!email || !password) {
    console.error(
      "Set PAYLOAD_ADMIN_EMAIL and PAYLOAD_ADMIN_PASSWORD in .env.local, then rerun cms:create-user.",
    );
    process.exit(1);
  }

  const payload = await getPayload({ config });
  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: email } },
    limit: 1,
    overrideAccess: true,
  });

  if (existing.docs[0]) {
    console.log(`Admin user already exists: ${email}`);
    process.exit(0);
  }

  await payload.create({
    collection: "users",
    data: { email, password },
    overrideAccess: true,
  });

  console.log(`Created admin user: ${email}`);
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
