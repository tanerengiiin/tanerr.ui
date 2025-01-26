import Sidebar from "@/components/sidebar";
import { docsConfig } from "@/config/docs";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto flex items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
      <Sidebar items={docsConfig.sidebarNav} />
      <div className="flex-1 p-6 pt-12 relative">
        {children}
      </div>
    </div>
  );
}
