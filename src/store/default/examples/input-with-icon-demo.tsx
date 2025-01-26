import { Input } from "@/store/default/ui/input";
import { Search } from "lucide-react";

export default function WithIconInputDemo() {
  return (
    <Input
      icon={<Search />}
      className="w-64"
      type="search"
      placeholder="Search"
    />
  );
}
