import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
} from "@/store/default/ui/alert-dialog";
import { Button } from "@/store/default/ui/button";

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button>Open</Button>} />
      <AlertDialogPopup>
        <AlertDialogTitle>Edit profile</AlertDialogTitle>
        <AlertDialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </AlertDialogDescription>
        <div className="flex items-center justify-end gap-2 w-full">
          <AlertDialogClose
            render={<Button variant="outline">Cancel</Button>}
          />
          <AlertDialogClose render={<Button>Continue</Button>} />
        </div>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
