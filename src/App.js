import './Sass/style.scss'
//import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from './Components/Home/Home.jsx'
import Proyect from './Components/Proyect/Proyect.jsx'
import Contact from './Components/Contact/Contact';
import AboutMe from './Components/AboutMe/AboutMe';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Routes> */}
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/" element={<Proyect/>} /> */}
        
      {/* </Routes> */}
      <div id='Home'>
        <Home />
      </div>
      <div id='AboutMe'>
        <AboutMe/>
      </div>
      <div id='Proyect'>
        <Proyect />
      </div>
      <div id='Contact'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
