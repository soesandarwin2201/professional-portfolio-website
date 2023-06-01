import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
  return ( 
    <BrowserRouter>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Experience />
    <Contact />
    </BrowserRouter>
   );
}
 
export default App;
