import Arrow from "../assets/icons/Arrow";
import Line from "../assets/icons/Line";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Home(){

    return(
        <section className="relative w-screen h-full flex items-center mt-50 flex-col gap-6 pb-100">
            <StarBackground widthBackground={1000} heightBackground={400} starCount={70} topOffset={5} />
            
            <div className="flex flex-row items-center gap-5">
                <Line classList="mb-0.5"></Line>
                <p className="text-xs text-gradient">MAICKOL RIVERA</p>
                <Line classList="mb-0.5 rotate-180"></Line>
            </div>

            <h1 className="font-[poppins] text-gradient text-3xl md:text-4xl text-center w-[380px] md:w-[450px]">Desarrollando Software & Experiencias Unicas</h1>
            <p className="text-gradient text-center opacity-80 text-base/5 w-[400px] md:w-[450px]">Estudiante universitario con 2 años de experiencia creando soluciones y productos de forma  independiente.</p>
            <div className="flex gap-6 mt-1">
                <SocialButton text={"DESCARGAR CV"} href="public\CV - MAICKOL RIVERA.pdf" download></SocialButton>
                <SocialButton text={"CONTACTA ME"} href="/#contact"></SocialButton>
            </div>

            <a href="#projects" className="absolute bottom-40" aria-label="projects section">
                <Arrow color="white" size="23" className="opacity-50"/>
            </a>
        </section>
    )
}