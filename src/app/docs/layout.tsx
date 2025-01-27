import Navbar from "@/components/navbar";
import Sidebar, { SidebarProvider } from "@/components/sidebar";
import { docsConfig } from "@/config/docs";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" max-w-2xl lg:max-w-4xl mx-auto items-start lg:grid lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)]">
      <SidebarProvider>
        <Sidebar items={docsConfig.sidebarNav} />
        <Navbar />
      </SidebarProvider>
      <div className="flex-1 p-6 pt-12 relative">{children}</div>
    </div>
  );
}
