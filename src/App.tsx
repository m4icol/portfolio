import Home from "./sections/Home"
import Header from "./sections/Header";
import RadialGradient from "./components/RadialGradient";
import Moon from "./assets/icons/Moon";
import Sun from "./assets/icons/Sun";
import SwitchOption from "./components/SwitchOption";
import { useState } from "react";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {

  type Theme = "sun" | "moon";
  type Language = "ENG" | "SPN";
  const [theme, setTheme] = useState<Theme>("moon");
  const [language, setLanguage] = useState<Language>("SPN");

  return (
    <div 
    className="w-screen font-[nunito] text-DARK-text flex justify-center flex-col"
    style={{
      backgroundColor: '#151617',
      background: `
        linear-gradient(87deg, 
          rgba(16, 14, 19, 0.2) 0%, 
          rgba(51, 49, 60, 0.18) 50%, 
          rgba(19, 18, 26, 0.2) 100%
        ),
        #151617
      `,
    }}
    >
      <div className="w-full h-full z-10">
        <Header></Header>
        <div id="home"></div>
        <Home></Home>
        <div id="projects"></div>
        <Projects></Projects>
        <div id="about"></div>
        <About></About>
        <Contact></Contact>
      </div>
      <RadialGradient size={"900"} top={"-400"} left={"100"} gradient={"gradient-radial-1 fixed"}></RadialGradient>
      <RadialGradient size={"900"} top={"-400"} left={"750"} gradient={"gradient-radial-2 fixed"}></RadialGradient>

      <div className="fixed z-10 flex gap-4 flex-row opacity-60 hover:opacity-100 bottom-8 right-8">
        <SwitchOption
          selectedValue={theme}
          setSelectedValue={setTheme}
          options={[
            <Sun size={15} color="#FFF" key="sun" />,
            <Moon size={15} color="#FFF" key="moon" />,
          ]}
          values={["sun", "moon"]}
        />

        <SwitchOption
          selectedValue={language}
          setSelectedValue={setLanguage}
          options={[
            <p>ENG</p>,
            <p>SPN</p>,
          ]}
          values={["ENG", "SPN"]}
        />
      </div>
      
    </div>

  )
}

export default App