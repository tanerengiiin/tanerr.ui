"use client";

import { useState, useEffect } from "react";
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
  code?: string;
  json?: string; 
  lang?: BundledLanguage;
  className?: string;
};

export default function CodeViewer({
  code,
  json,
  lang = "jsx",
  className,
}: Props) {
  const [html, setHtml] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function processCode() {
      let content = code;

      if (json) {
        setLoading(true);
        setError("");

        try {
          const response = await fetch(json);
          if (!response.ok) {
            throw new Error(`Error fetching file: ${response.statusText}`);
          }
          const jsonData = await response.json();
          content = jsonData.content;
        } catch (err) {
          setError("Error loading JSON file.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      }

      if (content) {
        setContent(content);
        const result = await codeToHtml(content, {
          lang,
          theme: "github-dark",
          transformers: [
            transformerNotationHighlight(),
            transformerNotationDiff(),
            transformerNotationFocus(),
          ],
        });
        setHtml(result || "");
      }
    }

    processCode();
  }, [code, json, lang]);

  return (
    <div
      className={cn(
        "relative mt-10 border border-transparent border-neutral-800 rounded-lg overflow-hidden shadow-md",
        className
      )}
    >
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && content && <CopyToClipboard code={content} />}
      <div
        className="[&_pre]:max-h-[560px] [&_pre]:outline-main [&_pre]:overflow-auto text-sm [&>pre]:!bg-neutral-900 [&>pre]:p-4 [&>pre]:leading-normal [&_code]:whitespace-pre-wrap [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
