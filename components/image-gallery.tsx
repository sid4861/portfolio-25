"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { images } from "@/images.const";

interface ImageItemProps {
  image: string;
}

function ImageItem({ image }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200"
    >
      {isInView && (
        <>
          {/* Placeholder div while image loads */}
          <div
            className={`absolute inset-0 bg-gray-200 transition-opacity duration-300 ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={image}
            alt={image}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            onLoadingComplete={() => setIsLoaded(true)}
            priority={false}
          />
        </>
      )}
    </motion.div>
  );
}

export function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} />
      ))}
    </div>
  );
}
