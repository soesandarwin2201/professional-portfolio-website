import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";

const App = () => {
  return ( 
    <BrowserRouter>
    <Navbar />
    <Home />
    <About />
    </BrowserRouter>
   );
}
 
export default App;
