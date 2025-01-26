import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "@/lib/utils";
import ComponentViewer from "@/components/component-viewer";
import "@/styles/mdx.css";
import Stepper from "@/components/stepper";
import Step from "@/components/step";
import ComponentSource from "@/components/component-source";
import CopyToClipboard from "./copy-to-clipboard";
type Event = {
  name: string;
};

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-10 text-4xl font-bold text-base-800 dark:text-base-50",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading text-2xl font-semibold mt-16 mb-6 underline underline-offset-[5px] decoration-wavy decoration-[2px] decoration-base-400/30 dark:decoration-base-500/30",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn("font-heading text-xl font-semibold mt-10 mb-2", className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className={cn("text-base font-medium mt-0", className)} {...props} />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "text-[15px] leading-normal text-base-700 dark:text-base-300",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    __src__,
    __event__,
    __style__,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __style__?: string
    __rawString__?: string
    __withMeta__?: boolean
    __src__?: string
    __event__?: Event["name"]
  } ) => {
    return (
      <div className="relative ">
        <pre
          className={cn(
            "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-xl !bg-base-900 py-4 border border-transparent dark:border-base-800",
            className
          )}
          {...props}
        >
          {children}
        </pre>
        {__rawString__ && (
          <CopyToClipboard
            value={__rawString__}
          />
        )}
      </div>
    )
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative px-1.5 py-0.5 leading-none bg-primary-foreground text-sm rounded-sm border text-primary font-normal tracking-tight",
        className
      )}
      {...props}
    />
  ),
  ComponentViewer,
  ComponentSource,
  Stepper,
  Step
};

interface MdxProps {
  code: string;
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return (
    <div>
      <Component components={components} />
    </div>
  );
};

export default Mdx;
