import {
  Collapsible,
  CollapsibleContent,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/store/default/ui/collapsible";

export default function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Base-ui Primiteves</CollapsibleTrigger>
      <CollapsiblePanel>
        <CollapsibleContent>
          <div>@base-ui-components/collapsible</div>
          <div>@base-ui-components/checkbox</div>
          <div>@base-ui-components/dialog</div>
        </CollapsibleContent>
      </CollapsiblePanel>
    </Collapsible>
  );
}
