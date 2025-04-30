import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { routes } from "@/utils/constants";

interface NavbarProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export function Navbar({ mobile = false, onItemClick }: NavbarProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={mobile ? "flex-col space-y-2" : "flex-row space-x-2"}
      >
        <NavigationMenuItem>
          <a href={routes.portfolio} onClick={onItemClick}>
            <NavigationMenuLink
              className={`navbar-text text-white hover:text-white ${navigationMenuTriggerStyle()} ${
                mobile ? "w-full justify-start" : ""
              }`}
            >
              Portfolio
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href={routes.caseStudy} onClick={onItemClick}>
            <NavigationMenuLink
              className={`navbar-text text-white hover:text-white ${navigationMenuTriggerStyle()} ${
                mobile ? "w-full justify-start" : ""
              }`}
            >
              Case Studies
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href={routes.services} onClick={onItemClick}>
            <NavigationMenuLink
              className={`navbar-text text-white hover:text-white ${navigationMenuTriggerStyle()} ${
                mobile ? "w-full justify-start" : ""
              }`}
            >
              Services
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href={routes.company} onClick={onItemClick}>
            <NavigationMenuLink
              className={`navbar-text text-white hover:text-white ${navigationMenuTriggerStyle()} ${
                mobile ? "w-full justify-start" : ""
              }`}
            >
              About Us
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
