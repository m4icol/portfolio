import { useState } from "react";
import ProjectsCode from "../assets/icons/ProjectsCode";
import SwitchOption from "../components/SwitchOption";
import ColumnsListIcon from "../assets/icons/ColumnsListIcon";
import StarBackground from "../components/StarBackground";
import SliderListIcon from "../assets/icons/SliderListIcon";
import ColumnList from "./sub_sections/ColumnList";
import SliderList from "./sub_sections/SliderList";

export default function Projects(){

    type List = "SLIDER" | "COLUMNS";
    const [typeList, setTypeList] = useState<List>("SLIDER");

    return(
        <section  className="w-screen relative flex items-center mt-35 flex-col gap-5 pb-100">
            <div className="flex flex-row items-center gap-5 ">
                <ProjectsCode color="gray"/>
                <h2 className="font-[poppins] text-gradient text-3xl text-center">PROYECTOS</h2>

            </div>
            <p className="w-[330px] md:w-[700px] text-gradient text-center opacity-80 text-base/5">
                Desarrollando productos como landing pages, apps multiplataforma, experiencias <br /> 3D interactivas, integraciones de encriptación y visualizacion de algoritmos. 
            </p>

            <div className="flex gap-32 md:gap-5 md:flex-row justify-between md:w-[650px] mt-10">
                <div className="flex flex-row items-center gap-5">
                    <SwitchOption
                        selectedValue={typeList}
                        setSelectedValue={setTypeList}
                        options={[
                            <SliderListIcon size={15}/>,
                            <ColumnsListIcon size={15}/>
                        ]}
                        values={["SLIDER", "COLUMNS"]}
                    />
                    <p className="text-sm font-semibold text-DARK-subtext hidden md:block">LISTA DE PROYECTOS</p>
                </div>
                <button className="text-xs text-DARK-subtext cursor-pointer hover:text-DARK-text gradient-menu border-DARK-text/10 rounded-lg px-4 border-1">
                    VER TODOS +
                </button>
            </div>

            {typeList == "SLIDER" ? <SliderList/> : <ColumnList/>}
            <StarBackground widthBackground={1000} heightBackground={500} starCount={50} topOffset={120} />

        </section>
    )
}