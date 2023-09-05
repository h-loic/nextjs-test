import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const boxTitre= {
    visible: { opacity: 1,  transition: { duration: 0.6, delay:1  }},
    hidden: { opacity: 0 },
  };

  const boxOdd= {
    visible: { opacity:[0,0.5,0.7,1],  transition: { duration: 1, delay:1.4}, translateX:['800px','0px']},
    hidden: { opacity: 0,  },
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
           
          }, [control, inView]);
        return (
            <>
            <motion.div 
            className="boxTitre" 
            ref={ref}
            variants={boxTitre}
            initial="hidden"
            animate={control}
            >    
                <h1 className="text-white font-bold md:text-[3.5vw] sm:text-[10vw] md:text-left sm:text-left">Écorientation, <span className="md:text-[0.6em] sm:text-[0.6em] sm:text-left">subst. fém.</span> </h1>  
                <span className="text-white md:text-[2vw] md:tracking-[-0.05vw] sm:text-[6vw] md:-mt-8">action de réfléchir à son avenir en pensant à celui de la planète.</span> 
               
               
               
               <div className="flex md:flex-nowrap sm:flex-wrap md:mt-[3%] md:gap-24">
               <div className="font-light tracking-wide md:text-[1.5vw] md:leading-[1.7vw] sm:text-[6vw] md:w-[55%] text-justify">
                <p className=" text-white prose-slate ">Chaque jour, nous parlons de la transformation du monde du travail, de développement durable. Chaque fois, on entend dire qu’il faut agir pour les générations futures, nos enfants... Pourtant, ils ne sont jamais présents à nos réunions. Alors nous militons pour les inviter à la table des discussions afin qu’ensemble, on réfléchisse à l’avenir du monde professionnel en pensant à celui de la planète.</p>
                <br/>
                <p className=" text-white">Depuis 2010, notre responsabilité chez Un Stage Et Après est d'aider les jeunes à trouver leur place dans le monde du travail. Et si elle se conjuguait au présent en participant activement à la transformation sociale des entreprises pour construire main dans la main une société plus responsable ?</p>
                
                <a href="./ecorientation.pdf" target="_blanck" className=""><div className="md:mt-10 md:w-[40%] sm:mt-8 text-center bg-useabl rounded-lg p-4  hover:bg-white hover:text-useabl cursor-pointer text-white  md:text-[1.2vw]">Télecharger<br/> le programme</div></a>

                </div>

                <motion.div className="boxOdd md:w-[45%] sm:w-[100%] md:mt-0 sm:mt-10 sm:p-0" ref={ref} variants={boxOdd} initial="hidden" animate={control}>
                <div className="col-start-2 col-end-4 row-start-2 row-end-4 hover:opacity-70 hover:ease-out duration-300">
                <img className="" src="/oddBandeau.png"></img>
                </div>
                <div className="col-start-2 col-end-4 row-start-3 row-end-4 flex flex-row md:justify-between sm:justify-around flex-wrap w-[50%]">
                <img className="md:w-[40%] sm:w-[30%] p-2" src="/odd4.svg"></img>
                <img className="md:w-[40%] sm:w-[30%] p-2" src="/odd5.svg"></img>        
                <img className="md:w-[40%] sm:w-[30%] p-2" src="/odd8.svg"></img>        
                <img className="md:w-[40%] sm:w-[30%] p-2" src="/odd10.svg"></img>        
                <img className="md:w-[40%] sm:w-[30%] p-2" src="/odd17.svg"></img>              
                </div>
                 
                </motion.div>
               
                </div>
                
                
            </motion.div>   
            </>
        );
      };

      const boxJeanFe = {
        visible: { opacity: 1, transition: { duration: 0.8, delay:1  }},
        hidden: { opacity: 0},
      };
      const JeanFe = () => {
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
                className="boxJeanFe" 
                ref={ref}
                variants={boxJeanFe}
                initial="hidden"
                animate={control}
            >
            <img src="./jeanFe.png"></img>
            </motion.div>
            </>
    
        );
      };

    
    
export default function Ecorientation() {
  return (
    <> 
    
    <div className="block relative h-screen">
    <div className="mx-[10%] md:py-[9%] sm:py-[5%]"><BoxTitre/></div>
    <div className="absolute w-[45%] right-0 bottom-0 md:block sm:hidden"><JeanFe/></div>
    </div>   
      
    </>
  )
}