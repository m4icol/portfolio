import { SmallBox, MainBox, BoxContainer } from "../../components/BoxContainer";
import RadialGradient from "../../components/RadialGradient";

export default function AboutGrid(){
    return(
        <div className="relative w-[900px] grid grid-cols-4 grid-rows-4 gap-3 mt-8">
                <SmallBox title="+3">
                    <p className="text-DARK-subtext">Proyectos</p>
                </SmallBox>

                <BoxContainer className="row-span-3 col-start-1 row-start-2"
                title="FRONTEND">
                    <p></p>
                </BoxContainer>

                <MainBox className="col-span-2 row-span-2 col-start-2 row-start-1"/>
                
                <BoxContainer className="row-span-2 col-start-2 row-start-3"
                title="BACKEND">
                    <p></p>
                </BoxContainer>

                <BoxContainer className="row-span-2 col-start-3 row-start-3"
                title="OTRAS SKILLS">
                    <p></p>
                </BoxContainer>

                <SmallBox className="col-start-4 row-start-1"
                title="+4">
                    <p className="text-DARK-subtext">Certificados</p>
                </SmallBox>

                <SmallBox className="col-start-4 row-start-2"
                title="B1">
                    <p className="text-DARK-subtext">Nivel de Ingles</p>
                </SmallBox>

                <SmallBox className="col-start-4 row-start-3" 
                title="2">
                    <p className="w-27 text-DARK-subtext">Contribuciones</p>
                </SmallBox>

                <a href="" className="relative overflow-hidden">
                    <SmallBox className="col-start-4 row-start-4" title="+">
                        <p className="w-25 text-center text-sm text-gradient">VER MAS</p>
                    </SmallBox>

                    <RadialGradient
                        size="300"
                        top="20"
                        left="-40"
                        gradient="gradient-radial-project absolute"
                    />
                </a>

                <div className="opacity-50 pointer-events-none">
                    <RadialGradient
                        size="400"
                        top="50"
                        left="250"
                        gradient="gradient-radial-project absolute"
                    />
                </div>
            </div>
    )
}