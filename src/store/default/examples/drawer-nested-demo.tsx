"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerPopup,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/store/default/ui/drawer";
import { Button } from "@/store/default/ui/button";
import { Input } from "@/store/default/ui/input";

export default function NestedDrawersProfileDemo() {
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);

  return (
    <Drawer open={parentOpen} onOpenChange={setParentOpen}>
      <DrawerTrigger render={<Button>Edit Profile</Button>} />
      <DrawerPopup>
        <DrawerTitle>Edit Profile</DrawerTitle>
        <DrawerDescription className="mt-2">
          Update your profile information:
        </DrawerDescription>
        <ul className="list-disc pl-4 mt-2 space-y-1 text-sm text-text-muted">
          <li>Update your name</li>
          <li>Change your email address</li>
          <li>Manage your password</li>
        </ul>
        <div className="mt-6 flex items-center gap-2 justify-end">
          <DrawerClose render={<Button variant="outline">Cancel</Button>} />
          <Drawer open={childOpen} onOpenChange={setChildOpen}>
            <DrawerTrigger render={<Button>Edit Password</Button>} />
            <DrawerPopup>
              <DrawerTitle>Change Password</DrawerTitle>
              <DrawerDescription className="mt-2">
                Enter your current password and set a new one.
              </DrawerDescription>
              <form className="mt-4 space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium text-text-primary">
                    Current Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Current Password"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium text-text-primary">
                    New Password
                  </label>
                  <Input
                    type="password"
                    placeholder="New Password"
                  />
                </div>
              </form>
              <div className="flex justify-end gap-2 mt-4">
                <DrawerClose render={<Button variant="outline">Cancel</Button>} />
                <Button>Save Password</Button>
              </div>
            </DrawerPopup>
          </Drawer>
        </div>
      </DrawerPopup>
    </Drawer>
  );
}