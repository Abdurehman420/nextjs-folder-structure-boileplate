// index.js
const fs = require("fs-extra");
const path = require("path");

const targetDir = process.env.INIT_CWD || process.cwd();

const structure = {
  directories: [
    "public",
    "public/images",

    "src",
    "src/assets",
    "src/components",
    "src/features",
    "src/features/auth",
    "src/features/dashboard",
    "src/features/profile",
    "src/hooks",
    "src/layouts",
    "src/pages",
    "src/pages/Auth",
    "src/services",
    "src/store",
    "src/store/auth",
    "src/store/user",
    "src/styles",
    "src/types",
    "src/utils",
    "src/config",
  ],
};

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
  } catch (error) {
    console.error("Error creating folder structure:", error);
  }
}

if (require.main === module) {
  createStructure();
}

module.exports = createStructure;
