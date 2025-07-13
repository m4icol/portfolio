import AboutCode from "../assets/icons/AboutCode";
import StarBackground from "../components/StarBackground";
import AboutGrid from "./sub_sections/AboutGrid";

export default function About(){
    return(
        <section  className="w-screen relative flex items-center mt-35 flex-col gap-3 pb-100">
            <div className="flex flex-row items-center gap-5 ">
                <AboutCode color="gray"/>
                <h2 className="font-[poppins] text-gradient text-3xl text-center">SOBRE MI</h2>
            </div>
            <p className="text-gradient text-center opacity-80 text-base/5">
                Comencé mi trayectoria con el Desarrollo de Software a los <br /> 
                17 años, acumulando experiencia en diversos proyectos
            </p>

            <AboutGrid></AboutGrid>

            <StarBackground widthBackground={1000} heightBackground={500} starCount={50} topOffset={120} />

        </section>
    )
}