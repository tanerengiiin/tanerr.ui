import { promises as fs } from "fs";
import { codeToHtml } from "shiki/bundle/web";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
} from "@shikijs/transformers";
import type { BundledLanguage } from "shiki/bundle/web";
import { cn } from "@/lib/utils";
import CopyToClipboard from "./CopyToClipboard";

type Props = {
  path?: string; // Optional file path
  code?: string; // Optional code content
  lang?: BundledLanguage;
  className?: string;
};

export default async function CodeViewer({
  path,
  code,
  lang = "jsx",
  className,
}: Props) {
  let fileContent: string;

  if (path) {
    try {
      fileContent = await fs.readFile(path, "utf-8");
    } catch (error) {
      console.error("File could not be read:", error);
      fileContent = `// Something went wrong while reading the file.\n// Please check the provided file path.`;
    }
  } else if (code) {
    fileContent = code;
  } else {
    fileContent = `// No content was provided.\n// You must pass either a 'path' or 'code' prop.`;
  }

  const html = await codeToHtml(fileContent, {
    lang,
    theme: "github-dark",
    transformers: [
      transformerNotationHighlight(),
      transformerNotationDiff(),
      transformerNotationFocus(),
    ],
  });

  return (
    <div
      className={cn(
        "relative mt-10 border border-transparent border-neutral-800 rounded-lg overflow-hidden shadow-md",
        className
      )}
    >
      <CopyToClipboard code={fileContent} />
      <div
        className="[&_pre]:max-h-[560px] [&_pre]:outline-main [&_pre]:overflow-auto text-sm [&>pre]:!bg-neutral-900 [&>pre]:p-4 [&>pre]:leading-normal [&_code]:whitespace-pre-wrap [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
