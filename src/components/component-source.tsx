"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
}

const ComponentSource = ({
  children,
  className,
  ...props
}: ComponentSourceProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div
      className={cn(
        "group mt-6 mb-2 relative w-full max-w-full overflow-hidden border border-transparent dark:border-base-800 rounded-xl [&_pre]:rounded-none [&_pre]:w-full [&_pre]:my-0 [&_pre]:pb-12 [&_pre]:border-none [&_pre]:max-h-[180px] [&_pre]:transition-[max-height] [&_pre]:duration-200",
        isExpanded && "[&_pre]:max-h-[640px]",
        className
      )}
      {...props}
    >
      {children}
      <div
        className={cn(
          "absolute z-1 bottom-0 w-full h-28 bg-gradient-to-t from-base-900 to-base-900/0 transition-opacity duration-300 pointer-events-none",
          isExpanded && "group-hover:opacity-0"
        )}
      ></div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute z-5 bottom-0 w-full text-base-0 bg-base-950 hover:text-base-300 transition-colors border-t border-base-800 backdrop-blur-md h-8 text-sm font-medium flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isExpanded ? "collapse" : "expand"}
            className="relative flex items-center justify-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, delay: 0.05 }}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
};

export default ComponentSource;
