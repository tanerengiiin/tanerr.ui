import { Button } from "@/store/default/ui/button";
import { Heart, Plus, Search, Bookmark, Mail, Settings } from "lucide-react";

export default function ButtonWithIconDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Default variant */}
      <div className="flex flex-wrap items-center gap-4">
        <Button>
          <Plus />
          Add New
        </Button>
        <Button tone="secondary">
          <Mail />
          Send Email
        </Button>
        <Button tone="info">
          <Search />
          Search
        </Button>
      </div>

      {/* Outline variant */}
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="outline" tone="primary">
          <Heart />
          Like
        </Button>
        <Button variant="outline">
          <Bookmark />
          Save
        </Button>
        <Button variant="outline" tone="info">
          <Settings />
          Settings
        </Button>
      </div>

      {/* Ghost variant */}
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="ghost" tone="primary">
          <Plus />
          Add New
        </Button>
        <Button variant="ghost">
          <Mail />
          Send Email
        </Button>
        <Button variant="ghost" tone="info">
          <Search />
          Search
        </Button>
      </div>
    </div>
  );
}
