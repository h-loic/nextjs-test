"use client";
import React from 'react';
import { motion, useAnimation, MotionConfig } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from 'next/link'


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
     
    }, [control, inView]);

  return (
    <>
      <motion.div 
      className="boxTitre md:mt-[2%] md:mx-[10%] sm:mx-0 sm:my-0" 
      ref={ref}
      variants={boxTitre}
      initial="hidden"
      animate={control}
      >    
        
          <div className="md:p-[5%] sm:p-0 md:w-[80%] sm:w-[100%]">
          
            <h1 className="text-useabl font-bold md:text-[3.5vw] md:text-left sm:text-center sm:text-[8vw]">Contacts</h1>  
          
          
            <div className="flex md:flex-nowrap sm:flex-wrap md:justify-start sm:justify-center text-white w-[100%] font-light tracking-wide md:text-[1.5vw] md:leading-normal py-6 sm:text-[5vw] sm:leading-[6.3vw] ">
                <div className='md:w-[30%] sm:w-[80%]'>
                <p className='font-bold'>Un Stage Et Après</p>
                <p>18 rue de Varenne
                <br/>75007 Paris</p>
                <p className='border-t-[1px] my-2 py-2'>
                <a className="hover:text-useabl" href="mailto:contact@usea.fr">contact@usea.fr</a></p>
                </div>
          
                <div className='md:w-[34%] md:ml-[15%] sm:w-[80%] sm:ml-0'>
                <p className=''><br/>Suivez-nous <br/>sur les réseaux sociaux :</p>
                  <div className='border-t-[1px] my-2 py-4 flex flex-wrap justify-start content-start gap-6'>
                  <a className="insta basis-10 w-[30%] " href="https://www.instagram.com/useaparis/" target="blank"><img src="/insta.svg"/></a>
                  <a className="basis-10 w-[30%] text-white hover:text-useabl" href="https://www.linkedin.com/company/un-stage-et-apr-s/?viewAsMember=true" target="blank"><img src="/linkedin.svg"/></a>
                  <a className="basis-10 w-[30%] text-white hover:text-useabl" href="https://www.youtube.com/@unstageetapres/featured" target="blank"><img src="/youtube.svg"/></a>
                  </div>
                </div>

                <div className='md:w-[34%] md:ml-[15%] sm:w-[80%] sm:ml-0'>
                <p className=''><Link href="newsletter">s'inscrite à la newsletter</Link></p>
                </div>
          
             </div>

        </div>
      </motion.div>

      </>
  )
};


export default function Contacts() {
  const [agreed, setAgreed] = useState(false)

  return (
    <>
    <BoxTitre/>
    </>
  )
}
