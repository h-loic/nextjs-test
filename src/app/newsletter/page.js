"use client";
import { Switch } from '@headlessui/react';
import React from 'react';
import { motion, useAnimation, MotionConfig } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from 'next/link'
import axios from 'axios';

const boxTitre= {
  visible: { opacity: 1,  transition: { duration: 0.6, delay:1  }},
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
        className="boxTitre md:fixed md:right-8 mt-4 sm:flex justify-center " 
        ref={ref}
        variants={boxTitre}
        initial="hidden"
        animate={control}
        ><Link href="/"><HomeIcon className="text-useayl h-12 w-12 hover:text-useabl"/></Link></motion.div>
      <motion.div 
      className="boxTitre" 
      ref={ref}
      variants={boxTitre}
      initial="hidden"
      animate={control}
      >    
      <div className="md:my-[5%] md:mx-[10%] sm:mx-2 sm:my-0">  
        <p className="text-useabl font-light  md:text-[1.6vw] leading-normal sm:text-[6vw] sm:pt-2 md:mx-0 sm:mx-2 md:text-left sm:text-center">En remplissant ce formulaire vous pouvez vous abonner à notre news letter,<br/>recevez tous les mois un pareçu de nos actions.</p>

        </div>
      </motion.div>

      </>
  )
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Newsletter() {
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = async (event) => {
    try {
      const response = await axios.put('/api', {
        firstName : formData.firstName,
        lastName : formData.lastName,
        company : formData.company,
        email : formData.email,
        message : formData.message
      });
      console.log(response); // Affiche le message renvoyé par l'API
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API:', error);
    }

    
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
    <BoxTitre/>
    <div className="isolate bg-white px-6  lg:px-8">
      <img src='/Actions1.jpg'></img>
      <form action="#" onSubmit={handleFormSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-useayl">
              Prénom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                value={formData.firstName}
                onChange={handleInputChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-useabl ring-1 ring-useabl focus:ring-2  focus:ring-useayl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-useayl">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                value={formData.lastName}
                onChange={handleInputChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-useayl ring-1 ring-useabl focus:ring-2  focus:ring-useayl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-useayl">
              Société
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-useayl ring-1 ring-useabl focus:ring-2  focus:ring-useayl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-useayl">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-useayl ring-1 ring-useabl focus:ring-2  focus:ring-useayl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-useayl">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-useayl ring-1 ring-useabl focus:ring-2  focus:ring-useayl sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-useayl' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-useayl'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-useayl">
              En cliquant sur ce lien, vous déclarez être en accord avec nos {' '}
              <a href="#" className="font-semibold text-useabl">
                conditions d'utilisation
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-useabl px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-useayl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-useayl"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
    </>
  )
}
