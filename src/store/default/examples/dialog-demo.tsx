import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/store/default/ui/dialog";
import { Button } from "@/store/default/ui/button";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Show Dialog</Button>} />
      <DialogPopup className="sm:max-w-[425px]">
        <DialogTitle>Cookie Settings</DialogTitle>
        <DialogDescription className="mt-2 space-y-4">
          We use cookies to provide you with the best possible experience. By
          continuing to use our website, you agree to our cookie policy.
        </DialogDescription>
        <div className="flex justify-end gap-2 mt-2">
          <DialogClose render={<Button variant="outline">Decline</Button>} />
          <DialogClose render={<Button>Accept All</Button>} />
        </div>
      </DialogPopup>
    </Dialog>
  );
}
