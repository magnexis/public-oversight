import { existsSync, mkdirSync, rmSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { createRequire } from "node:module";

const projectRoot = process.cwd();
const nextDir = path.join(projectRoot, ".next");
const devDistName = ".next-dev";
const devTempDirName = ".next-temp";
const devTempDir = path.join(projectRoot, devTempDirName);
const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");
const devDistDir = path.join(projectRoot, devDistName);

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
  console.log("Cleared stale .next directory before starting Turbopack.");
}

if (existsSync(devDistDir)) {
  rmSync(devDistDir, { recursive: true, force: true });
  console.log(`Cleared dev output directory: ${devDistDir}`);
}

mkdirSync(devDistDir, { recursive: true });

if (existsSync(devTempDir)) {
  rmSync(devTempDir, { recursive: true, force: true });
  console.log(`Cleared dev temp directory: ${devTempDir}`);
}

mkdirSync(devTempDir, { recursive: true });

const child = spawn(process.execPath, [nextBin, "dev", "--turbopack"], {
  cwd: projectRoot,
  env: {
    ...process.env,
    NEXT_DEV_DIST_DIR_NAME: devDistName,
    TMP: devTempDirName,
    TEMP: devTempDirName,
    TMPDIR: devTempDirName,
  },
  stdio: "inherit",
  shell: false,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
