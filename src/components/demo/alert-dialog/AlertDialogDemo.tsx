import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button>Open</Button>} />
      <AlertDialogPopup>
        <AlertDialogTitle>Edit profile</AlertDialogTitle>
        <AlertDialogDescription>
          {"Make changes to your profile here. Click save when you're done."}
        </AlertDialogDescription>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
