"use client";
import React from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/outline";



const boxTitre= {
  visible: { opacity: 1,  transition: { duration: 0.6, delay:1  }},
  hidden: { opacity: 0 },
};


const Boxmentions = () => {
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
        <div className="md:my-[3%]  md:mx-[10%] sm:mx-2 sm:my-0">
        
          
          
          <h1 className="text-useabl font-bold md:text-[3.5vw] lg:text-left sm:text-center sm:text-[10vw]">Mentions Légales</h1>   
         <p className="text-useabl font-light md:text-[1vw] pt-[4%]">Nous vous remercions de votre visite sur le site <a className="font-bold hover:text-useayl" href="https://www.unstageetapres.fr">www.unstageetapres.fr</a> <br/>
Vous trouverez ci-dessous notre politique en matière de traitement de données personnelles. <br/>Nous vous engageons vivement à la lire, en visitant ce site vous acceptez les pratiques que nous détaillons <br/>et vous adhérez aux termes et conditions énoncées ci après. 
<br/>Le site <a className="font-bold hover:text-useayl" href="https://www.unstageetapres.fr">www.unstageetapres.fr</a> est destiné à l’information personnelle des internautes qui l’utilisent.
</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[4%]">Informations générales :</p>
<p className="text-useabl text-justify">
Ce site est la propriété de Un Stage et Après (sigle: USEA).
<br/>Forme : Association de loi 1901. Association déclarée le 27/04/2010 – publiée au Journal officiel le 08/05/2010.
<br/>Numéro de SIRET : 537 705 071 00026
<br/>Code APE : 9499Z
<br/>Adresse du siège social : 18 rue de Varenne, 75007 Paris
<br/>Tél du siège social : 01 43 21 80 48
<br/>Mail du siège social : <a className="font-bold hover:text-useayl" href="mailto:contact@usea.fr">contact@usea.fr</a>
<br/>Représentant légal de la société : LE COZ Bastien
<br/>Fonction du représentant légal de la société : Président
Directeur de la publication du site web : LE COZ Bastien</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Informations générales prestataire :</p>
<p className="text-useabl text-justify">Ce site est hébergé par :
<br/>SARL o2switch
<br/>Chemin des Pardiaux
<br/>63000 Clermont-Ferrand
<br/>o2switch.fr</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Droit applicable :</p>
<p className="text-useabl text-justify">Le site Internet <a className="font-bold hover:text-useayl" href="https://www.unstageetapres.fr">www.unstageetapres.fr</a> et les présentes conditions générales sont soumises au droit français et sont rédigées en français. USEA se réserve le droit de modifier les présentes mentions à tout moment. L’utilisateur s’engage à la consulter régulièrement.</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Protection des données personnelles :</p>
<p className="text-useabl text-justify">La consultation du site <a className="font-bold hover:text-useayl" href="https://www.unstageetapres.fr">www.unstageetapres.fr</a> est possible sans que vous ayez à révéler votre identité ou toute autre information à caractère personnel vous concernant. USEA s’engage à respecter votre vie privée et à protéger les informations que vous lui communiquez. En particulier, les données personnelles collectées sur le site Internet <a className="font-bold hover:text-useayl" href="https://www.unstageetapres.fr">www.unstageetapres.fr</a> sont destinées à l’usage de l’association USEA . Elles sont confidentielles et traitées comme telles. Concernant les informations à caractère nominatif que vous seriez amenés à nous communiquer, vous bénéficiez d’un droit d’accès et de rectification conformément à la loi française Informatique et Liberté n° 78-17 du 6 janvier 1978. Vous pouvez exercer ce droit auprès de USEA – Adresse : 18 Rue de Varenne, 75007 Paris. Si vous êtes abonnés à des services d’information par courrier électronique (« newsletter ») vous pouvez demander à ne plus recevoir ces courriers en nous contactant : <a className="font-bold hover:text-useayl" href="mailto:contact@usea.fr">contact@usea.fr</a> Nous vous signalons qu’afin de vous proposer des produits et services toujours plus adaptés, certaines informations à caractère non personnel, relatives à votre activité sur ce site, seront automatiquement collectées. Ces informations sont destinées à USEA et pourront également être utilisées dans le cadre d’opérations marketing ou servir de base à des études et analyses. Ces informations ne seront en aucun cas communiquées à des tiers. Seul le personnel de USEA ont accès aux données. </p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Sécurité :</p>
<p className="text-useabl text-justify">Nous prenons toutes les précautions utiles afin de préserver l’intégrité des données, leur confidentialité et empêcher toute communication à des tiers non autorisés.</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Liens hypertextes :</p>
<p className="text-useabl text-justify">La mise en place d’un lien hypertexte vers le site www.unstageetapres.fr ne nécessite pas d’autorisation préalable et écrite. Néanmoins, USEA doit en être informé dans un délai maximum de 30 jours après la mise en place du lien. En tout état de cause, USEA n’est en aucun cas tenue responsable du contenu ainsi que des produits ou services proposés sur les sites auxquels le site www.unstageetapres.fr se trouverait lié par des liens hypertextes ou tout autre type de lien.</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Droits de propriété intellectuelle :</p>
<p className="text-useabl text-justify">USEA avise les utilisateurs de ce site que de nombreux éléments de ce site :
<br/>a) sont protégés par la législation sur le droit d’auteur : ce peut être notamment le cas des photographies, des articles, des dessins, des séquences animées,… ;
<br/>b) et/ou sont protégés par la législation sur les dessins et modèles ;
<br/>c) sont protégés par la législation sur les marques.
<br/>Les éléments ainsi protégés sont la propriété de USEA ou de tiers ayant autorisé USEA à les exploiter.
<br/>Toute reproduction, représentation, utilisation, adaptation, modification, incorporation, traduction, commercialisation, partielles ou intégrales par quelque procédé et sur quelque support que ce soit (papier, numérique, …) sont interdites, sans l’autorisation écrite préalable de USEA hormis les exceptions visées à l’article L 122.5 du Code de la Propriété Intellectuelle, sous peine de constituer un délit de contrefaçon de droit d’auteur et/ou de dessins et modèles et/ou de marque, puni de deux ans d’emprisonnement et de 150 000€ d’amende.</p>


