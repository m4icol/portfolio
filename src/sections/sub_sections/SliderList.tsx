import { useEffect, useState } from "react";
import Arrow from "../../assets/icons/Arrow";
import RadialGradient from "../../components/RadialGradient";
import type { Project } from "../../types";
import GitHub from "../../assets/icons/GitHub";
import Link from "../../assets/icons/Link";

type SliderListProps = {
  autoPlay?: boolean;
  showButtons?: boolean;
};

const Projects: Project[] = [
  {
    title: "BIG SORT",
    description:
      "Herramienta interactiva para ver cómo funcionan los algoritmos de ordenamiento, en tiempo real y código en varios lenguajes de programación.",
    img: "/bigsort.webp",
    repository: "https://github.com/m4icol/bigsort",
    link: "https://bigsort.vercel.app/"
  },
  {
    title: "REKRYPT",
    description:
      "Explora cifrados clásicos y modernos, personaliza claves y visualiza el proceso de encriptación paso a paso.",
    img: "/rekrypt.webp",
    repository: "https://github.com/m4icol/rekrypt",
    link: "https://rekrypt.vercel.app/"
  },
  {
    title: "SISTEMA SOLAR",
    description:
      "Simulación 3D interactiva de los planetas orbitando alrededor del Sol, desarrollada con Three.js y Astro.",
    img: "/solarsystem.webp",
    repository: "https://github.com/m4icol/sistema-solar",
    link: "https://sistemasolar-threejs.vercel.app/"
  },
];

export default function SliderList({ autoPlay = true}: SliderListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay && Projects.length > 0) {
      const interval = setInterval(() => {
        selectNewSlide(true);
      }, 2800);
      return () => clearInterval(interval);
    }
  });

  const selectNewSlide = (next = true) => {
    if (Projects.length === 0) return;

    setLoaded(false);
    const maxIndex = Projects.length - 1;
    const nextIndex = next
      ? selectedIndex < maxIndex ? selectedIndex + 1 : 0
      : selectedIndex > 0 ? selectedIndex - 1 : maxIndex;

    setTimeout(() => {
      setSelectedIndex(nextIndex);
      setLoaded(true);
    }, 500);
  };

  const current = Projects[selectedIndex];

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex-col max-w-[20rem] md:max-w-[41rem] h-full md:h-[290px] border-1 overflow-hidden rounded-xl px-2 py-2 gap-5 md:px-8 flex
      border-LIGHT-subtext/20 bg-LIGHT-selected/20
      dark:border-DARK-subtext/20 dark:bg-DARK-selected">
        
        <div className="md:absolute right-0 top-0 md:right-[-180px] md:top-[35px] md:w-[530px] w-full">
          {Projects.map((project, index) => (
            <img
              key={project.img}
              src={project.img}
              alt={project.title}
              className={`absolute p-2 md:p-0 inset-0 object-cover w-full transition-opacity duration-100 ${
                index === selectedIndex && loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => {
                if (index === selectedIndex) setLoaded(true);
              }}
            />
          ))}
        </div>

        <div className="w-full pt-41.5 px-5 md:max-w-[45%] h-full flex flex-col pb-11 md:pb-0 md:pt-2 md:justify-center gap-2">

          <p className="text-lg font-semibold text-LIGHT-text dark:text-DARK-text">{current.title}</p>
          <p className="text-sm/4.5 text-LIGHT-subtext dark:text-DARK-subtext">{current.description}</p> 

          <div className="mt-2 md:my-2 flex flex-row z-20 gap-3 items-center">

            <a href={current.repository} aria-label="Look at the repository project" target="_blank" className="opacity-70 hover:opacity-100 flex flex-row items-center gap-3 border-1 rounded-lg py-2 px-3.5
              bg-LIGHT-selected/60 border-LIGHT-text/10
              dark:bg-DARK-selected dark:border-DARK-text/10">
            
              <GitHub className="text-LIGHT-text dark:text-DARK-text" size={15}></GitHub>
            </a>

            <a href={current.link} aria-label="Look at the project" target="_blank" className="opacity-70 hover:opacity-100 flex flex-row items-center gap-3 border-1 rounded-lg py-2 px-3.5
              bg-LIGHT-selected/60 border-LIGHT-text/10
              dark:bg-DARK-selected dark:border-DARK-text/10">
            
              <Link className="text-LIGHT-text dark:text-DARK-text" size={15}></Link>
              <p className="text-xs text-LIGHT-text dark:text-DARK-subtext">Visitar</p>

            </a>
          </div>
        </div>

        <div className="absolute px-5 h-1 w-3/4 md:w-55 bottom-6.5 flex flex-row gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1/3 h-1 bg-LIGHT-text/30  dark:bg-DARK-text/30 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 4s ease-in-out ${
                  selectedIndex >= i ? "bg-LIGHT-text/80 dark:bg-DARK-text/80" : "bg-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>


        <RadialGradient
          size="700"
          top="-20"
          left="250"
          gradient="gradient-radial-project absolute"
        />

        <RadialGradient
          size="500"
          top="-350"
          left="-260"
          gradient="gradient-radial-project absolute"
        />
      </div>

        <div className="flex w-screen px-3 md:px-0 md:w-[750px] absolute bottom-55 md:bottom-35 justify-between items-center mt-4">
          <button
            onClick={() => selectNewSlide(false)}
            className="rotate-90 transition cursor-pointer"
            aria-label="Previous slide"
          >
            <Arrow size="18" className="opacity-50 hover:opacity-100" />
          </button>
          <button
            onClick={() => selectNewSlide(true)}
            className="rotate-270 transition cursor-pointer"
            aria-label="Next slide"
          >
            <Arrow size="18" className="opacity-50 hover:opacity-100" />
          </button>
        </div>
    </div>
  );
}