import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page1.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import maharajaLandingPage from "@/assets/images/maharaja-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "SpikeX",
    year: "2025",
    title: "Spikex.ai",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved user feedback" },
      { title: "Increased overall application traffic" },
    ],
    link: "https://spikexai.com/",
    image: darkSaasLandingPage,
  },
  {
    company: "Open Source Contribution",
    year: "2025",
    title: "Rentalog.in",
    results: [
      { title: "Added the FAQ section" },
      { title: "Revamp the About us section" },
      { title: "Increased brand awareness with sleek design" },
    ],
    link: "https://visionary-fenglisu-db1b1d.netlify.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Bunnies Bakes",
    year: "2024",
    title: "Bunnies Bakes",
    results: [
      { title: "Designed end to end" },
      { title: "Increased website responsiveness and visual consistency" },
      { title: "Enhanced brand identity with warm and inviting ui" },
      { title: "Strengthened brand visuals with pastel color palette & clean typography" },
    ],
    link: "https://bunnies-bakes.vercel.app",
    image: aiStartupLandingPage,
  },
  {
    company: "Maharaja Palace ",
    year: "2025",
    title: "Maharaja Palace ",
    results: [
      { title: "Designed end to end" },
      { title: "Enhanced booking experience with clear and simplified user flow" },
      { title: "Improved brand visuals to reflect luxury and heritage aesthetics" },
    ],
    link: "https://www.figma.com/proto/XQXy5PnxrfVuj91bFWh9Es/Untitled?page-id=0%3A1&node-id=1-694&starting-point-node-id=1%3A694&scaling=min-zoom&content-scaling=fixed&show-proto-sidebar=1&t=EIUzTzjLe19BXJbY-1",
    image: maharajaLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center ">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-World Results</p>
      </div>
      <h2 className="text-3xl md:text-5xl font-serif text-center mt-6">
        Featured Projects
      </h2>
      <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
      See How I transformed concepts into engaging digital experiences.
      </p>
      <div className="md:mt-20 flex flex-col mt-10 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
        <Card 
          key={project.title} 
          className="px-8 pb-0 pt-8 md:pt-12 md:px-10 
          lg:pt-16 lg:px-20 sticky top-16"
          style={{
              top: `calc(64px + ${projectIndex*40}px`,
          }}
          >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold 
                uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
                </div>
              <h3 className="font-serif text-2xl md:text-4xl md:mt-20 mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((results, index) =>(
                  <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckIcon className="size-5 md:size-6"/>
                    <span>{results.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
              <button className="bg-white text-gray-950 
              h-12 w-full rounded-xl font-semibold inline-flex
              items-center justify-center gap-2 mt-8 md:w-auto px-6">
                <ArrowUpRightIcon className="size-4"/>
                Visit Live Site
                </button>
              </a>
              </div>
              <div className="relative">
              <Image 
              src={project.image} 
              alt={project.title}
              className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
            </div>
        </Card>
        ))}
      </div>
    </div>
  </section>);
};
