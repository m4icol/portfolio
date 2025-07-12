import Home from "./sections/Home"
import Header from "./sections/Header";
import RadialGradient from "./components/RadialGradient";

function App() {
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

    </div>

  )
}

export default App