import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Mdx from "@/components/mdx";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  console.log(slug);
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title + " ✦ tanerr/ui",
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      creator: "@shadcn",
    },
  };
}

const DocsPage = async ({ params }: DocPageProps) => {
  const doc = await getDocFromParams({ params });
  if (!doc) {
    notFound();
  }
  return (
    <div>
      <div className="ml-0.5 flex items-center gap-1">
        {params?.slug?.map((item: string, index: number) => (
          <div
            key={index}
            className={cn(
              "flex items-center text-text-muted",
              index === params.slug.length - 1 && "text-base-700 dark:text-base-100"
            )}
          >
            <span className="text-sm mr-1 font-mono tracking-tighter capitalize">
              {item}
            </span>
            {index < params.slug.length - 1 && (
              <ChevronRight size={14} className="text-text-tertiary mt-0.5" />
            )}
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mt-2.5 text-text-primary">
        {doc.title}
      </h1>
      {doc.description && (
        <p className="text-text-muted mt-2">{doc.description}</p>
      )}
      <div className="mt-3 flex items-center gap-2">
        {doc.links?.doc && <Link
          href={doc.links?.doc}
          target="_blank"
          className="group inline-flex items-center gap-0.5 text-primary px-3 py-1 rounded-lg bg-secondary hover:bg-primary/10 transition-all"
        >
          <span className="text-[13px] font-medium">Docs</span>
          <ArrowUpRight
            size={16}
            className="opacity-60 group-hover:opacity-100 transition-all"
          />
        </Link>}
        {doc.links?.api && <Link
          href={doc.links?.api}
          target="_blank"
          className="group inline-flex items-center gap-0.5 text-primary px-3 py-1 rounded-lg bg-secondary hover:bg-primary/10 transition-all"
        >
          <span className="text-[13px] font-medium">API Reference</span>
          <ArrowUpRight
            size={16}
            className="opacity-60 group-hover:opacity-100 transition-all"
          />
        </Link>}
      </div>
      <div className="mt-12 pb-24 h-full">
        <Mdx code={doc.body.code} />
      </div>
    </div>
  );
};

export default DocsPage;
