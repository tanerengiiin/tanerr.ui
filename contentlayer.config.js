import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { codeImport } from "remark-code-import"
import { visit } from "unist-util-visit"
import * as shiki from 'shiki'

import { rehypeComponent } from "./src/lib/rehype-component"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string",
    },
    api: {
      type: "string",
    },
  },
}))

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    links: {
      type: "nested",
      of: LinksProperties,
    },
    featured: {
      type: "boolean",
      default: false,
      required: false,
    },
    component: {
      type: "boolean",
      default: false,
      required: false,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [codeImport],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children
            if (codeEl.tagName !== "code") {
              return
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/
              const match = codeEl.data?.meta.match(regex)
              if (match) {
                node.__event__ = match ? match[1] : null
                codeEl.data.meta = codeEl.data.meta.replace(regex, "")
              }
            }

            // Store raw string in both node and properties
            const rawString = codeEl.children?.[0].value
            node.__rawString__ = rawString
            node.properties = node.properties || {}
            node.properties.__rawString__ = rawString
            node.properties.__src__ = node.properties?.__src__
            node.properties.__style__ = node.properties?.__style__
          }
        })
      },
      rehypeComponent,
      [rehypePrettyCode, {
        theme: "github-dark",
        getHighlighter: () =>
          shiki.getHighlighter({
            themes: ["github-dark"],
            langs: ["typescript", "tsx", "javascript", "jsx"]
          }),
        onVisitLine(node) {
          if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }]
          }
        },
        onVisitHighlightedWord(node) {
          node.properties.className = ["word--highlighted"]
        },
      }],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return
            }

            const preElement = node.children.at(0)
            if (preElement?.tagName !== "pre") {
              return
            }

            preElement.properties["__withMeta__"] =
              node.children.at(0).tagName === "div"
            preElement.properties["__rawString__"] = node.properties.__rawString__

            if (node?.__src__) {
              preElement.properties["__src__"] = node.properties.__src__
            }

            if (node?.__event__) {
              preElement.properties["__event__"] = node.properties.__event__
            }

            if (node?.__style__) {
              preElement.properties["__style__"] = node.properties.__style__
            }
          }
        })
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})