import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "The Public Oversight Hub",
  description:
    "A source-led site for tracking surveillance technology, data centers, public contracts, and local government accountability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-ink font-sans text-slate-100 antialiased">
        <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top,_rgba(32,178,170,0.14),_transparent_22%),radial-gradient(circle_at_85%_14%,_rgba(96,165,250,0.16),_transparent_28%),linear-gradient(180deg,_#07111d_0%,_#09101b_46%,_#050912_100%)]" />
        <div className="fixed inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
        <div className="fixed inset-x-0 top-0 -z-10 h-[22rem] bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),_transparent_58%)]" />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
