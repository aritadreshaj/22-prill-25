import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// Import Toma Sans font from Google Fonts or a custom source
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arita Dreshaj | Architecture & Research",
  description:
    "Arita Dreshaj is an architect and urban designer whose research draws on historical theory to examine the social dimensions of space and memory",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
</head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}