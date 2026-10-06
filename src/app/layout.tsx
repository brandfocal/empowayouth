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
    icon: "/logo/empowayouth-icon.png",
    shortcut: "/logo/empowayouth-icon.png",
    apple: "/logo/empowayouth-icon.png",
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
