import { useState } from "react";
import ProjectsCode from "../assets/icons/ProjectsCode";
import SwitchOption from "../components/SwitchOption";
import SliderList from "../assets/icons/SliderList";
import ColumnsList from "../assets/icons/ColumnsList";
import Slider from "../components/Slider"
import StarBackground from "../components/StarBackground";

export default function Projects(){

    type List = "SLIDER" | "COLUMNS";
    const [typeList, setTypeList] = useState<List>("SLIDER");

    return(
        <section  className="w-screen relative min-h-screen flex items-center mt-35 flex-col gap-6">
            <div className="flex flex-row items-center gap-3 ">
                <ProjectsCode color="gray"/>
                <h2 className="font-[poppins] text-gradient text-3xl text-center">PROJECTS</h2>

            </div>
            <p className="text-gradient text-center opacity-80 text-base/5">
                Desarrollando productos como landing pages, apps multiplataforma, experiencias <br /> 3D interactivas, integraciones de encriptación y visualizacion de algoritmos. 
            </p>

            <div className="flex flex-row justify-between w-[650px] mt-10">
                <div className="flex flex-row items-center gap-5">
                    <SwitchOption
                        selectedValue={typeList}
                        setSelectedValue={setTypeList}
                        options={[
                            <SliderList size={15}/>,
                            <ColumnsList size={15}/>
                        ]}
                        values={["SLIDER", "COLUMNS"]}
                    />
                    <p className="text-sm font-medium">LISTA DE PROYECTOS</p>
                </div>
                <button className="text-xs text-DARK-subtext cursor-pointer hover:text-DARK-text gradient-menu border-DARK-text/10 rounded-lg px-4 border-1">
                    VER TODOS +
                </button>
            </div>

            <Slider></Slider>
            <StarBackground widthBackground={1000} heightBackground={400} starCount={70} topOffset={120} />

        </section>
    )
}