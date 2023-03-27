import './Sass/style.scss'
import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
//import Background from "./Components/Background/backgound.jsx";
//import Background2 from "./Components/Background/backgound2.jsx";
import Background3 from "./Components/Background/backgound3.jsx";
import Home from './Components/Home/Home.jsx';
import AboutMe from './Components/AboutMe/AboutMe';
//import Proyect from './Components/Proyect/Proyect.jsx'
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Background/> */}
      {/* <Background2/> */}
      <Background3/>

       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<AboutMe/>} />
        {/*<Route path="/proyect" element={<Proyect/>} />*/}
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </div>
  );
}

export default App;
