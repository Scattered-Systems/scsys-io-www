/*
  Appellation: layout <(home)>
  Contrib: @FL03
*/
"use client";
// imports
import * as React from "react";
// components

export default function Layout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return { children };
}
Layout.displayName = "PageLayout";
