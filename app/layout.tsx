import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/components/global/AppProvider";

export const metadata: Metadata = {
  title: "Skip API - Demo",
  description: "An example applications built with Skip Go API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <AppProvider>
        {children}
      </AppProvider>
    </html>
  );
}
