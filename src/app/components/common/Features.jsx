"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import FeaturesCard from "../FeaturesCard";
import { featuresFeatures } from "../content/FeaturesContent";
import "../../styles/mask.css";
export default function Features() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 100], [1.05, 3]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div className="flex flex-col overflow-y-hidden w-screen max-w-7xl  items-center justify-start z-[1]  border-white/20 rounded-3xl">
      {/* FeaturesCard en la parte superior */}
      <div className="relative mb-12 flex b items-center justify-center">
        
        <FeaturesCard />
      </div>
      <div className="rounded-3xl max-w-6xl">
        <motion.div
          style={{ translateY: translate, scale: scale }}
          className="mt-12 mask flex realtive border-t border-l border-r dark:border-black/20 border-white/20 rounded-3xl items-center justify-center"
        >
          <div className='h-[2px] absolute top-0 animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white dark:via-black to-[rgba(17,17,17,0)] transition-all duration-1000' />
          <ul className="grid gap-8 px-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuresFeatures.map((item, idx) => (
              <li
                key={idx}
                className={`group p-6 rounded-2xl shadow-lg group z-10 transition-all duration-500 ${
                  idx % 3 === 0
                    ? "row-span-2 border overflow-hidden dark:border-black/20 border-white/20 shadow-[0px_0px_20px_0px_rgba(255,255,255,0.1)] hover:rotate-6 to-lotus-primary-300/5"
                    : idx % 2 === 0
                    ? " hover:-rotate-6 border overflow-hidden dark:border-black/20 border-white/20 shadow-[0px_0px_20px_0px_rgba(255,255,255,0.1)]  to-secondary-300/5"
                    : " hover:-rotate-2 border overflow-hidden dark:border-black/20 border-white/20 shadow-[0px_0px_20px_0px_rgba(255,255,255,0.1)] to-lotus-secondary-500"
                }`}
              >
                <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full group-hover:rotate-12 group-hover:text-white text-white/60 transition duration-300">
                  <span>{item.icon}</span>
                </div>
                <h4 className="text-xl text-center dark:text-black text-white font-bold group-hover:text-gray-200 dark:group-hover:text-white transition duration-300">
                  {item.title}
                </h4>
                <div className="text-center relative dark:text-black text-gray-100">
                <div className="absolute z-[-1] left-0 w-10 dark:w-20 h-10 dark:bg-black bg-white blur-3xl"></div>
                  {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
