import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import Projects from "./pages/Project";

const App = () => {
  return ( 
    <BrowserRouter>
    <Navbar />
    <Home />
    <About />
    <Projects />
    </BrowserRouter>
   );
}
 
export default App;
