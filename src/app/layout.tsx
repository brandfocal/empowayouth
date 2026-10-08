import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "EmpowaYouth | INSPIRED | CONNECTED | TRANSFORMED",
    template: "%s | EmpowaYouth",
  },
  description:
    "EmpowaYouth — INSPIRED | CONNECTED | TRANSFORMED. We connect ambitious young South Africans aged 18 to 34 to the mentors, networks, and skills that turn potential into lasting economic power.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/empowayouth-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/empowayouth-icon.png", sizes: "600x600", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="ey-page min-h-screen flex flex-col antialiased">
        <Header />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
