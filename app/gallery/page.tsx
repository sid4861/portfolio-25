import { ImageGallery } from "@/components/image-gallery";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import Link from "next/link";
import { HomeIcon, Book, Camera, Notebook } from "lucide-react";

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

function Gallery() {
  return (
    <div>
      <ImageGallery />
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

export default Gallery;
