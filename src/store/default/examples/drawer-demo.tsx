import {
  Drawer,
  DrawerTrigger,
  DrawerPopup,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/store/default/ui/drawer";
import { Button } from "@/store/default/ui/button";

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Right Drawer</Button>} />
      <DrawerPopup>
        <DrawerTitle>Cookie Settings</DrawerTitle>
        <DrawerDescription className="mt-2 space-y-4">
          We use cookies to provide you with the best possible experience. By
          continuing to use our website, you agree to our cookie policy.
        </DrawerDescription>
        <div className="flex justify-end gap-2 mt-2">
          <DrawerClose render={<Button variant="outline">Decline</Button>} />
          <DrawerClose render={<Button>Accept All</Button>} />
        </div>
      </DrawerPopup>
    </Drawer>
  );
}
