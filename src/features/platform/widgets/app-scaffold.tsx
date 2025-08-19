"use client";
// imports
import * as React from "react";
// components
import { AppBarProvider } from "@/components/common/appbar";
import {
  Scaffold,
  ScaffoldContent,
  ScaffoldNav,
  ScaffoldProvider,
} from "@/components/common/scaffold";
// local
import { PlatformAppBar } from "./platform-appbar";

type AppScaffold = {
  fullWidth?: boolean;
};

/**
 * A minimal scaffolding component used to _frame_ the application's public routes
 */
export const AppScaffold: React.FC<
  & Omit<React.ComponentPropsWithRef<typeof Scaffold>, "asChild">
  & React.PropsWithChildren<AppScaffold>
> = ({
  ref,
  children,
  fullWidth,
  ...props
}) => (
  <ScaffoldProvider>
    <AppBarProvider>
      <Scaffold {...props} ref={ref}>
        {/* appbar */}
        <ScaffoldNav asChild className="order-first sticky top-0 z-10">
          <PlatformAppBar />
        </ScaffoldNav>
        {/* display */}
        <ScaffoldContent fullWidth={fullWidth}>
          {children}
        </ScaffoldContent>
      </Scaffold>
    </AppBarProvider>
  </ScaffoldProvider>
);
AppScaffold.displayName = "AppScaffold";

export default AppScaffold;
