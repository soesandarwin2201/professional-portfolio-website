import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Experience from "./pages/Experience";

const App = () => {
  return ( 
    <BrowserRouter>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Experience />
    </BrowserRouter>
   );
}
 
export default App;
