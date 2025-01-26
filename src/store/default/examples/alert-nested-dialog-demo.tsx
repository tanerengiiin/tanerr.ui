"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogClose,
} from "@/store/default/ui/alert-dialog";
import { Button } from "@/store/default/ui/button";
import { Input } from "@/store/default/ui/input";

export default function AlertNestedDialogsDemo() {
  const [projectName, setProjectName] = React.useState("my-project");
  const [mainDialogOpen, setMainDialogOpen] = React.useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setConfirmDialogOpen(false);
    setMainDialogOpen(false);
    setProjectName("");
    setIsLoading(false);
  };

  return (
    <AlertDialog open={mainDialogOpen} onOpenChange={setMainDialogOpen}>
      <AlertDialogTrigger
        render={<Button tone="error">Delete Project</Button>}
      />
      <AlertDialogPopup>
        <AlertDialogTitle>Delete Project</AlertDialogTitle>
        <div className="space-y-4 mt-2 text-text-secondary">
          <div className="space-y-2">
            <p>This action will:</p>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>Remove all project files and data</li>
              <li>Delete all associated team members</li>
              <li>Cancel any active integrations</li>
              <li>This action cannot be undone</li>
            </ul>
          </div>

          <div className="space-y-2 mt-4">
            <label className="text-sm font-medium">
              Type project name to confirm
            </label>
            <Input
              type="text"
              placeholder="my-project"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 mt-6">
          <AlertDialogClose
            render={<Button variant="outline">Cancel</Button>}
          />

          <AlertDialog
            open={confirmDialogOpen}
            onOpenChange={setConfirmDialogOpen}
          >
            <AlertDialogTrigger
              render={
                <Button tone="error" disabled={projectName !== "my-project"}>
                  Delete Project
                </Button>
              }
            />
            <AlertDialogPopup>
              <AlertDialogTitle>Final Warning</AlertDialogTitle>
              <div className="mt-2">
                <div className="rounded-lg bg-error/10 dark:bg-error/5 p-4 text-error">
                  <p className="text-sm">
                    You are about to permanently delete &quot;my-project&quot;.
                    This action cannot be reversed.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-6">
                <AlertDialogClose
                  render={<Button variant="outline">Go Back</Button>}
                />
                <Button
                  tone="error"
                  onClick={handleConfirm}
                  loading={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    "Confirm"
                  )}
                </Button>
              </div>
            </AlertDialogPopup>
          </AlertDialog>
        </div>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
