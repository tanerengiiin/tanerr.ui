"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/store/default/ui/button";
import { cn } from "@/lib/utils";
import { Loader, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Index } from "@/__store__";
const defaultTabs = ["preview", "code"];

type ComponentViewerProps = {
  name: string;
};

const ComponentViewer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ComponentViewerProps
>(({ children, className, name, ...props }, ref) => {
  const [selectedTab, setSelectedTab] = useState<string>("preview");
  const { setTheme, resolvedTheme } = useTheme();
  const [inTheme, setInTheme] = useState<string | undefined>("light");

  const handleChangeInsideTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setInTheme(resolvedTheme);
  }, [resolvedTheme]);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0];
  useEffect(() => {
    console.log("Codes", Codes);
  }, [Codes]);

  const Preview = React.useMemo(() => {
    const Component = Index["default"][name]?.component;

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in store.
        </p>
      );
    }

    return <Component />;
  }, [name]);
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
      <div className="mt-2 relative">
        <div className={`w-full [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto [&_pre]:bg-base-800 rounded-xl overflow-hidden [&_pre]:shadow-md ${
            selectedTab !== "code" && "hidden pointer-events-none"
          }`}>
          {Code}
        </div>
        <div
          className={cn(
            "w-full relative z-30 border rounded-lg p-8 flex flex-col gap-3 items-center justify-center min-h-40 transition-colors",
            selectedTab !== "preview" && "hidden pointer-events-none"
          )}
        >
          <React.Suspense
            fallback={
              <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </div>
            }
          >
            {Preview}
          </React.Suspense>
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
