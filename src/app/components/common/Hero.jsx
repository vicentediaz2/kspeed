"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroText from "../HeroText";
import "../../styles/LinearOverlay.css";
export default function Hero() {
  return (
    <section className=" flex flex-col overflow-hidden max-w-5xl min-h-screen items-center justify-center  w-screen">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="flex relative text-white mt-24  dark:text-black dark:opacity-50 items-center justify-center text-3xl font-bold text-true-gray-800">
            <motion.svg
              opacity={0.5}
              width="40"
              height="40"
              viewBox="0 0 144 345"
            >
              <motion.path
                className="dark:fill-black"
                fill="#FFFFFF"
                opacity="1.000000"
                stroke="none"
                d="
M1.000000,339.000000 
	C1.000000,230.979111 1.000000,122.958206 1.370935,14.467100 
	C2.294416,13.698007 3.132205,13.538358 3.356332,13.079177 
	C6.292932,7.062815 11.925137,7.125081 16.868465,8.253694 
	C21.565546,9.326085 24.724310,12.911317 25.121056,18.513397 
	C25.425428,22.811150 26.887482,27.015806 27.657900,31.293703 
	C30.149555,45.129082 32.522427,58.985855 35.013527,72.821335 
	C36.844772,82.992027 38.802891,93.139816 40.680077,103.302307 
	C42.469601,112.990234 44.268120,122.676788 45.989071,132.377014 
	C48.135014,144.472763 50.176765,156.586960 52.316685,168.683792 
	C54.511475,181.090820 56.739914,193.492081 59.016308,205.884354 
	C59.929317,210.854614 61.009541,215.794174 62.196289,221.648666 
	C64.100090,219.585770 65.670006,218.405914 66.560188,216.839722 
	C75.765472,200.643768 84.827370,184.366425 93.998634,168.151016 
	C100.480171,156.691223 106.983658,145.242126 113.637871,133.882278 
	C118.373474,125.797836 121.500771,117.748955 121.252373,107.806305 
	C120.537323,79.185524 121.053040,50.535160 120.964066,21.896797 
	C120.940758,14.396912 120.120766,6.784101 127.464272,1.708178 
	C127.469963,1.704241 127.161644,1.246014 127.000000,0.999999 
	C130.692902,1.000000 134.385818,1.000000 138.541260,1.373564 
	C141.002548,3.498085 143.001266,5.249043 145.000000,7.000000 
	C145.000000,47.354229 145.000000,87.708458 144.621841,128.533447 
	C139.488525,137.084061 134.636078,145.108551 129.999969,153.256119 
	C122.130447,167.086166 114.435669,181.015518 106.597008,194.863266 
	C97.098640,211.643051 87.602921,228.425262 77.952477,245.117645 
	C73.688545,252.492996 69.210831,259.758301 64.515190,266.865479 
	C61.677059,271.161194 56.481941,271.091003 52.866879,269.573730 
	C49.630333,268.215302 46.095558,264.402832 45.271370,261.040863 
	C42.545963,249.923462 41.015434,238.514954 38.974228,227.227600 
	C35.666561,208.937073 32.347393,190.648499 28.957973,172.373016 
	C28.362854,169.164169 27.400101,166.023529 26.607130,162.851379 
	C26.162752,162.963287 25.718374,163.075195 25.273996,163.187103 
	C25.273996,216.042984 25.273996,268.898865 25.273996,321.999664 
	C35.185036,321.999664 44.825722,322.085632 54.460846,321.893372 
	C55.697144,321.868683 57.438267,320.685211 58.047344,319.554657 
	C73.447525,290.969727 88.726837,262.319641 104.028839,233.681763 
	C110.015747,222.477219 116.100952,211.323883 121.964630,200.055252 
	C126.532707,191.276474 137.956314,190.789124 142.776199,198.186615 
	C143.121124,198.715988 144.240646,198.740662 145.000000,199.000000 
	C145.000000,245.687561 145.000000,292.375122 144.672272,339.236511 
	C143.229691,341.606873 142.114838,343.803436 141.000000,346.000000 
	C136.643097,346.000000 132.286194,346.000000 127.462997,345.625854 
	C121.518806,340.487854 120.801476,334.326080 120.891823,327.443817 
	C121.182434,305.306915 121.000000,283.163788 121.000000,261.023071 
	C121.000000,259.355255 121.000000,257.687439 121.000000,256.019653 
	C118.786270,257.444733 117.694374,258.961182 116.824989,260.595947 
	C107.774071,277.615265 98.802834,294.677094 89.711212,311.674561 
	C86.299850,318.052338 82.670731,324.315155 79.068695,330.588928 
	C76.101097,335.757690 73.026939,340.865295 70.000000,346.000000 
	C49.312439,346.000000 28.624876,346.000000 7.467261,345.639404 
	C4.998138,343.185852 2.999069,341.092926 1.000000,339.000000 
z"
              />
              <motion.path
                fill="none"
                opacity="1.000000"
                stroke="none"
                d="
M126.531342,0.999999 
	C127.161644,1.246014 127.469963,1.704241 127.464272,1.708178 
	C120.120766,6.784101 120.940758,14.396912 120.964066,21.896797 
	C121.053040,50.535160 120.537323,79.185524 121.252373,107.806305 
	C121.500771,117.748955 118.373474,125.797836 113.637871,133.882278 
	C106.983658,145.242126 100.480171,156.691223 93.998634,168.151016 
	C84.827370,184.366425 75.765472,200.643768 66.560188,216.839722 
	C65.670006,218.405914 64.100090,219.585770 62.196289,221.648666 
	C61.009541,215.794174 59.929317,210.854614 59.016308,205.884354 
	C56.739914,193.492081 54.511475,181.090820 52.316685,168.683792 
	C50.176765,156.586960 48.135014,144.472763 45.989071,132.377014 
	C44.268120,122.676788 42.469601,112.990234 40.680077,103.302307 
	C38.802891,93.139816 36.844772,82.992027 35.013527,72.821335 
	C32.522427,58.985855 30.149555,45.129082 27.657900,31.293703 
	C26.887482,27.015806 25.425428,22.811150 25.121056,18.513397 
	C24.724310,12.911317 21.565546,9.326085 16.868465,8.253694 
	C11.925137,7.125081 6.292932,7.062815 3.356332,13.079177 
	C3.132205,13.538358 2.294416,13.698007 1.370935,13.998443 
	C1.000000,9.680349 1.000000,5.360698 1.000000,1.000000 
	C42.687553,1.000000 84.375114,1.000000 126.531342,0.999999 
z"
              />
              <motion.path
                fill="none"
                opacity="1.000000"
                stroke="none"
                d="
M145.000000,198.531342 
	C144.240646,198.740662 143.121124,198.715988 142.776199,198.186615 
	C137.956314,190.789124 126.532707,191.276474 121.964630,200.055252 
	C116.100952,211.323883 110.015747,222.477219 104.028839,233.681763 
	C88.726837,262.319641 73.447525,290.969727 58.047344,319.554657 
	C57.438267,320.685211 55.697144,321.868683 54.460846,321.893372 
	C44.825722,322.085632 35.185036,321.999664 25.273996,321.999664 
	C25.273996,268.898865 25.273996,216.042984 25.273996,163.187103 
	C25.718374,163.075195 26.162752,162.963287 26.607130,162.851379 
	C27.400101,166.023529 28.362854,169.164169 28.957973,172.373016 
	C32.347393,190.648499 35.666561,208.937073 38.974228,227.227600 
	C41.015434,238.514954 42.545963,249.923462 45.271370,261.040863 
	C46.095558,264.402832 49.630333,268.215302 52.866879,269.573730 
	C56.481941,271.091003 61.677059,271.161194 64.515190,266.865479 
	C69.210831,259.758301 73.688545,252.492996 77.952477,245.117645 
	C87.602921,228.425262 97.098640,211.643051 106.597008,194.863266 
	C114.435669,181.015518 122.130447,167.086166 129.999969,153.256119 
	C134.636078,145.108551 139.488525,137.084061 144.621841,129.002106 
	C145.000000,152.020889 145.000000,175.041794 145.000000,198.531342 
z"
              />
              <motion.path
                fill="none"
                opacity="1.000000"
                stroke="none"
                d="
M70.468658,346.000000 
	C73.026939,340.865295 76.101097,335.757690 79.068695,330.588928 
	C82.670731,324.315155 86.299850,318.052338 89.711212,311.674561 
	C98.802834,294.677094 107.774071,277.615265 116.824989,260.595947 
	C117.694374,258.961182 118.786270,257.444733 121.000000,256.019653 
	C121.000000,257.687439 121.000000,259.355255 121.000000,261.023071 
	C121.000000,283.163788 121.182434,305.306915 120.891823,327.443817 
	C120.801476,334.326080 121.518806,340.487854 126.998352,345.625854 
	C108.312439,346.000000 89.624878,346.000000 70.468658,346.000000 
z"
              />
              <motion.path
                fill="none"
                opacity="1.000000"
                stroke="none"
                d="
M1.000000,339.497925 
	C2.999069,341.092926 4.998138,343.185852 6.998604,345.639404 
	C5.079331,346.000000 3.158662,346.000000 1.000000,346.000000 
	C1.000000,344.001343 1.000000,341.998566 1.000000,339.497925 
z"
              />
              <motion.path
                fill="none"
                opacity="1.000000"
                stroke="none"
                d="
M145.000000,6.500529 
	C143.001266,5.249043 141.002548,3.498085 139.001907,1.373564 
	C140.913223,1.000000 142.826462,1.000000 145.000000,1.000000 
	C145.000000,2.663430 145.000000,4.332244 145.000000,6.500529 
z"
              />
              <motion.path
                fill="none"
                opacity="1.000000"
                stroke="none"
                d="
M141.500000,346.000000 
	C142.114838,343.803436 143.229691,341.606873 144.672272,339.705139 
	C143.768051,341.884033 147.963928,346.481964 141.500000,346.000000 
z"
              />
            </motion.svg>
            <strong>SPEED</strong>
          </div>
        </div>
      </div>

      <div className="lg:2/6 xl:w-2/4  max-w-xs md:max-w-lg mx-auto  flex flex-col items-center justify-center text-center">
        <HeroText label="Write" description=" as fast as you can." />
        <div className="mt-6 text-xl z-0 dark:text-black/80 text-white font-light text-true-gray-500 antialiased">
          Learn to type fast with AI and above all have fun.
        </div>
        <div className="p-4 relative">
          <div className="w-10 blur-2xl opacity-50 h-10 absolute bg-white bottom-0 z-10 left-0"></div>
          <div className="w-10 blur-2xl opacity-50 h-10 absolute bg-white top-10 z-10 right-0"></div>
          <Link href="/pages/typingPage" passHref className="flex items-center justify-center"> 
            <motion.button
              initial={{ "--x": "100%", scale: 1 }}
              animate={{ "--x": "-100%" }}
              whileTap={{ scale: 0.97 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1,
                },
              }}
              className="p-3 border-white/5 border dark:border-black/20 rounded-2xl mt-12 relative radial-gradient"
            >
              <span className="text-white flex items-center gap-1 text-xl font-medium dark tracking-wide dark:text-black h-full w-full relative linear-mask">
                Play now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="dark:stroke-black"
                    opacity={0.5}
                    fill="#ffff"
                    d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"
                  />
                </svg>
              </span>
              <span className="block absolute inset-0 rounded-2xl p-px linear-overlay" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
