"use client";
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";




const hidenav= {
  visible: { opacity: 1, transition: { duration: 1, delay:1  } },
  hidden: { opacity: 0 },
  };

  

export default function Navbar() {
  const control = useAnimation()
  const [stickyClass, setStickyClass] = useState('');
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
       control.start("hidden"); 
    }
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, [control, inView]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 350 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  

  return (
   
      <motion.div
      ref={ref}
    variants={hidenav}
    initial="hidden" 
    animate={control} 
    className={`navbar ${stickyClass}`}>
      <nav className="mx-auto md:flex w-screen items-center justify-end pt-6 pb-4px-20 lg:px-8 bg-gradient-to-b from-useayl to-useayl/25 sm:hidden " aria-label="Global">
        <div className="flex lg:flex-1 ">
          <a href="#" className="ml-10">
          <img
              className=" md:h-[7em] w-auto sm:h-[7em]"
              src="/usea.svg"
              alt=""
            />          
            </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <a  href="#presentation" className="text-[1.3vw] font-semibold leading-6 text-white hover:text-useabl focus:text-useabl active:text-useabl  ">
            L'association
          </a>
          
          <a  href="#actions" className="text-[1.3vw] font-semibold leading-6 text-white hover:text-useabl focus:text-useabl active:text-useabl  ">
            Nos actions
          </a>
          <a href="#outils" className="text-[1.3vw] font-semibold leading-6 text-white hover:text-useabl focus:text-useabl active:text-useabl">
            Nos outils
          </a>
          <a href="#equipe" className="text-[1.3vw] font-semibold leading-6 text-white hover:text-useabl focus:text-useabl active:text-useabl">
            L'Equipe
          </a>
          <a href="#partenaires" className="text-[1.3vw] font-semibold leading-6 text-white hover:text-useabl focus:text-useabl active:text-useabl">
            Partenaires
          </a>
          <a href="#contacts" className="text-[1.3vw] font-semibold leading-6 text-white hover:text-useabl focus:text-useabl active:text-useabl">
            Contacts
          </a>
        </Popover.Group>
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-useayl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <img
              className=" md:h-[10em] w-auto sm:h-[7em]"
              src="/usea.svg"
              alt=""
            /> 
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
               
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-useayl hover:text-useabl"
                >
                  Outils
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-useayl hover:text-useabl"
                >
                  Ecorientation
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-useayl hover:text-useabl"
                >
                  Equipe
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ttxt-useayl hover:text-useabl"
                >
                  Partenaires
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-useayl hover:text-useabl"
                >
                  Contacts
                </a>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      </motion.div>
 
  )
}
