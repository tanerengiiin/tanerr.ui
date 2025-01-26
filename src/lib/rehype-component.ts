import fs from "fs";
import path from "path";
import type { Node, Parent } from "unist";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import { Index } from "../__store__";

interface Data {
  [key: string]: unknown;
}

interface UnistNode extends Node {
  name?: string;
  tagName?: string;
  value?: string;
  attributes?: Array<{
    name: string;
    type?: string;
    value?: string;
  }>;
  properties?: Record<string, any>;
  children?: UnistNode[];
  data?: Data;
}

interface UnistTree extends Parent {
  children: UnistNode[];
  data?: Data;
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      // src prop overrides both name and fileName.
      const { value: srcPath } =
        (getNodeAttributeByName(node, "src") as {
          name: string;
          value?: string;
          type?: string;
        }) || {};

      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string;
        const fileName = getNodeAttributeByName(node, "fileName")?.value as
          | string
          | undefined;

        if (!name && !srcPath) {
          return null;
        }

        try {
          let src: string;

          if (srcPath) {
            src = path.resolve(process.cwd(), srcPath);
          } else {
            const component = Index["default"][name];
            if (!component) {
              console.error(`Component not found: ${name}`);
              return null;
            }
            src = fileName
              ? component.files.find((file: unknown) => {
                  if (typeof file === "string") {
                    return (
                      file.endsWith(`${fileName}.tsx`) ||
                      file.endsWith(`${fileName}.ts`)
                    );
                  }
                  return false;
                }) || component.files[0]?.path
              : component.files[0]?.path;

            if (!src) {
              console.error(`Source file not found for component: ${name}`);
              return null;
            }
          }

          // Read the source file.
          const filePath = path.resolve(process.cwd(), "src", src);
          let source = fs.readFileSync(filePath, "utf8");

          // Replace imports.
          source = source.replaceAll("@/store/default/", "@/components/");
          source = source.replaceAll("export default", "export");


          // Add code as children so that rehype can take over at build time.
          const preElement = u("element", {
            tagName: "pre",
            properties: {
              __rawString__: source,
              __src__: src,
              __style__: "default",
            },
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: ["language-tsx"],
                },
                children: [
                  {
                    type: "text",
                    value: source,
                  },
                ],
              }),
            ],
          });

          // Set node properties directly
          node.properties = {
            ...node.properties,
            __rawString__: source,
          };

          // Replace children instead of pushing
          node.children = [preElement];

        } catch (error) {
          console.error("Error processing ComponentSource:", error);
        }
      }

      if (node.name === "ComponentViewer") {
        const name = getNodeAttributeByName(node, "name")?.value as string;

        if (!name) {
          return null;
        }

        try {
          const component = Index["default"][name];
          if (!component) {
            console.error(`Component not found: ${name}`);
            return null;
          }

          const src = component.files[0]?.path;
          if (!src) {
            console.error(`Source file not found for component: ${name}`);
            return null;
          }

          // Read the source file.
          const filePath = path.resolve(process.cwd(), "src", src);
          let source = fs.readFileSync(filePath, "utf8");

          // Replace imports.
          source = source.replaceAll("@/store/default/", "@/components/");
          source = source.replaceAll("export default", "export");


          // Add code as children so that rehype can take over at build time.
          const preElement = u("element", {
            tagName: "pre",
            properties: {
              __rawString__: source,
              __src__: src,
              __style__: "default",
            },
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: ["language-tsx"],
                },
                children: [
                  {
                    type: "text",
                    value: source,
                  },
                ],
              }),
            ],
          });

          // Set node properties directly
          node.properties = {
            ...node.properties,
            __rawString__: source,
          };

          // Replace children instead of pushing
          node.children = [preElement];
        } catch (error) {
          console.error("Error processing ComponentViewer:", error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

function getComponentSourceFileContent(node: UnistNode) {
  const src = getNodeAttributeByName(node, "src")?.value as string;

  if (!src) {
    return null;
  }

  // Read the source file.
  const filePath = path.join(process.cwd(), src);
  const source = fs.readFileSync(filePath, "utf8");

  return source;
}
