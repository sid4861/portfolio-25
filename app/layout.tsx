// import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { HomeIcon, Book, Camera, Notebook } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import Link from "next/link";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Blog",
    icon: (
      <Notebook className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Books",
    icon: (
      <Book className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Photos",
    icon: (
      <Camera className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/gallery",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* Dock */}
      <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2">
        <Dock className="items-end pb-3 bg-white border border-[#BABABA]">
          {data.map((item, idx) => (
            <Link href={item.href} key={idx}>
              <DockItem className="aspect-square rounded-full bg-gray-100 border border-[#BABABA]">
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ))}
        </Dock>
      </div>
      <Analytics />
    </html>
  );
}
