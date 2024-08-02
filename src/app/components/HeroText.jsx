"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroText({ label, description }) {
  return (
    <motion.div
      data-cursor="text"
      className="text-7xl dark:text-black  z-0  font-extrabold  leading-none"
    >
      <motion.strong className="bg-gradient-to-br  font-extrabold drop-shadow-[0_0_80px_rgba(255,255,255,0.5)] dark:drop-shadow-[0_0_80px_rgba(05,05,05,1)] z-10 items-center justify-center relative from-white dark:from-black  to-black-800/5 bg-clip-text text-transparent inline-flex ">
        {label}
      </motion.strong>{" "}
      {description}
    </motion.div>
  );
}
