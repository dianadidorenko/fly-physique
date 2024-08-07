"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo inventore perferendis quidem fuga sed, quasi qui animi tempore deleniti distinctio.",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo inventore perferendis quidem fuga sed, quasi qui animi tempore deleniti distinctio.",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo inventore perferendis quidem fuga sed, quasi qui animi tempore deleniti distinctio.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            About us
          </motion.h2>
          <motion.p
            className="max-w-[600px] mx-auto text-center"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla at
            ex cupiditate, unde ullam hic
          </motion.p>
        </div>
        {/* featured */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          {featured.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 border p-10"
            >
              <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80x] rounded-full flex justify-center items-center">
                {feature.icon}
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <h4 className="h4 text-accent text-center">{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
