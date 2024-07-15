"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24" id="contact">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* info */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt="logo"
              />
            </Link>
            <p className="max-w-sm">Lorem ipsum dolor sit amet consectetur.</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkedAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(510) 710-3464 (510) 899-8257</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-accent" />
                <Link href={"#"}></Link>
                <span>sayhello@email.com</span>
              </li>
            </ul>
          </div>
          {/* blog */}
          <div>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercices
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercices
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercices
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
          </div>
          {/* gallery */}
          <div>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            {/* gallery imgs */}
            <div className="flex flex-wrap gap-2">
              <Link href={"#"}>
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  alt="gallery"
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  alt="gallery"
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  alt="gallery"
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/img/trainers/sofia.jpg"}
                  alt="gallery"
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  alt="gallery"
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  alt="gallery"
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  alt="gallery"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
          {/* newsletter */}
          <div>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />

                <CustomButton containerStyles="h-[50px] px-8" text="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copytight 2024 Fitphysique</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
