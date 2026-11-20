"use client";

import { createContext, useContext, type ReactNode } from "react";

import { defaultShell, type SiteShell } from "@/lib/designed/shell";

const SiteShellContext = createContext<SiteShell>(defaultShell);

export function SiteShellProvider({
  value,
  children,
}: {
  value: SiteShell;
  children: ReactNode;
}) {
  return <SiteShellContext.Provider value={value}>{children}</SiteShellContext.Provider>;
}

export function useSiteShell(): SiteShell {
  return useContext(SiteShellContext);
}
