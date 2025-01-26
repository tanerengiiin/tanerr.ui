import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "@/store/default/ui/menu";
import { Button } from "@/store/default/ui/button";
import {
  Bell,
  Calendar,
  ChevronDownIcon,
  CircleUser,
  Settings,
  User,
} from "lucide-react";

export default function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger
        render={
          <Button variant={"outline"}>
            Open Menu <ChevronDownIcon />
          </Button>
        }
      />
      <MenuPositioner sideOffset={8}>
        <MenuPopup>
          <MenuGroup>
            <MenuGroupLabel>Group label</MenuGroupLabel>
            <MenuItem>
              <CircleUser />
              Profile
            </MenuItem>
            <MenuItem>
              <Settings />
              Settings
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <Calendar />
              Calendar
            </MenuItem>
          </MenuGroup>
          <Menu>
            <MenuSubmenuTrigger>
              <Bell />
              Notifications
            </MenuSubmenuTrigger>
            <MenuPositioner>
              <MenuPopup>
                <MenuItem>
                  <User />
                  Profile
                </MenuItem>
                <MenuItem>
                  <Settings />
                  Settings
                </MenuItem>
              </MenuPopup>
            </MenuPositioner>
          </Menu>
          <MenuSeparator />
          <MenuRadioGroup defaultValue={"item-1"}>
            <MenuRadioItem value="item-1">Item 1</MenuRadioItem>
            <MenuRadioItem value="item-2">Item 2</MenuRadioItem>
            <MenuRadioItem value="item-3">Item 3</MenuRadioItem>
          </MenuRadioGroup>
          <MenuSeparator />
          <MenuCheckboxItem>Item 1</MenuCheckboxItem>
          <MenuCheckboxItem>Item 2</MenuCheckboxItem>
        </MenuPopup>
      </MenuPositioner>
    </Menu>
  );
}
