import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function NestedAlertDialogsDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button>Open</Button>} />
      <AlertDialogPopup>
        <AlertDialogTitle>Edit profile</AlertDialogTitle>
        <AlertDialogDescription>
          {"Make changes to your profile here. Click save when you're done."}
        </AlertDialogDescription>
        <div className="flex items-center justify-end gap-2 w-full">
          <AlertDialogClose>Cancel</AlertDialogClose>
          <AlertDialog>
            <AlertDialogTrigger
              render={<Button className="w-fit">Open</Button>}
            />
            <AlertDialogPopup>
              <AlertDialogTitle>Edit profile</AlertDialogTitle>
              <AlertDialogDescription>
                {
                  "Make changes to your profile here. Click save when you're done."
                }
              </AlertDialogDescription>
              <div className="flex items-center justify-end gap-2">
                <AlertDialogClose>Cancel</AlertDialogClose>
                <AlertDialogClose variant="default">Continue</AlertDialogClose>
              </div>
            </AlertDialogPopup>
          </AlertDialog>
        </div>
      </AlertDialogPopup>
    </AlertDialog>
  );
}