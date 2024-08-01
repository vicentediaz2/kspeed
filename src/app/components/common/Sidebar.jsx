"use client";
import React from "react";
import { motion } from "framer-motion";
import { Variants } from "@/app/utils/variants";
import "../../styles/borderLinearOverlay.css";
export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed left-0 w-20 min-h-screen flex items-center justify-center border-r   border-white/20"
    >
      <div className="absolute border p-2 rounded-xl border-white/20 shadow-[0_0_20px_0_rgba(255,255,255,0.2)] top-12">
        <motion.svg
          opacity={0.5}
          initial="hidden"
          animate="visible"
          className="-rotate-45 transform -scale-x-100"
          width="30"
          height="30"
          viewBox="0 0 14 14"
        >
          <motion.path
            variants={Variants}
            fill="none"
            stroke="#ffffff"
            
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 .5v5h3.5l-5.5 8v-5H2.5L8 .5z"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}
