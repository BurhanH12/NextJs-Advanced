import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "NextJs Advanced",
  description: "Js Advanced Practice",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter-image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
    "twitter-card": "summary_large_image",
    "og-image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
    "og-type": "website",
    "og-url": "https://q-sols.com",
  }
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
