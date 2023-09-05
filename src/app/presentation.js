"use client";
import React from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { RocketLaunchIcon, ArrowSmallDownIcon } from "@heroicons/react/20/solid";


const boxTitre= {
  visible: { opacity: 1,  transition: { duration: 1, delay:1  }},
  hidden: { opacity: 0 },
};

  const boxFleche = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

const Boxpresentation = () => {
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
        className="boxTitre md:mt-[3%] md:mx-[10%] sm:mx-2 sm:my-0" 
        ref={ref}
        variants={boxTitre}
        initial="hidden"
        animate={control}
        >    
        <div className=" bg-useabl rounded-3xl flex justify-between items-end">
        
          <div className="p-[5%] md:w-[80%] sm:w-[100%]">
          
          <h1 className="text-white font-bold md:text-[3.5vw] lg:text-left sm:text-center sm:text-[8vw]">L'association</h1>   
          <p className="text-white font-light md:tracking-wide md:text-[1.5vw] md:leading-normal py-6 sm:text-[5vw] sm:leading-[6.3vw] md:text-left sm:text-justify sm:tracking-normal">
          
          Des fondateurs de l’association à ses bénévoles en passant par les salariés qui œuvrent à son bon fonctionnement, nous rencontrons chaque semaine des élèves à qui nous présentons un monde professionnel en perpétuelle évolution.
          <br/>
          <br/>Grâce au soutien de l’État et des collectivités ; en bénéficiant du mécénat financier et du versement de la taxe d'apprentissage des entreprises, on œuvre pour construire une société plus responsable où l’activité professionnelle favorise la solidarité.
            </p>
          </div>
          <div className="w-[30%] mr-[10%] sm:hidden md:block"><img src="./carte.png"/></div> 

        </div>
        </motion.div>   
</>
      
    );
  };


export default function Presentation() {
    return (
      <>
    
        <div className=""><Boxpresentation/></div> 
        <a href="#actions" className="md:hidden sm:flex flex-wrap sm:justify-center items-center group px-5" target="" rel="noopener noreferrer">
          <span className=" text-useabl scroll-smooth ">< ArrowSmallDownIcon className="h-16 w-16 "/></span>
        </a> 
        
      </>
    )
}