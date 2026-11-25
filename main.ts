import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || 'output';
const entryPath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });

const entry = "I trusted the cache because it answered in 2ms — the database took 200ms to say 'that data is a lie', and production chose violence.";

writeFileSync(entryPath, entry, { encoding: 'utf8' });