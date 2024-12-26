// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const DOCS_DIR = path.resolve(process.cwd(), "src", "docs");
const OUTPUT_FILE = path.resolve(
  __dirname,
  "..",
  "..",
  "public",
  "data",
  "docsSidebar.json"
);

function getSidebar(dirPath, basePath = "") {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  return entries
    .map((entry) => {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.join(basePath, entry.name);

      if (entry.isDirectory()) {
        // Eğer bir dizin ise, alt dizinlere de gidiyoruz
        return {
          type: "category",
          name: entry.name,
          children: getSidebar(fullPath, relativePath),
        };
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        // ".mdx" uzantısını kaldırıyoruz ve dosya adını alıyoruz
        const cleanPath = relativePath.replace(/\.mdx$/, ""); // .mdx uzantısını kaldırıyoruz
        return {
          type: "doc",
          name: path.basename(entry.name, ".mdx"), // Dosya ismini alıyoruz
          path: cleanPath.replace(/\\/g, "/"), // Yolunuzu normalize edin
        };
      }
      return null;
    })
    .filter(Boolean); // Yalnızca geçerli öğeleri döndürüyoruz
}

function generateSidebar() {
  try {
    const sidebar = getSidebar(DOCS_DIR);
    if (sidebar.length === 0) {
      console.log("No .mdx files found in the docs directory.");
    } else {
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(sidebar, null, 2));
      console.log("Sidebar generated:", OUTPUT_FILE);
    }
  } catch (error) {
    console.error("Error generating sidebar:", error);
  }
}

generateSidebar();
