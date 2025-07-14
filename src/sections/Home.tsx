import Arrow from "../assets/icons/Arrow";
import Line from "../assets/icons/Line";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Home(){

    return(
        <section className="px-5 relative w-screen h-full flex items-center mt-50 flex-col gap-6 pb-100">
            <StarBackground widthBackground={50} heightBackground={50} starCount={40} topOffset={-100} />
            
            <div className="flex flex-row items-center gap-5">
                <Line classList="mb-0.5"></Line>
                <p className="text-xs text-gradient text-center block">MAICKOL RIVERA</p>
                <Line classList="mb-0.5 rotate-180"></Line>
            </div>

            <div className="w-full flex flex-col gap-5 items-center">
                <h1 className="font-[poppins] text-gradient text-3xl md:text-4xl text-center max-w-[28rem]">
                    Desarrollando Software & Experiencias Unicas
                </h1>
                <p className="text-gradient text-center opacity-80 text-sm md:text-base/5 max-w-[28rem]">
                    Estudiante universitario con 2 años de experiencia creando soluciones y productos de forma  independiente.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-1">
                <SocialButton text={"DESCARGAR CV"} href="public\CV - MAICKOL RIVERA.pdf" download></SocialButton>
                <SocialButton text={"CONTACTA ME"} href="/#contact"></SocialButton>
            </div>

            <a href="#projects" className="arrow absolute bottom-40" aria-label="projects section">
                <Arrow color="white" size="23" className="opacity-50"/>
            </a>
        </section>
    )
}