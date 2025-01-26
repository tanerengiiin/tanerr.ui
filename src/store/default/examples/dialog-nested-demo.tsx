"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/store/default/ui/dialog";
import { Button } from "@/store/default/ui/button";
import { Loader2 } from "lucide-react";

export default function NestedDialogsDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setChildOpen(false);
      setParentOpen(false);
    }, 1000);
  };

  return (
    <Dialog open={parentOpen} onOpenChange={setParentOpen}>
      <DialogTrigger render={<Button>Delete Account</Button>} />
      <DialogPopup className="sm:max-w-[400px]">
        <DialogTitle>Final Confirmation</DialogTitle>
        <DialogDescription className="mt-2">
          Please type &quot;DELETE&quot; to confirm account deletion. This will:
        </DialogDescription>
        <ul className="list-disc pl-4 mt-2 space-y-1 text-sm text-muted-foreground">
          <li>Permanently remove all your data</li>
          <li>Cancel all active subscriptions</li>
          <li>Delete all saved preferences</li>
        </ul>
        <div className="mt-6 flex items-center gap-2 justify-end">
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Dialog open={childOpen} onOpenChange={setChildOpen}>
            <DialogTrigger
              render={<Button tone="error">Confirm Delete</Button>}
            />
            <DialogPopup className="sm:max-w-[425px]">
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription className="mt-2">
                This action cannot be undone. All your data will be permanently
                deleted.
              </DialogDescription>
              <div className="flex justify-end gap-2 mt-4">
                <DialogClose
                  render={<Button variant="outline">Go back</Button>}
                />
                <Button tone="error" loading={isLoading} onClick={handleDelete}>
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    "Yes, delete everything"
                  )}
                </Button>
              </div>
            </DialogPopup>
          </Dialog>
        </div>
      </DialogPopup>
    </Dialog>
  );
}
