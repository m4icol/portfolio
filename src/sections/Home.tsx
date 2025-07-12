import Arrow from "../assets/icons/Arrow";
import Line from "../assets/icons/Line";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Home(){

    return(
        <div className="w-screen flex items-center mt-40 flex-col gap-4">
            <StarBackground widthBackground={1000} heightBackground={400} starCount={70} topOffset={5} leftOffset={15} />
            
            <div className="flex flex'row items-center gap-7">
                <Line classList="mb-1"></Line>
                <p className="text-xs text-gradient">MAICKOL RIVERA</p>
                <Line classList="mb-1 rotate-180"></Line>
            </div>

            <h1 className="font-[poppins] text-gradient text-4xl text-center">Desarrollando Software <br /> & Experiencias Unicas</h1>
            <p className="text-gradient text-center opacity-80 text-base/5">Estudiante universitario con 2 años de experiencia <br /> creando soluciones y productos de forma  independiente.</p>
            <div className="flex gap-4 mt-1">
                <SocialButton text={"DESCARGAR CV"} href="public\CV - MAICKOL RIVERA.pdf" download></SocialButton>
                <SocialButton text={"CONTACTA ME"} href="/#contact"></SocialButton>
            </div>

            <Arrow color="white" size="23" className="absolute bottom-12 opacity-50"></Arrow>
        </div>
    )
}