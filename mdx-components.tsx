import CodeViewer from "@/components/docs/CodeViewer";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ children }) => <CodeViewer code={children} />,
    ...components,
  };
}
