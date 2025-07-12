import Home from "./sections/Home"
import Header from "./sections/Header";
import RadialGradient from "./components/RadialGradient";
import Moon from "./assets/icons/Moon";
import Sun from "./assets/icons/Sun";
import SwitchOption from "./components/SwitchOption";
import { useState } from "react";

function App() {

  type Theme = "moon" | "sun";
  type Language = "ENG" | "SPN";
  const [theme, setTheme] = useState<Theme>("moon");
  const [language, setLanguage] = useState<Language>("SPN");

  return (
    <div 
    className="h-screen w-full font-[nunito] text-DARK-text flex justify-center flex-col"
    style={{
      backgroundColor: '#151617',
      background: `
        linear-gradient(80deg, 
          rgba(16, 14, 19, 0.2) 0%, 
          rgba(170, 159, 207, 0.04) 50%, 
          rgba(19, 18, 26, 0.2) 100%
        ),
        #151617
      `,
    }}
    >
      <div className="w-full h-full z-10">
        <Header></Header>
        <Home></Home>
      </div>
      <RadialGradient size={"900"} top={"-400"} left={"100"} gradiant={"gradient-radial-1"}></RadialGradient>
      <RadialGradient size={"900"} top={"-400"} left={"750"} gradiant={"gradient-radial-2"}></RadialGradient>


      <div className="fixed z-10 flex gap-4 flex-row bottom-8 right-8">
        <SwitchOption
          selectedValue={theme}
          setSelectedValue={setTheme}
          options={[
            <Moon size={15} color="#FFF" key="moon" />,
            <Sun size={15} color="#FFF" key="sun" />,
          ]}
          values={["moon", "sun"]}
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