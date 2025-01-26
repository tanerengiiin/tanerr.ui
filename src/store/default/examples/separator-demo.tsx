import { Separator } from "@/store/default/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold">Getting Started with React</h4>

      <div className="flex items-center space-x-4 text-sm text-text-muted">
        <div>John Doe</div>
        <Separator orientation="vertical" className="h-4" />
        <div>5 min read</div>
        <Separator orientation="vertical" className="h-4" />
        <div>Tutorial</div>
      </div>

      <Separator />

      <p className="text-sm text-text-muted">
        Learn the fundamentals of React and build your first application.
      </p>
    </div>
  );
}
