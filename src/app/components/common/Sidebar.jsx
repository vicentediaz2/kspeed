"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Variants } from "@/app/utils/variants";
import "../../styles/LinearOverlay.css";
import { IPadCursorProvider } from "ipad-cursor/react";
import { IpadCursorConfig } from "ipad-cursor";
import SwitchTheme from "../SwitchTheme";
export default function Sidebar() {
  const [boxShadow, setBoxShadow] = useState(
    "0 0 20px 0 rgba(255,255,255,0.2)"
  );
  const IpadCursorConfig = {};
  return (
    <IPadCursorProvider config={IpadCursorConfig}>
      <motion.div
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
        }}
        className="fixed overflow-hidden left-0 w-20 border-r border-white/5 dark:border-black/20  min-h-screen flex items-center justify-center "
      >
        <span className="block  absolute inset-0  pr-[1.5px] linear-overlay " />
        <span className="absolute p-5 top-0 bg-white dark:bg-black blur-3xl"></span>
        <span className="absolute p-5 bottom-0 bg-white dark:bg-black blur-3xl"></span>
        <motion.div
          onAnimationComplete={() =>
            setBoxShadow("0 0 20px 0 rgba(255,255,255,0.3)")
          }
          style={{ boxShadow }}
          animate={{ scale: [0, 2, 1] }}
          transition={{
            boxShadow: { duration: 5 },
            duration: 1.5,
            ease: "easeInOut",
            repeatType: "reverse",
            damping: 10,
            stiffness: 10,
          }}
          className="absolute border transition duration-700 p-2 rounded-xl border-white/20 dark:border-black/20  top-12"
        >
          <motion.svg
            opacity={0.5}
            initial="hidden"
            animate="visible"
            className="-rotate-45 transform  -scale-x-100"
            width="30"
            height="30"
            viewBox="0 0 14 14"
          >
            <motion.path
              className={"dark:stroke-black"}
              variants={Variants}
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 .5v5h3.5l-5.5 8v-5H2.5L8 .5z"
            />
          </motion.svg>
        </motion.div>
        <motion.div className="absolute bottom-4">
          <SwitchTheme />
        </motion.div>
      </motion.div>
    </IPadCursorProvider>
  );
}
