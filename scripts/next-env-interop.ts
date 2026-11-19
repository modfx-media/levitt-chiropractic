import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

/**
 * tsx on Windows compiles this graph to CommonJS. Payload then evaluates
 * `import env from "@next/env"` as `env.default`, and @next/env has no default
 * export, so the process dies before the importer prints. Rewrite that one
 * line before Payload is imported. Native ESM keeps working either way.
 */
const require = createRequire(import.meta.url);
const resolved = require.resolve("payload");
const root = resolved.includes(`${path.sep}dist${path.sep}`)
  ? path.resolve(path.dirname(resolved), "..")
  : path.dirname(resolved);
const loadEnvPath = path.join(root, "dist/bin/loadEnv.js");
if (fs.existsSync(loadEnvPath)) {
  const source = fs.readFileSync(loadEnvPath, "utf8");
  if (!source.includes("import * as nextEnvModule from '@next/env'")) {
    const next = source
      .replace("import nextEnvImport from '@next/env';", "import * as nextEnvModule from '@next/env';")
      .replace(
        /const (?:\{ loadEnvConfig \} = nextEnvImport|loadEnvConfig = nextEnvImport\.loadEnvConfig \?\? nextEnvImport\.default\?\.loadEnvConfig);/,
        "const nextEnvImport = nextEnvModule.loadEnvConfig ? nextEnvModule : nextEnvModule.default;\nconst loadEnvConfig = nextEnvImport.loadEnvConfig;",
      );
    if (next !== source) fs.writeFileSync(loadEnvPath, next);
  }
}
