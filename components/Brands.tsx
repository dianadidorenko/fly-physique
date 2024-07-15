"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const brandContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const brandImages = [
  { src: "/assets/img/brands/brand-1.png", href: "" },
  { src: "/assets/img/brands/brand-2.png", href: "" },
  { src: "/assets/img/brands/brand-3.png", href: "" },
  { src: "/assets/img/brands/brand-4.png", href: "" },
  { src: "/assets/img/brands/brand-5.png", href: "" },
];

const Brands = () => {
  return (
    <section className="py-8" id="brands">
      <motion.div
        className="container mx-auto"
        variants={brandContainerVariant}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-5 py-8">
          {brandImages.map((img, index) => (
            <motion.div key={index} variants={brandItem}>
              <Link href={img.href} className="group">
                <Image
                  src={img.src}
                  width={204}
                  height={106}
                  alt="brand"
                  className="opacity-50 group-hover:opacity-100 transition-all duration-300 mx-auto"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
