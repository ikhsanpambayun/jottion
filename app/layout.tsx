import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import { EdgeStoreProvider } from "../lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jottion",
  description: "Notion Clone App",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/icons/logo-light.svg",
        href: "/assets/icons/logo-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/icons/logo-dark.svg",
        href: "/assets/icons/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="jottion-theme"
            >
              <main className="h-full">
                <Toaster closeButton position="top-center" />
                <ModalProvider />
                {children}
              </main>
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
