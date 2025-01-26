"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { SidebarItemType } from "@/types/docs";

interface SidebarProps {
  items: SidebarItemType[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <aside className="w-full no-scrollbar sticky top-0 left-0 h-dvh overflow-auto pt-12 px-6 pb-4 border-r flex flex-col gap-1">
      <div className="pl-2.5 flex items-center gap-2">
        <span className="w-4 h-4 rounded-full bg-gradient-to-br from-main to-main-active"></span>
        <span className="flex-1 text-xl font-semibold text-text-primary">
          tanerr/ui
        </span>
      </div>
      
      <div className="flex flex-col gap-8 pt-6 pb-10">
      {items.map((item, i) => (
        <SidebarItem key={item.title + i} item={item} pathname={pathname} />
      ))}
      </div>
    </aside>
  );
};

const SidebarItem = ({
  item,
  pathname,
}: {
  item: SidebarItemType;
  pathname: string;
}) => {
  return (
    <div>
      <h4 className="pl-3 text-xs font-mono text-primary uppercase">
        {item.title}
      </h4>
      {item.children?.length && (
        <div className="mt-3 flex flex-col gap-0.5">
          {item.children?.map((child, j) => (
            <SidebarItemChild
              key={child.title + j}
              child={child}
              pathname={pathname}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarItemChild = ({
  child,
  pathname,
}: {
  child: SidebarItemType;
  pathname: string;
}) => {
  const isActive = pathname ===  child.href;
  return child.href ? (
    <Link
      href={child.href}
      className={cn(
        "relative px-3 h-8 flex items-center text-sm text-text-secondary hover:text-text-primary transition-colors",
        isActive && "text-text-primary"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="sidebar-bg"
          transition={{
            type: "spring",
            duration: 0.32,
            bounce: 0.2,
          }}
          className="bg-secondary absolute top-0 left-0 w-full h-full rounded-md"
        />
      )}
      <span className="z-10">{child.title}</span>
    </Link>
  ) : (
    <span className="relative px-3 h-8 flex items-center text-sm text-text-secondary hover:text-text-primary transition-colors">
      {child.title}
    </span>
  );
};

export default Sidebar;
