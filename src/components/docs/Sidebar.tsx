"use client";
import React, { useEffect, useState } from "react";
import docsSidebar from "../../../public/data/docsSidebar.json";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Sidebar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [calculatedTheme, setCalculatedTheme] = useState<string>();
  useEffect(() => {
    setCalculatedTheme(theme);
  }, [theme]);
  return (
    <aside className="w-full sticky top-0 left-0 h-dvh overflow-auto pt-12 px-6 pb-4 border-r flex flex-col gap-1">
      <div className="pl-2.5 flex items-center gap-2">
        <span className="w-4 h-4 rounded-full bg-gradient-to-br from-main to-main-active"></span>
        <span className="flex-1 text-xl font-semibold text-text-primary">
          tanerr/ui
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div className="absolute top-0 w-full pointer-events-none h-[15px] z-50 [background:linear-gradient(to_top,rgba(255,255,255,0)_0%,hsl(var(--background))_85%)]" />
        <div className="absolute top-0 w-full h-[30px] pointer-events-none backdrop-blur-sm z-40 [mask-image:linear-gradient(to_top,rgba(255,255,255,0)_0%,hsl(var(--background))_80%)]" />

        <div className="absolute bottom-0 w-full pointer-events-none h-[20px] z-50 [background:linear-gradient(to_bottom,rgba(255,255,255,0)_0%,hsl(var(--background))_85%)]" />
        <div className="absolute bottom-0 w-full h-[60px] pointer-events-none backdrop-blur-sm z-40 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0)_0%,hsl(var(--background))_80%)]" />
        <div className="h-full overflow-auto no-scrollbar flex flex-col gap-8 pt-6 pb-10">
          {docsSidebar.map((item) => (
            <div key={item.name}>
              <h4 className="pl-3 text-xs font-mono text-primary uppercase">
                {item.name}
              </h4>
              {!!item.children && (
                <div className="mt-3 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      href={"/docs/" + child.path}
                      key={child.name}
                      className={cn(
                        "relative px-3 h-8 flex items-center text-sm text-text-secondary hover:text-text-primary transition-colors",
                        pathname === "/docs/" + child.path &&
                          "text-text-primary"
                      )}
                    >
                      {pathname === "/docs/" + child.path && (
                        <motion.div
                          layoutId="sidebar-bg"
                          transition={{
                            type: "spring",
                            duration: 0.4,
                            bounce: 0.25,
                          }}
                          className="bg-secondary absolute top-0 left-0 w-full h-full rounded-md"
                        />
                      )}
                      <span className="z-10">
                        {child.name
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (char: string) =>
                            char.toUpperCase()
                          )}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pl-2.5 flex items-center">
        <div className="flex h-8 rounded-full border w-fit overflow-hidden divide-x divide-border">
          <button
            onClick={() => setTheme("light")}
            className={cn(
              "pl-2.5 pr-2 hover:bg-secondary text-text-primary h-full transition-all",
              calculatedTheme === "light" && "bg-secondary"
            )}
          >
            <Sun size={15} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={cn(
              "px-2 hover:bg-secondary text-text-primary h-full transition-all",
              calculatedTheme === "dark" && "bg-secondary"
            )}
          >
            <Moon size={15} />
          </button>
          <button
            onClick={() => setTheme("system")}
            className={cn(
              "pr-2.5 pl-2 hover:bg-secondary text-text-primary h-full transition-all",
              calculatedTheme === "system" && "bg-secondary"
            )}
          >
            <Monitor size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
