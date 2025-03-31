const fs = require("fs-extra");
const path = require("path");
const { exec } = require("child_process");

const targetDir = process.env.INIT_CWD || process.cwd();

const structure = {
  directories: [
    "public",
    "public/images",

    "src",
    "src/assets",
    "src/components",
    "src/features",
    "src/hooks",
    "src/layouts",
    "src/pages",
    "src/services",
    "src/store",
    "src/styles",
    "src/types",
    "src/utils",
    "src/config",
  ],
};

function selfRemove() {
  console.log("Removing nextjs-structure package...");

  const hasYarnLock = fs.existsSync(path.join(targetDir, "yarn.lock"));
  const packageManager = hasYarnLock ? "yarn remove" : "npm uninstall";

  exec(`${packageManager} nextjs-structure`, { cwd: targetDir }, (error) => {
    if (error) {
      console.error("Error removing package:", error.message);
      return;
    }
  });
}

async function createStructure() {
  try {
    for (const dir of structure.directories) {
      const dirPath = path.join(targetDir, dir);
      await fs.ensureDir(dirPath);
    }

    for (const file of structure.files) {
      const filePath = path.join(targetDir, file.path);
      await fs.outputFile(filePath, file.content);
    }

    selfRemove();
  } catch (error) {
    console.error("Error creating folder structure:", error);
  }
}

if (require.main === module) {
  createStructure();
}

module.exports = createStructure;
