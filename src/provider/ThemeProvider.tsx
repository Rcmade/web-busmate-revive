"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      defaultTheme="system"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
        {children}
        {/* <ProgressBar
          height="2px"
          color="hsl(var(--primary))"
          options={{ showSpinner: false }}
          shallowRouting
        /> */}
        <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />

        <Toaster position="top-center" />
    </NextThemesProvider>
  );
}
