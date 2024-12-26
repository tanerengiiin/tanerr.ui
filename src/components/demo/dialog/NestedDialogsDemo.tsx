import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function NestedDialogsDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Open</Button>} />
      <DialogPopup>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <Dialog>
          <DialogTrigger render={<Button className="w-fit">Open</Button>} />
          <DialogPopup>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogPopup>
        </Dialog>
      </DialogPopup>
    </Dialog>
  );
}