import './Sass/style.scss'
import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from './Components/Home/Home.jsx'
import Proyect from './Components/Proyect/Proyect.jsx'
import Contact from './Components/Contact/Contact';
import AboutMe from './Components/AboutMe/AboutMe';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/proyect" element={<Proyect/>} />
        
      </Routes>
    </div>
  );
}

export default App;
