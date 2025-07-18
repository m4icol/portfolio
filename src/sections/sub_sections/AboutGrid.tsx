import { SmallBox, MainBox, BoxContainer } from "../../components/BoxContainer";
import RadialGradient from "../../components/RadialGradient";

export default function AboutGrid(){
    return(
        <div className="relative lg:w-[56rem] md:px-0 px-2 w-full grid mt-8 gap-3 
        grid-cols-2 grid-rows-8
        md:grid-cols-4 md:grid-rows-4 
        ">
                <SmallBox className="
                col-start-1 row-start-6
                md:row-start-1
                "
                title="+5">
                    <p className="text-LIGHT-subtext dark:text-DARK-subtext">
                        Proyectos</p>
                </SmallBox>

                <BoxContainer className="
                col-span-2 col-start-1 row-start-3
                md:col-span-1 md:row-span-3  md:row-start-2"
                title="FRONTEND">
                    <p></p>
                </BoxContainer>

                <MainBox className="
                col-span-2 row-span-2 col-start-1 row-start-1
                md:col-start-2"/>
                
                <BoxContainer className="
                col-span-2 col-start-1 row-start-4
                md:col-span-1 md:row-span-2 md:col-start-2 md:row-start-3"
                title="BACKEND">
                    <p></p>
                </BoxContainer>

                <BoxContainer className="
                col-span-2 col-start-1 row-start-5
                md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-3"
                title="OTRAS SKILLS">
                    <p></p>
                </BoxContainer>

                <SmallBox className="
                row-start-6
                md:col-start-4 md:row-start-1"
                title="+6">
                    <p className="text-LIGHT-subtext dark:text-DARK-subtext">
                        Certificados</p>
                </SmallBox>

                <SmallBox className="
                row-start-7
                md:col-start-4 md:row-start-2"
                title="B1">
                    <p className="text-LIGHT-subtext dark:text-DARK-subtext">
                        Nivel de Ingles</p>
                </SmallBox>

                <SmallBox className="
                row-start-7
                md:col-start-4 md:row-start-3" 
                title="2">
                    <p className="w-27 text-LIGHT-subtext dark:text-DARK-subtext">
                        Contribuciones</p>
                </SmallBox>

                <a href="" className="relative overflow-hidden 
                    col-span-2 row-start-8
                    md:col-start-4 md:row-start-4 mr-3.5
                    ">
                    <SmallBox className=""
                    title="+">
                        <p className="text-center text-sm text-gradient">
                            VER MAS</p>
                    </SmallBox>

                    <RadialGradient
                        size="300"
                        top="20"
                        left="-40"
                        gradient="gradient-radial-project absolute"
                    />
                </a>

                <div className="opacity-50 right-0 top-[10%] md:top-[20%] md:right-[30%] absolute pointer-events-none">
                    <RadialGradient
                        size="400"
                        gradient="gradient-radial-project "
                    />
                </div>
            </div>
    )
}