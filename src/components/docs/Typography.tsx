import { cn } from "@/lib/utils";
import React from "react";

const Typography = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        `
        prose max-w-full 
        prose-headings:text-neutral-800 dark:prose-headings:text-neutral-50
        prose-h1:mt-10
        prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-16 prose-h2:mb-6 prose-h2:underline prose-h2:underline-offset-[5px] prose-h2:decoration-wavy prose-h2:decoration-[2px] prose-h2:decoration-neutral-400/30 dark:prose-h2:decoration-neutral-500/30
        prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-10 prose-h3:mb-2
        prose-h6:text-base prose-h6:font-medium prose-h6:mt-0
        prose-p:text-[15px] prose-p:leading-normal prose-p:text-neutral-700 dark:prose-p:text-neutral-300
        prose-code:px-1.5 prose-code:py-0.5 prose-code:leading-none prose-code:bg-primary-foreground prose-code:text-sm prose-code:rounded-sm prose-code:border prose-code:text-primary prose-code:font-normal prose-code:tracking-tight
        `,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
Typography.displayName = "Typography";
export default Typography;
