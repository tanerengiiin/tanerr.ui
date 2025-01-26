export interface SidebarItemType {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  upcoming?: boolean;
  children?: SidebarItemType[];
}
