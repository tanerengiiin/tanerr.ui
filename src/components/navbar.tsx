"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSidebar } from "./sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/store/default/ui/button";

const bottomNav = [
  {
    name: "Docs",
    href: "/docs",
    path: "docs",
  },
  {
    name: "Components",
    href: "/docs/components/accordion",
    path: "docs/components",
  },
  {
    name: "Charts",
    href: "/docs/charts",
    path: "docs/charts",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { setIsOpen } = useSidebar();

  return (
    <nav className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 flex items-center py-1 pl-2 lg:pl-1 pr-1 shadow-xl max-w-xl w-fit bg-base-950 dark:bg-base-900 border border-base-800 rounded-full">
      <button className="lg:hidden rounded-full text-base-0 w-7 h-7 flex items-center justify-center hover:bg-base-700" onClick={() => setIsOpen(true)}><Menu className="w-4 h-4" /></button>
      <span className="lg:hidden w-px h-4 bg-base-800 ml-2 mr-1"></span>
      <div className="flex items-center gap-0.5">
        {bottomNav.map((item, index) => (
          <NavbarItem item={item} pathname={pathname} key={index} />
        ))}
      </div>
    </nav>
  );
};

const NavbarItem = ({
  item,
  pathname,
}: {
  item: (typeof bottomNav)[0];
  pathname: string;
}) => {
  const isActive = React.useMemo(() => {
    // Root docs path check
    if (item.path === "docs" && pathname === "/docs") {
      return true;
    }

    // Components and Charts path check
    if (pathname.startsWith(`/${item.path}`)) {
      return true;
    }

    return false;
  }, [item.path, pathname]);

  return (
    <Link
      href={item.href}
      className={cn(
        "px-3 py-1.5 rounded-full text-base-300 hover:text-base-0 text-sm font-medium relative transition-colors cursor-pointer",
        isActive && "text-base-0"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="navbar-bg"
          transition={{
            type: "spring",
            duration: 0.32,
            bounce: 0.1,
          }}
          className="bg-base-800 border border-base-700/10 shadow-inner absolute top-0 left-0 w-full h-full rounded-full"
        />
      )}
      <span className="z-10 relative">{item.name}</span>
    </Link>
  );
};

export default Navbar;
