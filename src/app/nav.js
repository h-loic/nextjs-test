
'use client'
import React, { Component } from "react";


export default function Nav() {
  return (
<nav className="flex items-center justify-between p-8 md:px-8 sm:justify-center" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className=" md:h-[10em] w-auto sm:h-[7em]"
              src="/usea.svg"
              alt=""
            />
          </a>
        </div> 
</nav>
  )
}