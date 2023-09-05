"use client";
import React from "react"
import { motion, useAnimation, MotionConfig } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";



const boxTitre= {
  visible: { opacity: 1,  transition: { duration: 0.6, delay:1  }},
  hidden: { opacity: 0 },
};


const Boxpartenaires = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
         control.start("hidden"); 
      }  
    },[control, inView]);

  return (
    <>
      <motion.div 
      className="boxTitre" 
      ref={ref}
      variants={boxTitre}
      initial="hidden"
      animate={control}
      >    
      <div className="md:my-[0%] md:mx-[10%] sm:mx-2 sm:my-0">  
        <h1 className="text-useabl font-bold md:text-[3.5vw] lg:text-left sm:text-center sm:text-[8vw]">Partenaires</h1>  
       
        </div>
      </motion.div>

      </>
  )
};


const boxLogo= {
  visible: { opacity: 1},
  hidden: { opacity: 1 },
};

const Logos = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
         control.start("visible"); 
      }
     
    }, [control, inView]);

  return (
    <>
   <motion.div className="" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
  <h1 className="text-center my-[2%] text-white md:text-[1.4vw] sm:text-[5vw]">Ils nous soutiennent financièrement et accompagnent nos actions</h1>
  </motion.div>
    <div className="flex flex-wrap justify-center items-center w-[100%]  gap-4 md:px-[10%] sm:px-[1%]">


    <motion.div className="boxLogo md:w-[12%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l1.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l2.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l3.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[8%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l4.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[8%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l5.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l6.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[12%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l7.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[12%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l8.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l9.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[8%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l10.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[7%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l11.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l12.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l13.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[7%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l14.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l15.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[8%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l16.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[9%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l17.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l18.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[12%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l19.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[7%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l20.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[8%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l21.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l22.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l23.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[8%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l24.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[12%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l25.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[12%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l26.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[8%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l27.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l28.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l29.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l30.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l31.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l32.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l33.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l34.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l35.png"/>
    </motion.div>

   
    
  
    
   
    </div>

  </>
)
  };


const boxLogodeux= {
  visible: { opacity: 1},
  hidden: { opacity: 0 },
};

const Logosdeux = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
         control.start("hidden"); 
      }
     
    }, [control, inView]);

  return (
    <>
   <motion.div className="" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
  <h1 className="text-center mt-[5%] mb-[2%] text-white md:text-[1.4vw] sm:text-[5vw]">Ils accompagnent nos actions</h1>
  </motion.div>
    <div className="flex flex-wrap justify-center items-center w-[100%]  gap-4 md:px-[10%] sm:px-[1%]">


    <motion.div className="boxLogo md:w-[12%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l36.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l37.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l38.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[9%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l39.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[9%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l40.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l41.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l42.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[7%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l43.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[7%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l44.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l45.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[7%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l46.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l47.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[9%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l48.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[7%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l49.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l50.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l51.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[8%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l52.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[10%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l53.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[12%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l54.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l55.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[11%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l56.png"/>
    </motion.div>
    <motion.div className="boxLogo md:w-[6%] sm:w-[20%]" ref={ref} variants={boxLogo} initial="hidden" animate={control} transition={ { duration: 0.6, delay:1  }}>
     <img src="./logos/l57.png"/>
    </motion.div>
   
    </div>

  </>
)
  };


export default function Partenaires() {
  return (
    <div className="">
      <Boxpartenaires/>
      <Logos/>
      <Logosdeux/>
     
    </div>
  )
}
