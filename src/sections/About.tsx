import AboutCode from "../assets/icons/AboutCode";
import StarBackground from "../components/StarBackground";
import AboutGrid from "./sub_sections/AboutGrid";

export default function About(){
    return(
        <section  className="w-full px-5 relative flex items-center mt-35 flex-col gap-3 pb-100">
            <div className="flex flex-row items-center gap-5 ">
                <AboutCode color="gray"/>
                <h2 className="font-[poppins] text-gradient text-3xl text-center max-w-[28rem]">
                    SOBRE MI
                    </h2>
            </div>
            <p className="max-w-[28rem] text-sm text-gradient text-center opacity-80 md:text-base/5 md:w-1/3">
                Comencé mi trayectoria con el Desarrollo de Software a los
                17 años, acumulando experiencia en diversos proyectos
            </p>

            <AboutGrid></AboutGrid>

            <StarBackground widthBackground={60} heightBackground={50} starCount={50} topOffset={100} />

        </section>
    )
}