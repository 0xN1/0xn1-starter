import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pfSans = localFont({
  src: "./fonts/ppf-sans-v.ttf",
  variable: "--font-pf-sans",
});

const pfMono = localFont({
  src: "./fonts/ppf-mono-v.ttf",
  variable: "--font-pf-mono",
});

export const metadata: Metadata = {
  title: "0xn1-starter",
  description: "base starter for 0xn1 nextjs project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pfSans.variable} ${pfMono.variable} selection:text-shadow-2xs selection:bg-n1-orange selection:text-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
