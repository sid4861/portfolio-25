"use client";

import { Instrument_Serif, Inter } from "next/font/google";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { HomeIcon, Book, Camera, Notebook } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";

const serif = Instrument_Serif({ weight: ["400"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"] });

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

const devToolLinks = [
  {
    title: "Figma",
    url: "https://figma.com",
  },
  {
    title: "v0",
    url: "https://v0.dev",
  },
  {
    title: "Claude AI",
    url: "https://claude.ai/login?returnTo=%2F%3F",
  },
  {
    title: "ChatGPT",
    url: "https://chatgpt.com/",
  },
  {
    title: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    title: "Supabase",
    url: "https://supabase.com/",
  },
  {
    title: "Clerk",
    url: "https://clerk.com/",
  },
  {
    title: "Zustand",
    url: "https://zustand-demo.pmnd.rs/",
  },
  {
    title: "Redux Toolkit",
    url: "https://redux-toolkit.js.org/",
  },
  {
    title: "React query",
    url: "https://tanstack.com/query/v3/",
  },
  {
    title: "Shadcn UI",
    url: "https://ui.shadcn.com/",
  },
];

const photographyLinks = [
  {
    title: "Camera - Canon 1300d",
    url: "https://www.amazon.in/Canon-EOS-1300D-Digital-18-55mm/dp/B01D4EYNUG",
  },
  {
    title: "Phone - Pixel 7a",
    url: "https://www.flipkart.com/google-pixel-7a-sea-128-gb/p/itmb4d7b100b1a4d",
  },
  {
    title: "Action cam - GoPro 12",
    url: "https://www.amazon.in/GoPro-Waterproof-HyperSmooth-AutoBoost-International/dp/B0CGRHHGBH?th=1",
  },
  {
    title: "Tripod",
    url: "https://www.amazon.in/Gorilla-Flexible-Reflectors-Umbrellas-Flashlights/dp/B0BRZF329M/ref=sr_1_1_sspa?crid=3VGI640RN39LB&dib=eyJ2IjoiMSJ9.infWxc_FwcitH7ZRy1ghvnQoJaR-lBrOobva17glZ5EKAogtlNon0Gxv5bXExBMwpqYlwrMVj1pAtdrWtP5GeBdvWTZGbLDqVJaX7Zb_Hl6zrvCgPveVTdzxevrzPGPjYG1yXrhE40F1TMBBxfcHnjk3-HauLQ664YGCQVF8NebS26YJ5Momzvd1CWZy5MdFBmMdX-dXMGMInu_KbzHg0Hh5KRCZyIErLuR656HZ0mY_2EzZm_eyLEW6dyFXnUrY1ve73-eQ4IyWdWWfHOar0YAn866I-bpl5bL8WQ0gP7w.p80o9OQVDKh4CzLQjSOM-FkwWxEIQylt3BmJQZraFk8&dib_tag=se&keywords=amazon+basics+gorilla+tripod&nsdOptOutParam=true&qid=1735637629&s=electronics&sprefix=amazon+basics+gorilla+tripo%2Celectronics%2C272&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    title: "Bagpack",
    url: "https://www.amazon.in/dp/B07BZ5VC4H?ref=nb_sb_ss_w_as-reorder_k0_1_7&amp=&crid=2MW26B9HFBHHR&amp=&sprefix=safari+",
  },
  {
    title: "Fanny pack",
    url: "https://www2.hm.com/en_in/productpage.1219434001.html?srsltid=AfmBOooG0iR_g6Fx6pDMH6zXlDT-H-pHjKutH8Xt4T_p7N7bUR1RNlw0s5g&gQT=1",
  },
  {
    title: "Power bank",
    url: "https://www.amazon.in/dp/B08MC57J31?ref=nb_sb_ss_w_as-reorder_k1_1_6&amp=&crid=327MXLLF81AYW&amp=&sprefix=powerb",
  },
];

function Tools() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={`${inter.className}`}>
      <div className="min-h-100vh px-[20px] lg:px-[450px] py-20 text-[#111827]">
        <div>
          <h1 className={`${serif.className} text-5xl`}>
            <VerticalCutReveal>Design & Development</VerticalCutReveal>
          </h1>
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {devToolLinks.map((link) => (
              <motion.div variants={item} key={link.title}>
                <Badge variant={"secondary"}>
                  <Link href={link.url} target="_blank">
                    {link.title}
                  </Link>
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mt-32">
          <h1 className={`${serif.className} text-5xl`}>
            <VerticalCutReveal>Photography & Travel</VerticalCutReveal>
          </h1>
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {photographyLinks.map((link) => (
              <motion.div variants={item} key={link.title}>
                <Badge variant={"secondary"}>
                  <Link href={link.url} target="_blank">
                    {link.title}
                  </Link>
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Dock */}
      <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2">
        <Dock className="items-end pb-3 bg-[#D9D9D9] border border-[#BABABA]">
          {data.map((item, idx) => (
            <Link href={item.href} key={idx}>
              <DockItem className="aspect-square rounded-full bg-[#d1d1d1] border border-[#BABABA]">
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ))}
        </Dock>
      </div>
    </div>
  );
}

export default Tools;
