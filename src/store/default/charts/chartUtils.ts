"use client";
import colors from "tailwindcss/colors";
import { ColorProps } from "./types";

export const getTailwindColor = ({ name, degree }: ColorProps): string => {
  if (!name) return colors["blue"][500];
  return colors[name][degree ?? 500];
};

export function hasOnlyOneValueForKey(
  array: any[],
  keyToCheck: string
): boolean {
  const val: any[] = [];

  for (const obj of array) {
    if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
      val.push(obj[keyToCheck]);
      if (val.length > 1) {
        return false;
      }
    }
  }

  return true;
}
