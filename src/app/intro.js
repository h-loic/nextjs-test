"use client";
import React from "react"
import { RocketLaunchIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";



const boxImage = {
    visible: { opacity: 1, transition: { duration: 0.8, delay:1  }},
    hidden: { opacity: 0},
  };
  const ImageIntro = () => {
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
        <motion.div 
            className="boxImage" 
            ref={ref}
            variants={boxImage}
            initial="hidden"
            animate={control}
        >
        <img src="./imageUn.png"></img>
        </motion.div>
        </>

    );
  };

  const boxTexte = {
    visible: { opacity: 1, transition: { duration: 0.2, delay:1}},
    hidden: { opacity: 0},
  };
  const BlocTexte = () => {
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
        <motion.div 
            className="boxTexte" 
            ref={ref}
            variants={boxTexte}
            initial="hidden"
            animate={control}
        >
        <h1 className=" text-white md:text-[4vw] font-bold pb-6 sm:text-[8vw]">Un Stage Et Après</h1>
        <p className=" text-white font-light md:text-[3vw] md:leading-[3.5vw] sm:text-[7vw] sm:leading-[10vw]">Depuis 2010, notre responsabilité <br/>est d’aider la jeunesse à découvrir<br/> le monde du travail.</p>
        
        <a href="#presentation" className=" flex flex-wrap md:justify-end sm:justify-center items-center group px-5" target="" rel="noopener noreferrer">
        
                 <span className="pr-4 pt-6 text-white md:text-[1.1vw] sm:text-[4vw] md:w-[20%] sm:w-[100%]">Découvrez l'association</span>
                 <span className="mt-8 transition ease-in-out delay-150 text-useabl hover:rotate-[135deg] hover:text-white duration-300 scroll-smooth ">
                
                 < RocketLaunchIcon className="h-16 w-16 "/>
                 </span>
                </a>
        </motion.div>
        </>

    );
  };

export default function Intro(){
    return(
        <>
        <div className=" w-[65%] bottom-0 absolute md:block sm:hidden "><ImageIntro/></div>
        <div className="relative w-auto md:text-right sm:text-center sm:justify-center md:mr-[8%] sm:px-6 sm:pt-0"><BlocTexte/></div>      
        </>
    )
}
