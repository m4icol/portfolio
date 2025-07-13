import type { Project } from "../../types";
import RadialGradient from "../../components/RadialGradient";

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

  export default function ColumnList() {
    return (
      <div className="relative flex flex-col items-center gap-5">
        {Projects.map(({ title, description, url }, index) => (
          <div
            key={index}
            className="relative w-[350px] md:w-[650px] h-full md:py-10 border border-DARK-subtext/20 bg-DARK-selected overflow-hidden rounded-xl px-8 md:px-10 flex"
          >

            <div className="z-10 w-full md:max-w-[44%] h-full flex flex-col pt-55 pb-8 md:pb-0 md:pt-0 justify-center gap-2">
              <p className="text-lg font-semibold text-white">{title}</p>
              <p className="text-sm/4.5 text-gray-400">{description}</p>
            </div>
  
            <img
              src={url}
              alt={title}
              className="absolute right-3.5 top-3.5 w-80 md:right-[-160px] md:top-[35px] md:w-[320px] object-cover rounded-lg transition-opacity duration-300"
            />

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
          
        ))}
      </div>
    );
  }
  