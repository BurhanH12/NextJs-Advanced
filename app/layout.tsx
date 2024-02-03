import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "NextJs Advanced",
  description: "Js Advanced Practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100  ">{children}</body>
    </html>
  );
}
