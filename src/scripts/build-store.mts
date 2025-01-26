import { existsSync, promises as fs } from "fs"
import path from "path"
import { z } from "zod"

// Schema definitions
const storeItemSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(
    z.object({
      path: z.string(),
      type: z.string(),
      target: z.string().optional()
    })
  ),
  categories: z.array(z.string()).optional(),
  component: z.any(),
  source: z.string().optional(),
  meta: z.any().optional()
})

const storeSchema = z.object({
  items: z.array(storeItemSchema),
})

type StoreItem = z.infer<typeof storeItemSchema>
type Store = z.infer<typeof storeSchema>

const STORE_PATH = path.join(process.cwd(), "src/__store__")

// Store configuration
const store: Store = {
  items: [],
}

// Utility function to create temporary source file
async function createTempSourceFile(filename: string) {
  const tempDir = path.join(process.cwd(), "temp")
  if (!existsSync(tempDir)) {
    await fs.mkdir(tempDir)
  }
  return path.join(tempDir, filename)
}

// Build src/__store__/index.tsx
async function buildStore(store: Store) {
  let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-store.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
  "default": {`

  for (const item of store.items) {
    const componentPath = `@/store/default/${item.type === "ui" ? "ui" : "examples"}/${item.name}`
    
    index += `
    "${item.name}": {
      name: "${item.name}",
      description: "${item.description ?? ""}",
      type: "${item.type}",
      registryDependencies: ${JSON.stringify(item.registryDependencies)},
      files: ${JSON.stringify(item.files)},
      categories: ${JSON.stringify(item.categories)},
      component: React.lazy(() => import("${componentPath}")),
      source: "${item.source ?? ""}",
      meta: ${JSON.stringify(item.meta)},
    },`
  }

  index += `
  },
}
`

  // Create src/__store__ directory if it doesn't exist
  if (!existsSync(STORE_PATH)) {
    await fs.mkdir(STORE_PATH, { recursive: true })
  }

  // Write index file
  await fs.writeFile(path.join(STORE_PATH, "index.tsx"), index)
}

// Scan store directory and build items
async function scanStoreDirectory() {
  // Scan UI components
  const uiPath = path.join(process.cwd(), "src/store/default/ui")
  const uiFiles = await fs.readdir(uiPath)
  
  for (const file of uiFiles) {
    if (file.endsWith(".tsx")) {
      const name = file.replace(".tsx", "")
      store.items.push({
        name,
        type: "ui",
        files: [{
          path: `store/default/ui/${file}`,
          type: "ui",
          target: ""
        }],
        registryDependencies: [],
        categories: [],
        component: null,
        source: "",
        meta: {}
      })
    }
  }

  // Scan Examples
  const examplesPath = path.join(process.cwd(), "src/store/default/examples")
  const exampleFiles = await fs.readdir(examplesPath)
  
  for (const file of exampleFiles) {
    if (file.endsWith(".tsx")) {
      const name = file.replace(".tsx", "")
      store.items.push({
        name,
        type: "example",
        files: [{
          path: `store/default/examples/${file}`,
          type: "example",
          target: ""
        }],
        registryDependencies: [],
        categories: [],
        component: null,
        source: "",
        meta: {}
      })
    }
  }
}

async function main() {
  try {
    console.log("💽 Building store...")
    
    await scanStoreDirectory()
    
    const result = storeSchema.safeParse(store)
    if (!result.success) {
      console.error(result.error)
      process.exit(1)
    }

    await buildStore(result.data)
    
    console.log("✅ Done!")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()