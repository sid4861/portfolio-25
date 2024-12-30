import { TextLoop } from "@/components/ui/text-loop";
import { Instrument_Serif, Inter } from "next/font/google";
import { HomeIcon, Book, Camera, Notebook } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { InstagramIcon } from "@/components/ui/instagram";
import { XIcon } from "@/components/ui/x";
import { PinterestIcon } from "@/components/ui/pinterest";
import { AtSignIcon } from "@/components/ui/at-sign";
import ProjectCard from "@/components/project-card";

//
const serif = Instrument_Serif({ weight: ["400"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"] });

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
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
    href: "#",
  },
];

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <div className="min-h-100vh px-[20px] lg:px-[450px] py-20">
        <h1 className={`${serif.className} text-6xl lg:text-7xl`}>
          <span
            style={{
              background:
                "linear-gradient(180deg, #8f8f8f -10.07%, #111827 87.14%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            I&apos;m
          </span>{" "}
          <span className="text-[#626262]" style={{ fontStyle: "italic" }}>
            Siddharth
          </span>
          <span
            style={{
              background:
                "linear-gradient(180deg, #8f8f8f -10.07%, #111827 87.14%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            ,
          </span>{" "}
        </h1>
        <h1 className={`${serif.className} text-6xl lg:text-7xl mt-4`}>
          <span
            style={{
              background:
                "linear-gradient(180deg, #8f8f8f -10.07%, #111827 87.14%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            a UI
          </span>{" "}
          <TextLoop>
            {[
              <span
                className="text-[#626262]"
                style={{ fontStyle: "italic" }}
                key="developer"
              >
                Developer
              </span>,
              <span
                className="text-[#626262]"
                style={{ fontStyle: "italic" }}
                key="designer"
              >
                Designer
              </span>,
            ]}
          </TextLoop>
        </h1>

        {/* social icons */}
        <section className="flex gap-2 mt-6">
          <a href="https://github.com/sid4861" target="_blank">
            <div className="w-10 h-10 bg-[#DBDBDB] border border-[#BABABA] shadow-[0px_0px_1px_rgba(145,145,145,0.1),-1px_1px_2px_rgba(145,145,145,0.09),-2px_3px_2px_rgba(145,145,145,0.05),-4px_5px_2px_rgba(145,145,145,0.01)] rounded hover:bg-[#E3E3E3]">
              <GithubIcon />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth-lodha-693418105/"
            target="_blank"
          >
            <div className="w-10 h-10 bg-[#DBDBDB] border border-[#BABABA] shadow-[0px_0px_1px_rgba(145,145,145,0.1),-1px_1px_2px_rgba(145,145,145,0.09),-2px_3px_2px_rgba(145,145,145,0.05),-4px_5px_2px_rgba(145,145,145,0.01)] rounded hover:bg-[#E3E3E3]">
              <LinkedinIcon />
            </div>
          </a>
          <a href="https://www.instagram.com/sid4861/" target="_blank">
            <div className="w-10 h-10 bg-[#DBDBDB] border border-[#BABABA] shadow-[0px_0px_1px_rgba(145,145,145,0.1),-1px_1px_2px_rgba(145,145,145,0.09),-2px_3px_2px_rgba(145,145,145,0.05),-4px_5px_2px_rgba(145,145,145,0.01)] rounded hover:bg-[#E3E3E3]">
              <InstagramIcon />
            </div>
          </a>
          <a href="https://x.com/Siddharth0X" target="_blank">
            <div className="w-10 h-10 bg-[#DBDBDB] border border-[#BABABA] shadow-[0px_0px_1px_rgba(145,145,145,0.1),-1px_1px_2px_rgba(145,145,145,0.09),-2px_3px_2px_rgba(145,145,145,0.05),-4px_5px_2px_rgba(145,145,145,0.01)] rounded hover:bg-[#E3E3E3]">
              <XIcon />
            </div>
          </a>
          <a href="https://pin.it/4GX4aPDbj" target="_blank">
            <div className="w-10 h-10 bg-[#DBDBDB] border border-[#BABABA] shadow-[0px_0px_1px_rgba(145,145,145,0.1),-1px_1px_2px_rgba(145,145,145,0.09),-2px_3px_2px_rgba(145,145,145,0.05),-4px_5px_2px_rgba(145,145,145,0.01)] rounded hover:bg-[#E3E3E3]">
              <PinterestIcon />
            </div>
          </a>
          <a href="https://pin.it/4GX4aPDbj" target="_blank">
            <div className="w-10 h-10 bg-[#DBDBDB] border border-[#BABABA] shadow-[0px_0px_1px_rgba(145,145,145,0.1),-1px_1px_2px_rgba(145,145,145,0.09),-2px_3px_2px_rgba(145,145,145,0.05),-4px_5px_2px_rgba(145,145,145,0.01)] rounded hover:bg-[#E3E3E3]">
              <AtSignIcon />
            </div>
          </a>
        </section>
        {/* bio */}
        <section className="mt-14">
          <p className={`text-[#111827] leading-[1.6]`}>
            I’m a frontend developer with a solid foundation in development and
            a growing passion for UI design. I enjoy crafting intuitive user
            interfaces that balance aesthetics and functionality. I can also
            code backend in JavaScript, enabling me to build full-stack
            solutions.
          </p>
          <p className={` mt-6 text-[#111827] leading-[1.6]`}>
            Outside of work, I’m passionate about working out, traveling,
            photography and reading , currently diving into learning about LLMs,
            AI agents, and Python. I also strive to try new experiences—view my
            bucket list here. Tools that I use.
          </p>
        </section>

        {/* projects */}
        <section className="mt-14">
          <h1
            className={`${serif.className} text-6xl lg:text-7xl text-[#111827]`}
            style={{ fontStyle: "italic" }}
          >
            Projects
          </h1>
          <div className="mt-8 flex flex-col gap-4">
            <ProjectCard
              title="Travel recap"
              description="A webapp to create a travel recap video"
              tools={["Nextjs", "figma", "v0"]}
              previewUrl="/travel-recap.png"
              href="https://travelrecap.vercel.app"
            />
            <ProjectCard
              title="Shelfie"
              description="A webapp to create a digital book shelf"
              tools={["Nextjs", "figma", "v0"]}
              previewUrl="/shelfie.png"
              href="https://shelfieapp.vercel.app"
            />
            <ProjectCard
              title="Quick weather check"
              description="A webapp to check last 2 years weather of a city on dates you are travelling"
              tools={["Nextjs", "figma", "v0"]}
              previewUrl="/weathercheck.png"
              href="https://quick-weather-check.vercel.app/"
            />
            <ProjectCard
              title="CryptoSchool App"
              description="UI design for a conceptual app to learn about web3 development"
              tools={["figma"]}
              previewUrl="/cryptoschool.png"
              href="https://www.figma.com/proto/dDOcqnsae32VRhc9tq1hiL/crypto-masterclass?node-id=156-3758&scaling=scale-down&page-id=156%3A2833"
            />
          </div>
        </section>
      </div>

      {/* Dock */}
      <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2">
        <Dock className="items-end pb-3 bg-[#D9D9D9] border border-[#BABABA]">
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-[#d1d1d1] border border-[#BABABA]"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    </div>
  );
}
