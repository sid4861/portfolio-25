"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { Spotlight } from "./ui/spotlight";
import { Card, CardContent } from "./ui/card";

const serif = Instrument_Serif({ weight: ["400"], subsets: ["latin"] });

interface ToolsListProps {
  tools: string[];
}

function ToolsList({ tools }: ToolsListProps) {
  return (
    <div className="space-y-1">
      <h3
        className={`${serif.className} text-[#111827] text-[24px] font-medium`}
      >
        Tools used
      </h3>
      <p className="text-[#626262] text-[14px]">{tools.join(", ")}</p>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  previewUrl: string;
  href: string;
}

export default function ProjectCard({
  title,
  description,
  tools,
  previewUrl,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} target="_blank">
      <Card className="group relative  p-[1px] w-full max-w-[400px] md:max-w-[700px] bg-[#dedede] border-none rounded-xl overflow-hidden transition-shadow hover:shadow-lg">
        <Spotlight
          className="from-stone-200 via-stone-300 to-stone-400 blur-3xl"
          size={120}
        />
        <div className="relative h-full w-full"></div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6 ">
            {/* Content Section */}
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h2
                    className={`${serif.className} text-[#111827] text-[24px] font-medium`}
                  >
                    {title}
                  </h2>
                  <p className="text-[#626262] text-[14px]">{description}</p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-[#111827] opacity-0 transition-opacity group-hover:opacity-100 flex-shrink-0"
                  aria-hidden="true"
                />
              </div>
              <ToolsList tools={tools} />
            </div>

            {/* Image Section */}
            <div className="mt-4 md:mt-0 md:w-[300px]">
              <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                <Image
                  src={previewUrl}
                  alt={`Preview of ${title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
