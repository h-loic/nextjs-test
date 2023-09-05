"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { PuzzlePieceIcon } from "@heroicons/react/20/solid";
import { NewspaperIcon } from "@heroicons/react/20/solid";
import { ShareIcon } from "@heroicons/react/20/solid";
import { SpeakerWaveIcon } from "@heroicons/react/20/solid";
import ReactAudioPlayer from 'react-audio-player';
import { Box } from "@mui/material";
import { ArrowSmallDownIcon } from "@heroicons/react/20/solid";




const boxTitre= {
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
                <h1 className="text-useabl font-bold md:text-[3.5vw] sm:text-[8vw] md:text-left sm:text-center ">Nos outils</h1>   
                <p className="text-white font-light  md:text-[1.5vw] leading-normal sm:text-[5vw] sm:pt-2 md:mx-0 sm:mx-4 md:text-left sm:text-justify md:w-[65%] sm:w-auto">On imagine des jeux de société, des podcasts, carnets et ateliers pédagogiques qui nous apprennent à écouter les autres, à développer son esprit critique et exprimer une opinion. <br/>Autant de savoir-être dont nous avons besoin pour travailler<br/> et vivre en société.</p>
            </motion.div>   
            </>
        );
      };
 
      const Boxjeux = () => {
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
           
            <div className="flex md:flex-nowrap sm:flex-wrap-reverse justify-center w-[100%] gap-14 mt-[0%]">
            <motion.div 
            className="jeuxLeft md:w-[80%] sm:w-auto" 
            ref={ref}
            variants={boxTitre}
            initial="hidden"
            animate={control}
            >    
              <div className=" flex flex-wrap gap-4 justify-start items-start w-[100%]">
               <img className="md:w-[45%] rounded-xl sm:w-auto" src="/Jeux1.jpg"/>
               <img className="w-[50%] mt-10  rounded-xl md:flex sm:hidden" src="/Jeux2.jpg"/>
               <img className="w-[45%] -mt-[38%] rounded-xl md:flex sm:hidden" src="/Jeux3.jpg"/>
              </div>
             
             
            </motion.div>  
            <motion.div 
            className="jeuxRight md:w-[50%] sm:w-auto" 
            ref={ref}
            variants={boxTitre}
            initial="visible"
            animate={control}
            >    
            
               <h1 className=" text-white md:text-left sm:text-center font-bold md:text-[2.8vw] sm:text-[8vw] border-b-2">Les jeux</h1>
                <p className="mt-8 font-light text-white md:text-left sm:text-justify md:text-[1.5vw] leading-normal sm:text-[5vw] md:pr-[10%] ">Conscients de la valeur de l'échange intergénérationnel et persuadés de l’importance d’exprimer soi-même ses choix d’orientation, nous créons des jeux de société qui nous apprennent à écouter les autres, à développer son esprit critique et exprimer une opinion.
Autant de savoir-être dont nous avons besoin pour travailler et vivre ensemble.</p>
               
                <span className="text-white flex justify-center mt-4 sm:mb-0 "><PuzzlePieceIcon className="h-14 w-14"/></span> 
              
            </motion.div>  
            </div>
            
          
            </>
        );
      };

      const Boxcarnets = () => {
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
           
            <div id="carnets" className=" flex md:flex-nowrap sm:flex-wrap md:justify-center items-start w-[100%] mt-[4%]">
            <motion.div 
            className="carnetsLeft justify-items-start md:w-[50%] sm:w-auto" 
            ref={ref}
            variants={boxTitre}
            initial="hidden"
            animate={control}
            >    
             
               <h1  className=" text-white md:text-right sm:text-center font-bold md:text-[2.8vw] sm:text-[8vw] border-b-2">Les carnets</h1>
               <p className="mt-8 font-light text-white md:text-right sm:text-justify md:text-[1.5vw] leading-normal sm:text-[5vw]">Nos carnets sont des concentrés d'informations, de jeux et d'activités pédagogiques à lire et partager. Ils sont à destination des élèves, de leurs enseignants mais également des professionnels qui s'engagent à nos côtés. <br/><br/> Cliquez sur un carnet pour le télécharger !</p>
               
               <span className="text-white flex justify-center mt-4 sm:mb-10"><NewspaperIcon className="h-14 w-14"/></span>
              
             
            </motion.div>  
            <motion.div 
            className="carnetsRight md:justify-items-end md:w-[60%] sm:justify-items-center sm:w-auto" 
            ref={ref}
            variants={boxTitre}
            initial="hidden"
            animate={control}
            >    
                <div className=" flex flex-wrap md:gap-4 sm:gap-2 justify-center w-[100%]">
                <motion.div className="md:w-[33%] sm:w-[45%]" ref={ref} variants={boxTitre} initial="hidden" animate={control}>
                <a href="./VersLinfiniEtauDela.pdf" target="_blanck" className=""><div className="hover:opacity-50 cursor-pointer"><img className="rounded-lg" src="/VIAD.jpg"/></div></a>
                </motion.div> 
                <motion.div className="md:w-[33%] sm:w-[45%]" ref={ref} variants={boxTitre} initial="hidden" animate={control}>
                <a href="./RienNeSertDeCOurir.pdf" target="_blanck" className=""><div className="hover:opacity-50 cursor-pointer"><img className="rounded-lg" src="/RSC.jpg"/></div></a>
                </motion.div> 
                <motion.div className="md:w-[33%] sm:w-[45%]" ref={ref} variants={boxTitre} initial="hidden" animate={control}>
                <a href="./CarnetStagePro.pdf" target="_blanck" className=""><div className="hover:opacity-50 cursor-pointer"><img className="rounded-lg" src="/CarnetStagePro.jpg"/></div></a>
                </motion.div> 
                <motion.div className="md:w-[33%] sm:w-[45%]" ref={ref} variants={boxTitre} initial="hidden" animate={control}>
                <a href="./CarnetStageServicePublique.pdf" target="_blanck" className=""><div className="hover:opacity-50 cursor-pointer"><img className="rounded-lg" src="/CarnetStageServicePublique.jpg"/></div></a>
                </motion.div>    
                </div>
               
               
            
            </motion.div>
                </div>
               
            
       
            
          
            </>
        );
      };

      const Boxateliers = () => {
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
           
            <div className="flex md:flex-nowrap sm:flex-wrap-reverse justify-center w-[100%] gap-14 md:mt-[3%] sm:mt-[10%]">
            <motion.div 
            className="jeuxLeft md:w-[80%] sm:w-auto" 
            ref={ref}
            variants={boxTitre}
            initial="hidden"
            animate={control}
            >    
              <div className=" flex flex-wrap gap-4 justify-start items-start w-[100%]">
               <img className="md:w-[45%] rounded-xl sm:w-auto" src="/Atelier1.jpg"/>
               <img className="w-[50%] mt-10  rounded-xl md:flex sm:hidden" src="/Atelier2.jpg"/>
               <img className="w-[45%] -mt-[38%] rounded-xl md:flex sm:hidden" src="/Atelier3.jpg"/>
              </div>
             
             
            </motion.div> 
            <motion.div 
            className="jeuxRight md:w-[50%]" 
            ref={ref}
            variants={boxTitre}
            initial="hidden"
            animate={control}
            >    
            
               <h1 className=" text-white md:text-left sm:text-center font-bold md:text-[2.8vw] sm:text-[8vw] border-b-2">Nos ateliers</h1>
                <p className="mt-8 font-light text-white md:text-left sm:text-justify md:text-[1.5vw] leading-normal sm:text-[5vw] md:pr-[10%]">Chaque semaine, nous organisons la rencontre entre élèves et salariés, au collège ou en entreprise, et présentons le monde du travail via sa responsabilité sociale pour construire une société où l’activité professionnelle favorise la solidarité.</p>
               <span className="text-white flex justify-center mt-4 sm:mb-0"><ShareIcon className="h-14 w-14"/></span>
              
            </motion.div>  
            </div>
            
          
            </>
        );
      };

      const Boxpodcasts = () => {
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
           
            <div className="flex md:flex-nowrap sm:flex-wrap md:justify-center md:gap-20 sm:gap-0 items-start w-[100%] mt-[4%]">
            <motion.div 
            className="podcastsLeft md:justify-items-start sm:justify-items-center md:w-[50%] sm:w-auto" 
            ref={ref}
            variants={boxTitre}
            initial="hidden"
            animate={control}
            >    
             
               <h1 className=" text-white md:text-right sm:text-center font-bold md:text-[2.8vw] sm:text-[8vw] border-b-2">Nos podcasts</h1>
               <p className="mt-8 font-light text-white md:text-right sm:text-justify md:text-[1.5vw] leading-normal sm:text-[5vw]"><i>La vie des autres</i> est une série d'ateliers d'écriture invitant les élèves à enrichir leur connaissance du monde du travail en s'inspirant de l'expérience de leurs aînés.</p>
               <span className="text-white flex justify-center mt-4 sm:mb-4"><SpeakerWaveIcon className="h-14 w-14"/></span>
              
             
            </motion.div>  
            <motion.div 
            className="podcastsRight md:justify-items-end sm:justify-items-center md:w-[50%] sm:w-[100%]" 
            ref={ref}
            variants={boxTitre}
            initial="hidden"
            animate={control}
            > 
            <p className="md:mt-6 sm:mt-2 text-useayl">Bande Annonce</p>   
              <ReactAudioPlayer
              className="my-2 md:w-[80%] sm:w-[100%]"
              src="BandeAnnonce.mp3"
              autoPlay={false}
              controls/>
            <p className="md:mt-8 sm:mt-2 text-useayl">Episode 1 - Grandir</p>
              <ReactAudioPlayer
              className="my-2 md:w-[80%] sm:w-[100%]"
              src="Episode1.mp3"
              autoPlay={false}
              controls/>
            <p className="md:mt-8 sm:mt-2 text-useayl">Episode 2 - Habiter</p>
              <ReactAudioPlayer
              className="my-2 md:w-[80%] sm:w-[100%]"
              src="Episode2.mp3"
              autoPlay={false}
              controls/>
            <p className="md:mt-8 sm:mt-2 text-useayl">Episode 3 - Construire</p>
              <ReactAudioPlayer
              className="my-2 md:w-[80%] sm:w-[100%]"
              src="Episode3.mp3"
              autoPlay={false}
              controls/>
        
            </motion.div>
                </div>
               
            
       
            
          
            </>
        );
      };
    
export default function Outils() {

   
  return (
    <> 
      <div className="md:mx-[10%] sm:mx-[3%] md:mt-0 sm:mt-[8%]">
          <BoxTitre/>
          <section className=" rounded-2xl bg-useabl mt-10 md:p-8 sm:p-2 overflow-hidden">
          <Boxjeux className=""/> 
          <Boxcarnets className=""/>   
          <Boxateliers className=""/>  
          <Boxpodcasts className=""/>     
          </section>
          <a href="#equipe" className="md:hidden sm:flex flex-wrap sm:justify-center items-center group px-5" target="" rel="noopener noreferrer">
          <span className=" text-useabl scroll-smooth ">< ArrowSmallDownIcon className="h-16 w-16 "/></span>
          </a>  
      </div>     
    </>
  )
}