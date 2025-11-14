'use client'
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import framerIcon from "@/assets/icons/framer.svg"
import adobephotoIcon from "@/assets/icons/adobephoto.svg"
import figmaIcon from "@/assets/icons/figma.svg"
import coralIcon from "@/assets/icons/coral.svg"
import adobeXdIcon from "@/assets/icons/adobexd.svg"
import nukeIcon from "@/assets/icons/nuke.svg"
import illustratorIcon from "@/assets/icons/illustrator.svg"
import mayaIcon from "@/assets/icons/maya.svg"
import mapImage from "@/assets/images/map1.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Framer",
    iconType:  framerIcon,
  },
  {
    title: "Figma",
    iconType:  figmaIcon,
  },
  {
    title: "AdobeXd",
    iconType:  adobeXdIcon,
  },
  {
    title: "Nuke",
    iconType:  nukeIcon,
  },
  {
    title: "AdobePhotoshop",
    iconType:  adobephotoIcon,
  },
  {
    title: "Illustrator",
    iconType:  illustratorIcon,
  },
  {
    title: "Maya",
    iconType:  mayaIcon,
  },
  {
    title: "CoralDraw",
    iconType:  coralIcon,
  },
]

const hobbies = [
  {
    title: 'Film Making',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Technology',
    emoji: '💻',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Travelling',
    emoji: '🏃‍♂️',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '35%',
    top: '40%',
  },
  
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me" 
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 
          md:grid-cols-5 lg:grid-cols-3 ">  
          <Card className="h-[320px] col-span-2 lg:col-span-1">
            <CardHeader 
              title="My Reads" 
              description="Explore the book shaping my perspetives."
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="My book"/>
            </div>
          </Card>
          <Card className="h-[320px] col-span-3 lg:col-span-2">
            <CardHeader 
              title="My Toolbox" 
              description="Explore the technologies and tools I use to craft digital experiences." 
              className=""
            />
            <ToolboxItems items={toolboxItems} 
            className=""
            itemsWrapperClassName="animate-move-left [animation-duration:15s]"
            />
            <ToolboxItems 
            items={toolboxItems} 
            className="mt-6"
            itemsWrapperClassName="animate-move-right [animation-duration:15s]"
            />
          </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Design"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            /> 
            <div className="relative flex-1" 
            ref={constraintRef}>
              {hobbies.map(hobby => (
                <motion.div 
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span >{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0">
              <Image src={mapImage} alt="map" 
              className="object-cover
              object-left-top w-full h-full"/>
            </div>
            <div className="absolute 
            top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            size-20 rounded-full bg-gradient-to-r 
            from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full
            after:outline-gray-950/30">
            <div className="absolute inset-0 
            rounded-full bg-gradient-to-r 
          from-emerald-300 to-sky-400 -z-20 
            animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 
              rounded-full bg-gradient-to-r 
            from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={smileMemoji} alt="memojiSmile" 
              className="size-20"/>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
