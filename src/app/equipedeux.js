"use client";
import React from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "./materiel";



const boxTitre= {
  visible: { opacity: 1,  transition: { duration: 0.6, delay:1  }},
  hidden: { opacity: 0 },
};



const Boxequipe = () => {
 
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
        <div className="md:my-[0%] md:mx-[10%] sm:mx-2 sm:my-0">
        
          
          
          <h1 className="text-useabl font-bold md:text-[3.5vw] lg:text-left sm:text-center sm:text-[8vw]">L'équipe</h1>   
          <div className="flex sm:flex-wrap justify-center md:px-[10%] pt-0 sm:px-0 md:gap-2 sm:gap-2">

     
          
          
      <Card
      shadow={false}
      className="relative grid md:h-[21rem] md:w-[26%]  sm:w-[45%] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/anis.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/10" />
      </CardHeader>
      <CardBody className="relative pt-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-2 font-medium leading-[1.5]"
        >
          Anis Allouch
        </Typography>
        <Typography variant="h5" className="mb-8 text-useayl">
          Responsable<br/> des partenariats
        </Typography>
      </CardBody>
    </Card>

    <Card
      shadow={false}
      className="md:h-[21rem] md:w-[26%]  sm:w-[45%]  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/omar.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/10" />
      </CardHeader>
      <CardBody className="relative pt-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-2 font-medium leading-[1.5]"
        >
        Omar Benlaala
        </Typography>
        <Typography variant="h5" className="mb-8 text-useayl">
          Responsable pédagogique
        </Typography>
      </CardBody>
    </Card>

    <Card
      shadow={false}
      className="relative grid md:h-[21rem] md:w-[26%]  sm:w-[45%]  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/william.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/10" />
      </CardHeader>
      <CardBody className="relative pt-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-2 font-medium leading-[1.5]"
        >
          William Evain
        </Typography>
        <Typography variant="h5" className="mb-8 text-useayl">
          Chargé de missions
        </Typography>
      </CardBody>
    </Card>

    <Card
      shadow={false}
      className="relative grid md:h-[21rem] md:w-[26%]  sm:w-[45%]  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/bastien.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/10" />
      </CardHeader>
      <CardBody className="relative pt-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-2 font-medium leading-[1.5]"
        >
          Bastien Le Coz
        </Typography>
        <Typography variant="h5" className="mb-8 text-useayl">
          Président - fondateur 
        </Typography>
      </CardBody>
    </Card>

    <Card
      shadow={false}
      className="relative grid md:h-[21rem] md:w-[26%]  sm:w-[45%]  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/mickael.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/10" />
      </CardHeader>
      <CardBody className="relative pt-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-2 font-medium leading-[1.5]"
        >
          Mickaël Vidal
        </Typography>
        <Typography variant="h5" className="mb-8 text-useayl">
          Trésorier - fondateur
        </Typography>
      </CardBody>
    </Card>

    <Card
      shadow={false}
      className="relative grid md:h-[21rem] md:w-[26%]  sm:w-[45%] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/bryan.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/10" />
      </CardHeader>
      <CardBody className="relative pt-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-2 font-medium leading-[1.5]"
        >
          Bryan Ralala
        </Typography>
        <Typography variant="h5" className="mb-8 text-useayl">
          Chargé de missions
        </Typography>
      </CardBody>
    </Card>

     
            </div>   

        </div>
        </motion.div>   
</>
      
    );
  };


export default function Equipe() {
    
    return (
      <>
    
        <div className=""><Boxequipe/></div>  
      
        
      </>
    )
}