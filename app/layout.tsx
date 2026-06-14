import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richard Silla Mulandi | Senior Product Leader",
  description:
    "Senior product leader focused on AI, platforms, automation, and operational scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children} <Analytics /><SpeedInsights /></body>
      
    </html>
  );
}
