import { config } from "dotenv";

config({ path: ".env" });
config({ path: ".env.local" });

const key = process.env.RANKED_API_KEY;
const id = process.env.RANKED_PROJECT_ID;
if (!key || !id) {
  console.log("missing ranked", Boolean(key), Boolean(id));
} else {
  const items = [];
  for (let offset = 0; offset < 200; offset += 50) {
    const res = await fetch(
      `https://app.ranked.ai/api/v1/projects/${id}/content?limit=50&offset=${offset}`,
      { headers: { Authorization: `Bearer ${key}` } },
    );
    if (!res.ok) {
      console.log("ranked status", res.status);
      break;
    }
    const json = await res.json();
    const page = json.data || [];
    items.push(...page);
    if (page.length < 50) break;
  }
  console.log("--- RANKED ---");
  for (const i of items) {
    console.log(
      [i.scheduled_date, i.status, i.content_type, i.id, i.title].join(" | "),
    );
  }
}