<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Droits d’auteur et/ou Droits sur les Dessins et Modèles :</p>
<p className="text-useabl text-justify">Les photographies, textes, slogans, dessins, images, séquences animées sonores ou non ainsi que toutes les oeuvres intégrées dans le site sont la propriété de USEA ou de tiers ayant autorisé USEA à les utiliser.
Les reproductions, sur un support papier ou informatique, dudit site sont autorisées sous réserve qu’elles soient strictement réservées à un usage personnel excluant tout usage à des fins publicitaires et/ou commerciales et/ou d’information et/ou qu’elles soient conformes aux dispositions de l’article L122-5 du Code de la Propriété Intellectuelle.</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Informations relatives aux produits :</p>
<p className="text-useabl text-justify">Dans le cadre d’une politique d’amélioration constante de ses produits et services, USEA peut modifier à tout moment les caractéristiques de son offre. Les produits et/ou services présentés sur ce site sont ceux distribués en France métropolitaine.
En tout état de cause, les informations contenues sur ce site sont des informations à caractère général et n’ont pas valeur contractuelle.</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Limitation de responsabilité :</p>
<p className="text-useabl text-justify">Vous utilisez le site <a className="font-bold hover:text-useayl" href="https://www.unstageetapres.fr">www.unstageetapres.fr</a> sous votre seule et entière responsabilité. USEA ne pourra être tenu pour responsable des dommages directs ou indirects, tels que, notamment, préjudice matériel, pertes de données ou de programme, préjudice financier, résultant de l’utilisation de ce site ou de sites qui lui sont liés.</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Mise à jour :</p>
<p className="text-useabl text-justify">USEA se réserve le droit de modifier et de mettre à jour, sans préavis, les présentes mentions légales et tous les éléments, produits présentés sur le site. L’ensemble de ces modifications s’impose aux internautes qui doivent consulter les présentes Conditions Générales lors de chaque connexion.</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">Données statistiques de suivi :</p>
<p className="text-useabl text-justify">Nous utilisons les données de connexion pour nos statistiques de consultation (type de navigateur, nombre de visiteurs, rubriques visitées…) pour l’optimisation de notre site en terme de rubriques et de navigation, mais ces informations ne sont pas transmises à des tiers.</p>

<p className="text-useabl font-bold text-[1.2vw] pt-[2%]">La reproduction sur support papier :</p>
<p className="text-useabl text-justify">A l’exception de l’iconographie, la reproduction des pages de ce site sur un support papier est autorisée, sous réserve du respect des trois conditions suivantes :
<br/>– gratuité de la diffusion.
<br/>– respect de l’intégrité des documents reproduits (aucune modification, ni altération d’aucune sorte).
<br/>– citation explicite du site <a className="font-bold hover:text-useayl" href="https://www.unstageetapres.fr">www.unstageetapres.fr</a> comme source et mention que les droits de reproduction sont réservés et strictement limitées.</p>

          

        </div>
        </motion.div>   
</>
      
    );
  };


export default function Mentions() {
    
    return (
      <>
    
        <div className=""><Boxmentions/></div>  
        
      </>
    )
}