'use client'
import {motion} from "framer-motion";
export default function Switch({ isToggled, onToggled, onClick, icon, disabled }) {
  return (
      <label
        className={`border flex items-center justify-center  border-white/20 dark:border-black/20  relative  w-12 h-7 overflow-hidden rounded-full`}
      >
        <input
          disabled={disabled}
          type="checkbox"
          className="sr-only peer"
          checked={isToggled}
          onChange={onToggled}
          onClick={onClick}
        />
        <motion.p animate={{ x: isToggled ? 2 : -2, rotate: isToggled ? 45 : -0 }} className={`absolute ${isToggled ? "left-0" : "right-0"}`}>{icon}</motion.p>
        <span
          className={`w-5 h-5 flex items-center justify-center bg-white dark:bg-black/20 absolute rounded-full left-1 top-[3px] peer-checked:bg-white/20 peer-checked:left-[1.5rem] transition-all duration-300`}
        />
      </label>
  );
}
