
import Html from "../../assets/icons/skills_icons/frontend/HtmlIcon";
import JavaScript from "../../assets/icons/skills_icons/frontend/JavaScriptIcon";
import Tailwind from "../../assets/icons/skills_icons/frontend/TailwindIcon";
import TypeScript from "../../assets/icons/skills_icons/frontend/TypeScriptIcon";
import { SmallBox, MainBox, BoxContainer } from "../../components/BoxContainer";
import RadialGradient from "../../components/RadialGradient";
import SkillsPill from "../../components/SkillsPill";
import Css from "../../assets/icons/skills_icons/frontend/CssIcon";
import ReactJS from "../../assets/icons/skills_icons/frontend/ReactJSIcon";
import ThreeJS from "../../assets/icons/skills_icons/frontend/ThreeJSIcon";
import Astro from "../../assets/icons/skills_icons/frontend/AstroIcon";
import NodeJSIcon from "../../assets/icons/skills_icons/backend/NodeJSIcon";
import NestIcon from "../../assets/icons/skills_icons/backend/NestIcon";
import PythonIcon from "../../assets/icons/skills_icons/backend/PythonIcon";
import FastAPIIcon from "../../assets/icons/skills_icons/backend/FastAPIIcon";
import MongoDBIcon from "../../assets/icons/skills_icons/backend/MongoDBIcon";
import FigmaIcon from "../../assets/icons/skills_icons/other/FigmaIcon";
import CloudinaryIcon from "../../assets/icons/skills_icons/other/CloudinaryIcon";
import GitIcon from "../../assets/icons/skills_icons/other/GitIcon";
import BashIcon from "../../assets/icons/skills_icons/other/BashIcon";
import AzureIcon from "../../assets/icons/skills_icons/other/AzureIcon";

const FRONTEND = [
    {
        icon: <Html></Html>,
        text: "HTML"
    },
    {
        icon: <Css />,
        text: "CSS"
    },
    {
        icon: <Tailwind />,
        text: "TAILWIND"
    },
    {
        icon: <JavaScript />,
        text: "JAVASCRIPT"
    },
    {
        icon: <TypeScript />,
        text: "TYPESCRIPT"
    },
    {
        icon: <ReactJS />,
        text: "REACT JS"
    },
    {
        icon: <ThreeJS />,
        text: "THREE JS"
    },
    {
        icon: <Astro />,
        text: "ASTRO"
    },
]

const BACKEND = [
    {
        icon: <NodeJSIcon />,
        text: "NODE JS"
    },
    {
        icon: <NestIcon />,
        text: "NEST"
    },
    {
        icon: <PythonIcon />,
        text: "PYTHON"
    },
    {
        icon: <FastAPIIcon />,
        text: "FASTAPI"
    },
    {
        icon: <MongoDBIcon />,
        text: "MONGO DB"
    },
]

const OTHER_SKILLS = [
    {
        icon: <FigmaIcon />,
        text: "FIGMA"
    },
    {
        icon: <GitIcon />,
        text: "GIT"
    },
    {
        icon: <BashIcon />,
        text: "BASH"
    },
    {
        icon: <AzureIcon />,
        text: "AZURE"
    },
    {
        icon: <CloudinaryIcon />,
        text: "CLOUDINARY"
    },
]

export default function AboutGrid(){
    return(
        <div className="relative max-w-[20rem] md:max-w-[62rem] md:px-0 px-2 w-full grid mt-8 gap-3 
            flex-row
            md:grid-cols-4 md:grid-rows-4 
        ">
                <SmallBox className="
                col-start-1 row-start-6
                md:row-start-1
                "
                title="+5">
                    <p className="text-LIGHT-subtext dark:text-DARK-subtext">
                        Proyectos
                    </p>
                </SmallBox>

                <BoxContainer className="
                col-span-2 col-start-1 row-start-3
                md:col-span-1 md:row-span-3  md:row-start-2"
                title="FRONTEND">

                    <div className="grid grid-cols-2 px-5 gap-2">
                        {FRONTEND.map((skill, index) => (
                            <SkillsPill 
                                key={index} 
                                icon={skill.icon} 
                                text={skill.text}
                                span={skill.text.length > 4 ? 2 : 1}
                            />
                        ))}
                    </div>

                </BoxContainer>

                <MainBox className="
                col-span-2 row-span-2 col-start-1 row-start-1
                md:col-start-2"/>
                
                <BoxContainer className="
                col-span-2 col-start-1 row-start-4
                md:col-span-1 md:row-span-2 md:col-start-2 md:row-start-3"
                title="BACKEND">
                    <div className="grid grid-cols-2 px-5 gap-2">
                        {BACKEND.map((skill, index) => (
                            <SkillsPill 
                                key={index} 
                                icon={skill.icon} 
                                text={skill.text}
                                span={skill.text.length > 6 ? 2 : 1}
                            />
                        ))}
                    </div>
                </BoxContainer>

                <BoxContainer className="
                col-span-2 col-start-1 row-start-5
                md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-3"
                title="OTRAS SKILLS">
                     <div className="grid grid-cols-2 px-5 gap-2">
                        {OTHER_SKILLS.map((skill, index) => (
                            <SkillsPill 
                                key={index} 
                                icon={skill.icon} 
                                text={skill.text}
                                span={skill.text.length > 6 ? 2 : 1}
                            />
                        ))}
                    </div>
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