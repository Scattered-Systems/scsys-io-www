/**
 * Created At: 2025.07.09:14:04:58
 * @author - @FL03
 * @file - platform-appbar.tsx
 */
"use client";
// imports
import * as React from "react";
import { UserIcon } from "lucide-react";
import Link from "next/link";
// hooks
import { useIsMobile } from "@/hooks/use-mobile";
// project
import { cn } from "@/lib/utils";
// components
import {
  AppBar,
  AppBarAction,
  AppBarActions,
  AppBarContent,
  AppBarLeading,
  AppBarTrailing,
} from "@/components/common/appbar";
import { AppLogo } from "@/components/common/icons";
import { ThemeButton } from "@/components/common/theme";
import { Button } from "@/components/ui/button";
// local
import { PlatformNavbar } from "./platform-navbar";

export const PlatformBanner: React.FC<
  Omit<Partial<React.ComponentPropsWithRef<typeof Link>>, "children"> & {
    classNames?: {
      iconClassName?: string;
      labelClassName?: string;
    };
    showLabel?: boolean;
  }
> = ({ ref, className, classNames, href = "/", showLabel, ...props }) => {
  // destructure the label class name from props
  const { iconClassName, labelClassName } = classNames || {};
  return (
    <Link
      {...props}
      ref={ref}
      className={cn(
        "inline-flex items-center flex-nowrap gap-1 p-2",
        "cursor-pointer transition-opacity rounded-lg",
        "hover:bg-accent hover:text-accent-foreground hover:ring hover:ring-accent/10 hover:opacity-80",
        className,
      )}
      href={href}
    >
      <AppLogo className={cn("h-6 w-6", className)} />
      <span
        className={cn(
          "text-sm text-semibold",
          labelClassName,
          showLabel ? "not-sr-only" : "sr-only",
        )}
      >
        pzzld
      </span>
    </Link>
  );
};

/** The primary appbar used throughout the application  */
export const PlatformAppBar: React.FC<
  Omit<
    React.ComponentPropsWithRef<typeof AppBar>,
    "asChild" | "id" | "children"
  > & {
    withBanner?: boolean;
  }
> = ({
  ref,
  className,
  ...props
}) => {
  const isMobile = useIsMobile();
  // render the component
  return (
    <AppBar
      {...props}
      id="platform-appbar"
      ref={ref}
    >
      <AppBarLeading>
        <PlatformBanner href="/" showLabel={!isMobile} />
      </AppBarLeading>
      <AppBarContent>
        <PlatformNavbar />
      </AppBarContent>
      <AppBarTrailing>
        <AppBarActions>
          <AppBarAction>
            <ThemeButton />
          </AppBarAction>
          <AppBarAction asChild>
            <Button
              asChild
              disabled
              className={cn("transition-colors hover:underline", className)}
              size="sm"
              variant="link"
            >
              <Link
                href="https://app.scsys.io/auth/register"
                className="inline-flex flex-nowrap items-center gap-2"
              >
                <UserIcon className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
          </AppBarAction>
        </AppBarActions>
      </AppBarTrailing>
    </AppBar>
  );
};
PlatformAppBar.displayName = "PlatformAppBar";

export default PlatformAppBar;
