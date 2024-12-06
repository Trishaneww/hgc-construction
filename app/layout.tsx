import type { Metadata } from "next";
import "./globals.css";
import { Questrial } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Questrial({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HGC Construction",
  description:
    "",
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}