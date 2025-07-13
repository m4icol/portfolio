import AboutCode from "../assets/icons/AboutCode";

export default function About(){
    return(
        <section  className="w-screen relative flex items-center mt-35 flex-col gap-6 pb-120">
            <div className="flex flex-row items-center gap-5 ">
                <AboutCode color="gray"/>
                <h2 className="font-[poppins] text-gradient text-3xl text-center">PROJECTS</h2>
            </div>
            <p className="text-gradient text-center opacity-80 text-base/5">
                Comencé mi trayectoria con el Desarrollo de Software a los <br /> 
                17 años, acumulando experiencia en diversos proyectos
            </p>
        </section>
    )
}