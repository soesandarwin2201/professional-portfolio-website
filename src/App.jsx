import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return ( 
    <BrowserRouter>
    <Navbar />
    <Home />
    </BrowserRouter>
   );
}
 
export default App;
