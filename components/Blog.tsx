"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Link from "next/link";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
];

const Blog = () => {
  return (
    <section className="bg-primary-300 py-24 text-white" id="blog">
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center mb-8"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((post, index) => (
              <SwiperSlide key={index} className="blog-swiper">
                <div className="flex flex-col justify-center items-center h-full max-w-[320px]">
                  <Image
                    src={post.img}
                    width={320}
                    height={266}
                    alt={post.title}
                    className="mb-6"
                  />
                  <div className="flex flex-col items-start">
                    <p className="max-w-[380px] uppercase text-[10px] tracking-[3px] mb-1 text-left">
                      {post.date}
                    </p>
                    <Link
                      href={post.href}
                      className="hover:text-accent transition-all duration-300"
                    >
                      <h5 className="h5">{post.title}</h5>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-20 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <div>
          <CustomButton
            containerStyles="block w-[196px] h-[62px] mx-auto text-[16px]"
            text="View all"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
