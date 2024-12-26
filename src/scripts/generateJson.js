// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const sourceDirectory = path.join(__dirname, "..", "components", "demo"); // src/components/demo
const targetDirectory = path.join(
  __dirname,
  "..",
  "..",
  "public", // public klasörüne taşıyoruz
  "data",
  "components",
  "demo"
);

const processAndSaveAsJson = (sourceDir, targetDir) => {
  const createDirRecursive = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  };

  const isTsxFile = (filePath) => filePath.endsWith(".tsx");

  const readFileAndCreateJson = (sourceFilePath, targetFilePath) => {
    let content = fs.readFileSync(sourceFilePath, "utf8");

    const jsonContent = {
      filename: path.basename(sourceFilePath),
      content: content,
    };

    fs.writeFileSync(targetFilePath, JSON.stringify(jsonContent, null, 2));
    console.log(`JSON dosyası oluşturuldu: ${targetFilePath}`);
  };

  const traverseDir = (currentPath, targetPath) => {
    const contents = fs.readdirSync(currentPath, { withFileTypes: true });
    contents.forEach((dirent) => {
      const fullPath = path.join(currentPath, dirent.name);
      const targetFullPath = path.join(
        targetPath,
        dirent.name.replace(".tsx", ".json")
      );

      if (dirent.isDirectory()) {
        createDirRecursive(targetFullPath);
        traverseDir(fullPath, targetFullPath);
      } else if (dirent.isFile() && isTsxFile(fullPath)) {
        readFileAndCreateJson(fullPath, targetFullPath);
      }
    });
  };

  createDirRecursive(targetDir);
  traverseDir(sourceDir, targetDir);
};

processAndSaveAsJson(sourceDirectory, targetDirectory);