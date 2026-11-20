import { sql } from "@payloadcms/db-vercel-postgres";
import type { MigrateDownArgs, MigrateUpArgs } from "@payloadcms/db-vercel-postgres";

export const name = "20261119_190000_footer_designed_blurb";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(
    sql.raw(
      "ALTER TABLE public.footer ADD COLUMN IF NOT EXISTS designed_blurb character varying",
    ),
  );
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(
    sql.raw("ALTER TABLE public.footer DROP COLUMN IF EXISTS designed_blurb"),
  );
}
