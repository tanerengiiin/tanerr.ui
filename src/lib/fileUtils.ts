"use server";
import fs from "fs/promises";
import path from "path";

export const readFileAsync = async (file_path: string) => {
  try {
    const content = await fs.readFile(path.join(process.cwd(), file_path), "utf-8");
    return content;
  } catch (error) {
    console.error("Error reading file:", error);
    throw new Error("File could not be read.");
  }
};