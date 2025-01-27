import { Button } from "@/store/default/ui/button";
import { House, Search, Heart } from "lucide-react";

export default function ButtonRoundedDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button rounded>
        <Search />
        Search
      </Button>
      <Button rounded variant="outline">
        <House />
        Home
      </Button>
      <Button rounded variant="ghost">
        <Heart />
        Like
      </Button>
    </div>
  );
}
