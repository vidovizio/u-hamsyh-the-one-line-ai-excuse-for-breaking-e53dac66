import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';

const ENTRY_TEXT = "The cache answered in 2ms and the database in 200ms, so I trusted the fast one; speed and truth are different benchmarks, and prod is now confidently serving last Tuesday.";

function writeEntry(outputDir: string): void {
  const entryPath = `${outputDir}/entry.txt`;
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(entryPath, ENTRY_TEXT, { encoding: 'utf8' });

  const written = readFileSync(entryPath, { encoding: 'utf8' });
  if (written !== ENTRY_TEXT) {
    throw new Error('Self-check failed: written content does not match ENTRY_TEXT');
  }
  console.error(`entry.txt: ${written.length} characters`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || 'output';
writeEntry(outputDir);