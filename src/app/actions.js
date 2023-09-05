"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/20/solid";




const boxTitre= {
    visible: { opacity: 1,  transition: { duration: 1, delay:1  }},
    hidden: { opacity: 0 },
    };  

    const boxTexte= {
      visible: { opacity: 1,  transition: { duration: 1, delay:1  }},
      hidden: { opacity: 0 },
      }; 
      
    const boxImages= {
        visible: { opacity: 1,  transition: { duration: 1, delay:1  }},
        hidden: { opacity: 0 },
        }; 

        

const BoxTitre = () => {
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
                <h1 className="text-useabl font-bold md:text-[3.5vw] sm:text-[8vw] md:text-left sm:text-center md:mb-0 sm:mb-8 ">Nos actions</h1>   
            </motion.div>

            <div className="flex flex-wrap-reverse md:justify-start sm:justify-center">
            
            <motion.div
            className="boxTexte md:w-[50%] h-full" 
            ref={ref}
            variants={boxTexte}
            initial="hidden"
            animate={control}>
          
            <p className="text-white font-light  md:text-[1.6vw] leading-normal tracking-tight sm:text-[5vw] sm:pt-2 md:mx-0 sm:mx-4 md:text-left sm:text-justify mb-2">
            En organisant des stages d’observation de qualité dans les secteurs public et privé mais aussi en animant des ateliers pédagogiques au collège, nous faisons se rencontrer élèves et professionnels pour ensemble bâtir une société où le monde du travail est un puissant vecteur d’inclusion.
            </p>
            <p className="text-white font-light  md:text-[1.6vw] leading-normal tracking-tight sm:text-[5vw] sm:pt-2 md:mx-0 sm:mx-4 md:text-left sm:text-justify mb-2">

            On accompagne les collégiens en situation de décrochage scolaire à qui nous proposons des cessions de découverte du monde professionnel pour les aider à mieux comprendre l’importance de leur scolarité pour une orientation de qualité.
            </p>
            <p className="text-white font-light  md:text-[1.5vw] leading-normal sm:text-[5vw] sm:pt-2 md:mx-0 sm:mx-4 md:text-left sm:text-justify">

            On crée des parcours pour présenter aux jeunes la RSE de nos partenaires pour qu’ensemble ils réfléchissent à leur avenir en pensant à celui de la planète.</p>
          
            </motion.div>

            <motion.div
            className="boxImages md:w-[45%] md:ml-[5%] sm:w-auto" 
            ref={ref}
            variants={boxImages}
            initial="hidden"
            animate={control}>
            
      
            <Carousel
      className="md:w-[100%] md:mt-[12%] overflow-hidden sm:w-[90%] sm:mx-4" autoplay={true} loop={true} transition={{ duration: 1 }}      
    >
    
      <img
        src="/Actions1.jpg"
        alt="image 1"
        className="rounded-2xl w-auto"
      />
      <img
        src="/Actions3.jpg"
        alt="image 1"
        className="rounded-2xl w-auto"
      />
      <img
        src="/Actions2.jpg"
        alt="image 1"
        className="rounded-2xl w-auto"
      />
      <img
        src="/Actions10.jpg"
        alt="image 1"
        className="rounded-2xl w-auto"
      />
      <img
        src="/Actions4.jpg"
        alt="image 1"
        className="rounded-2xl w-auto"
      />
      <img
        src="/Actions5.jpg"
        alt="image 1"
        className="rounded-2xl w-auto"
      />
      <img
        src="/Actions6.jpg"
        alt="image 1"
        className="rounded-2xl w-auto"
      />
     
      <img
        src="/Actions8.jpg"
        alt="image 1"
        className="rounded-2xl w-auto"
      />
      
      
    </Carousel>
            
        


              
              
        
            </motion.div>
            </div>
            </>
        );
      };

  

  

 
    
export default function Actions() {

   
  return (
    <> 
      <div className="md:mx-[10%] sm:mx-0 mt-0">
          <BoxTitre/>
      </div>   
      <a href="#outils" className="md:hidden sm:flex flex-wrap sm:justify-center items-center group px-5" target="" rel="noopener noreferrer">
          <span className=" text-useabl scroll-smooth ">< ArrowSmallDownIcon className="h-16 w-16 "/></span>
      </a>   
    </>
  )
}