import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohan Kumar | Portfolio",
  description: "Software Engineer portfolio for Rohan Kumar"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#f5f5f5] text-neutral-800 antialiased dark:bg-neutral-950 dark:text-neutral-300">
        {children}
      </body>
    </html>
  );
}
