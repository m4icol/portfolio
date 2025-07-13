import Line from "../assets/icons/Line";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Contact(){
    return(
        <section id="contact" className="relative flex flex-col justify-center items-center gap-5 pb-70">
            <StarBackground widthBackground={700} heightBackground={400} starCount={50} topOffset={-100} />
            
            <div className="flex flex-row items-center gap-5">
                <Line classList="mb-0.5"></Line>
                <p className="text-xs text-gradient">
                    Desarrollado con ❤️ por Maickol Rivera
                </p>
                <Line classList="mb-0.5 rotate-180"></Line>
            </div>

            <h2 className="font-[poppins] md:w-2/6 text-gradient text-5xl text-center">
                HABLAME DE TU PROXIMO PROYECTO
            </h2>
            <div className="flex gap-6 mt-1">
                <SocialButton text={"GIT HUB"} href="https://github.com/m4icol" target="_black"></SocialButton>
                <SocialButton text={"LINKEDIN"} href="https://www.linkedin.com/in/maickol-rivera/" target="_black"></SocialButton>
            </div>

        </section>
    )
}