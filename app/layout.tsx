import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UPA Kids Market",
  description: "Products, services and experiences for kids and families.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
