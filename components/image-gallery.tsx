"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { images } from "@/images.const";

interface ImageItemProps {
  image: string;
}

function ImageItem({ image }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-square w-full overflow-hidden rounded-lg"
    >
      {isInView && (
        <Image
          src={image}
          alt={image}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
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
