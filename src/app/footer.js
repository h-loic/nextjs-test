"use client";
import { Typography } from "./materiel";
import React from 'react';
import Link from 'next/link'
 
export default function Footer() {
  return (
    <footer className=" px-8 py-4 bg-useayl">
      <div className="flex flex-row flex-wrap items-center justify-center py-1 text-center md:justify-between ">
        <img src="/usea.svg" alt="logo-ct" className="md:w-[10%] md:block sm:hidden " />
        <ul className="flex flex-wrap items-end gap-x-8">
          
            <Link href="/mentionslegales" className="font-normal transition-colors text-useabl hover:text-white focus:text-useabl">
              Mentions légales
            </Link>
            
            {/*
            <Link to="./formulaire.js" className="font-normal transition-colors text-useabl hover:text-white focus:text-useabl">
              Nous soutenir
            </Link>
            <Link to="./formulaire.js" className="font-normal transition-colors text-useabl hover:text-white focus:text-useabl">
              News letter
            </Link>
  */}
          
          
        </ul>
      </div>
      <hr className="mb-4 border-white" />
      <Typography className="text-center font-light text-useabl py-2">
        &copy; 2023 Un Stage Et Après
      </Typography>
    </footer>
  );
}
