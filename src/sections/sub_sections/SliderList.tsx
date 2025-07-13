import { useEffect, useState } from "react";
import Arrow from "../../assets/icons/Arrow";
import RadialGradient from "../../components/RadialGradient";
import type { Project } from "../../types";

type SliderListProps = {
  autoPlay?: boolean;
  showButtons?: boolean;
};

const Projects: Project[] = [
  {
    title: "BIG SORT",
    description:
      "Herramienta interactiva para ver cómo funcionan los algoritmos de ordenamiento, en tiempo real y código en varios lenguajes de programación.",
    url: "/bigsort.webp",
  },
  {
    title: "REKRYPT",
    description:
      "Explora cifrados clásicos y modernos, personaliza claves y visualiza el proceso de encriptación paso a paso.",
    url: "/bigsort.webp",
  },
  {
    title: "SISTEMA SOLAR",
    description:
      "Simulación 3D interactiva de los planetas orbitando alrededor del Sol, desarrollada con Three.js y Astro.",
    url: "/bigsort.webp",
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
      <div className="relative w-[350px] h-full md:w-[650px] md:h-[290px] border-1 border-DARK-subtext/20 bg-DARK-selected overflow-hidden rounded-xl px-10 flex">
        <div className="w-full md:max-w-[44%] h-full flex flex-col pt-60 pb-20 md:pb-0 md:pt-0 md:justify-center gap-2">
          <p className="text-lg font-semibold text-white">{current.title}</p>
          <p className="text-sm/4.5 text-gray-400">{current.description}</p> 
        </div>

        <img
          src={current.url}
          alt={current.title}
          className={`absolute right-3.5 top-4 w-80 md:right-[-160px] md:top-[35px] md:w-[500px] object-cover rounded-lg transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />

        <div className="absolute h-1 w-55 bottom-8 flex flex-row gap-3">
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