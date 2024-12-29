import Typography from "@/components/docs/Typography";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const slugParts = (await params).slug;
  const slugPath = Array.isArray(slugParts) ? slugParts.join("/") : slugParts;

  const { metadata } = await import(`@/docs/${slugPath}.mdx`);
  return {
    title: metadata.title + " ✦ " + "tanerr/ui",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const slugParts = (await params).slug;
  const slugPath = Array.isArray(slugParts) ? slugParts.join("/") : slugParts;

  const { default: Content, metadata } = await import(`@/docs/${slugPath}.mdx`);
  return (
    <div>
      <div className="ml-0.5 flex items-center gap-1">
        {metadata?.breadcrumb?.map((item: string, index: number) => (
          <div
            key={index}
            className={cn(
              "flex items-center text-text-accent",
              index === metadata.breadcrumb.length - 1 && "text-text-primary"
            )}
          >
            <span className="text-sm mr-1 font-mono tracking-tighter">
              {item}
            </span>
            {index < metadata.breadcrumb.length - 1 && (
              <ChevronRight size={14} className="text-text-tertiary" />
            )}
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mt-2.5 text-text-primary">
        {metadata.title}
      </h1>
      <div className="mt-4 flex items-center gap-2">
        <Link
          href={`https://base-ui.com/react/${slugPath}`}
          target="_blank"
          className="group inline-flex items-center gap-0.5 text-primary px-3 py-1 rounded-lg bg-secondary hover:bg-primary/10 transition-all"
        >
          <span className="text-[13px] font-medium">Docs</span>
          <ArrowUpRight
            size={16}
            className="opacity-60 group-hover:opacity-100 transition-all"
          />
        </Link>
        <Link
          href={`https://base-ui.com/react/${slugPath}#api-reference`}
          target="_blank"
          className="group inline-flex items-center gap-0.5 text-primary px-3 py-1 rounded-lg bg-secondary hover:bg-primary/10 transition-all"
        >
          <span className="text-[13px] font-medium">API Reference</span>
          <ArrowUpRight
            size={16}
            className="opacity-60 group-hover:opacity-100 transition-all"
          />
        </Link>
      </div>
      <Typography className="mt-12 h-full">
        <Content />
      </Typography>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: ["components", "button"] },
    { slug: ["components", "switch"] },
    { slug: ["components", "dialog"] },
    { slug: ["components", "collapsible"] },
    { slug: ["components", "input"] },
    { slug: ["components", "select"] },
    { slug: ["components", "alert-dialog"] },
    { slug: ["components", "checkbox"] },
    { slug: ["components", "checkbox-group"] },
    { slug: ["components", "popover"] },
    { slug: ["components", "preview-card"] },
    { slug: ["components", "progress"] },
    { slug: ["components", "slider"] },
    { slug: ["components", "menu"] },
    { slug: ["components", "separator"] },
    { slug: ["components", "tooltip"] },
    { slug: ["components", "radio-group"] },
    { slug: ["components", "scroll-area"] },
    { slug: ["components", "accordion"] },
    { slug: ["components", "tabs"] },
    { slug: ["components", "toggle"] },
    { slug: ["components", "number-field"] },
    { slug: ["components", "toggle-group"] },
  ];
}

export const dynamicParams = false;
