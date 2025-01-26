import { Button } from "@/store/default/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-svh w-full flex flex-col items-center justify-center p-6">
      <div>
        <div className="flex items-center justify-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-main to-main-active"></span>
          <span className="flex-1 text-3xl font-semibold text-text-primary">
            tanerr/ui
          </span>
        </div>
        <Link href="/docs/components/accordion">
          <Button
            variant={"ghost"}
            size={"lg"}
            className="w-full rounded-full mt-3 mx-auto"
          >
            Show Components
          </Button>
        </Link>
      </div>
    </div>
  );
}
