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
    }, 300);
  };

  useEffect(() => {
    if (autoPlay && Projects.length > 0) {
      const interval = setInterval(() => {
        selectNewSlide(true);
      }, 4000);
      return () => clearInterval(interval);
    }
  });

  const current = Projects[selectedIndex];

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex-col max-w-[20rem] md:max-w-[41rem] h-full md:h-[290px] border-1 border-DARK-subtext/20 bg-DARK-selected overflow-hidden rounded-xl px-2 py-2 gap-5 md:px-8 flex">
        
        <img
          src={current.img}
          alt={current.title}
          className={`md:absolute right-0 top-0 md:right-[-180px] md:top-[35px] md:w-[530px] object-cover w-full transition-opacity duration-100 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />

        <div className="w-full px-5 md:max-w-[45%] h-full flex flex-col pb-11 md:pb-0 md:pt-0 md:justify-center gap-2">
          <p className="text-lg font-semibold text-white">{current.title}</p>
          <p className="text-sm/4.5 text-gray-400">{current.description}</p> 
          <div className="mt-2 md:my-2 flex flex-row z-20 gap-3 items-center">
            <a href={current.repository} target="_blank" className="opacity-70 hover:opacity-100 flex flex-row items-center gap-3 border-1 bg-DARK-selected border-DARK-text/10 rounded-lg py-2 px-3.5">
              <GitHub color="white" size={15}></GitHub>
            </a>
            <a href={current.link} target="_blank" className="opacity-70 hover:opacity-100 flex flex-row items-center gap-3 border-1 bg-DARK-selected border-DARK-text/10 rounded-lg py-2 px-3.5">
              <Link color="white" size={15}></Link>
              <p className="text-xs text-DARK-subtext">Visitar</p>
            </a>
          </div>
        </div>

        <div className="absolute px-5 h-1 w-3/4 md:w-55 bottom-5 flex flex-row gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1/3 h-1 bg-DARK-text/30 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 4s ease-in-out ${
                  selectedIndex >= i ? "bg-DARK-text/80" : "bg-transparent"
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

        <div className="flex w-full md:w-[750px] absolute bottom-75 md:bottom-34 justify-between items-center mt-4">
          <button
            onClick={() => selectNewSlide(false)}
            className="rotate-90 transition cursor-pointer"
            aria-label="Previous slide"
          >
            <Arrow color="white" size="18" className="opacity-50 hidden md:block hover:opacity-100" />
          </button>
          <button
            onClick={() => selectNewSlide(true)}
            className="rotate-270 transition cursor-pointer"
            aria-label="Next slide"
          >
            <Arrow color="white" size="18" className="opacity-50 hidden md:block hover:opacity-100" />
          </button>
        </div>
    </div>
  );
}