import type { Project } from "../../types";
import RadialGradient from "../../components/RadialGradient";
import GitHub from "../../assets/icons/GitHub";
import Link from "../../assets/icons/Link";

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

  export default function ColumnList() {
    return (
      <div className="relative flex flex-col items-center gap-5">
        {Projects.map(({ title, description, img, repository, link }, index) => (
          <div
            key={index}
            className="relative flex-col max-w-[20rem] md:max-w-[41rem] h-full md:h-[290px] border-1 overflow-hidden rounded-xl px-2 py-2 gap-5 md:px-8 flex
            border-LIGHT-subtext/20 bg-LIGHT-selected/20
            dark:border-DARK-subtext/20 dark:bg-DARK-selected">

            <img
              src={img}
              alt={title}
              className="md:absolute right-0 top-0 md:right-[-160px] md:top-[35px] md:w-[500px] object-contain w-full transition-opacity duration-300"
            />

            <div className="z-10 px-5 w-full md:max-w-[45%] h-full flex flex-col pb-5 md:pb-0 md:pt-3 justify-center gap-2">
              <p className="text-lg font-semibold text-LIGHT-text dark:text-DARK-text">{title}</p>
              <p className="text-sm/4.5 text-LIGHT-subtext dark:text-DARK-subtext">{description}</p>
              
              <div className="mt-2 flex flex-row z-20 gap-3 items-center">
                <a href={repository} aria-label="Look at the repository project" target="_blank" className="opacity-70 hover:opacity-100 flex flex-row items-center gap-3 border-1 rounded-lg py-2 px-3.5
                  bg-LIGHT-selected/60 border-LIGHT-text/10
                  dark:bg-DARK-selected dark:border-DARK-text/10">
                
                  <GitHub className="text-LIGHT-text dark:text-DARK-text" size={15}></GitHub>
                </a>
                <a href={link} aria-label="Look at the project" target="_blank" className="opacity-90 hover:opacity-100 flex flex-row items-center gap-3 border-1 rounded-lg py-2 px-3.5
                  bg-LIGHT-selected/60 border-LIGHT-text/10
                  dark:bg-DARK-selected dark:border-DARK-text/10">
                
                  <Link className="text-LIGHT-text dark:text-DARK-text" size={15}></Link>
                  <p className="text-xs text-LIGHT-text dark:text-DARK-subtext">Visitar</p>

                </a>
              </div>
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
          
        ))}
      </div>
    );
  }
  