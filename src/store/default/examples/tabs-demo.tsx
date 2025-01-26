import { Tabs, TabsList, TabsPanel, TabsTab } from "@/store/default/ui/tabs";
import { Home, Layers, User } from "lucide-react";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="projects">Projects</TabsTab>
        <TabsTab value="account">Account</TabsTab>
      </TabsList>
      <TabsPanel value="overview">
        <div className="relative flex h-40 items-center justify-center">
          <Home size={40} className="opacity-20" />
        </div>
      </TabsPanel>
      <TabsPanel value="projects">
        <div className="relative flex h-40 items-center justify-center">
          <Layers size={40} className="opacity-20" />
        </div>
      </TabsPanel>
      <TabsPanel value="account">
        <div className="relative flex h-40 items-center justify-center">
          <User size={40} className="opacity-20" />
        </div>
      </TabsPanel>
    </Tabs>
  );
}
