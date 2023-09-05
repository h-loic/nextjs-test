'use client'

import Nav from './nav';
import React, { Component } from "react"
import { Inter } from 'next/font/google'
import Head from "next/head";
import Intro from"./intro";
import Partenaires from "./partenaires";
import Presentation from './presentation';
import Equipe from "./equipedeux";
import Outils from "./outils";
import Footer from "./footer";
import Contacts from './contacts';
import Navbar from './navbar';
import Actions from './actions';




export default function Home() {
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Un Stage Et Après</title>
      </Head>
      
      <main className=" font-prompt lg:px-10 sm:px-0 bg-useayl h-screen">
        <Nav/>
        <section id="intro" className="md:py-[8%] sm:py-[2%]"><Intro /></section>
      </main>
    
        <section id="presentation" className="font-prompt min-w-screen min-h-screen md:py-[7%] sm:pt-[10%] bg-useayl"><Presentation /></section>
        <section id="contenu" className='h-auto bg-useayl'>
        <Navbar className="sm:hidden"/>
        <section id="actions" className="font-prompt min-w-screen md:min-h-auto sm:min-h-screen md:py-[8%] sm:py-0 bg-useayl"><Actions /></section>
        <section id="outils" className="font-prompt min-w-screen md:min-h-auto md:py-[8%] sm:pt-[5%] bg-useayl"><Outils /></section>
        <section id="equipe" className="font-prompt min-w-screen md:min-h-screen md:py-[8%] sm:py-[5%] bg-useayl"><Equipe /></section>
        <section id="partenaires" className="font-prompt min-w-screen md:min-h-auto md:py-[8%] sm:py-[10%]"><Partenaires /></section>
        <section id="contacts" className="font-prompt min-w-screen md:min-h-auto md:py-[7%] sm:py-[25%]"><Contacts/></section>
        <Footer className=" bottom-0"/>
        </section>
     

      

      </>
  )
};