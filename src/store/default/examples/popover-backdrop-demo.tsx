import { Button } from "@/store/default/ui/button";
import { Input } from "@/store/default/ui/input";
import {
  Popover,
  PopoverPopup,
  PopoverPositioner,
  PopoverTrigger,
  PopoverTitle,
  PopoverDescription,
} from "@/store/default/ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline">Open popover</Button>}
      />
      <PopoverPositioner backdrop>
        <PopoverPopup className="w-80">
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription className="mt-1">
            Set the dimensions for the layer.
          </PopoverDescription>
          <div className="grid gap-4 mt-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="width">Width</label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="maxWidth">Max. width</label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="height">Height</label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="maxHeight">Max. height</label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverPopup>
      </PopoverPositioner>
    </Popover>
  );
}
