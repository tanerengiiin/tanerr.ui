"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import CodeViewer from "./CodeViewer.client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const defaultTabs = ["preview", "code"];

type ComponentViewerProps = {
  code?: string;
  json?: string;
};

const ComponentViewer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ComponentViewerProps
>(({ code, json, children, className, ...props }, ref) => {
  const [selectedTab, setSelectedTab] = useState<string>("preview");
  const { setTheme, resolvedTheme } = useTheme();
  const [inTheme, setInTheme] = useState<string | undefined>("light");

  const handleChangeInsideTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setInTheme(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <div ref={ref} className={cn("", className)} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {defaultTabs.map((item) => (
            <Button
              onClick={() => setSelectedTab(item)}
              variant={selectedTab === item ? "outline" : "ghost"}
              className="capitalize w-20"
              key={item}
            >
              {item}
            </Button>
          ))}
        </div>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={handleChangeInsideTheme}
        >
          <MotionConfig
            transition={{ duration: 0.2, type: "spring", bounce: 0.15 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {inTheme === "dark" ? (
                <motion.span
                  key="checkmark"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Sun size={14} />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Moon size={14} />
                </motion.span>
              )}
            </AnimatePresence>
          </MotionConfig>
        </Button>
      </div>
      <div className="not-prose mt-2 relative">
        <CodeViewer
          code={code}
          json={json}
          className={`mt-0 ${
            selectedTab !== "code" && "hidden pointer-events-none"
          }`}
        />
        <div
          className={cn(
            "not-prose w-full relative z-30  border rounded-lg p-8 flex flex-col gap-3 items-center justify-center min-h-40 transition-colors",
            selectedTab !== "preview" && "hidden pointer-events-none"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
});

ComponentViewer.displayName = "ComponentViewer";
export default ComponentViewer;


const variants = {
  hidden: { opacity: 0.1, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};