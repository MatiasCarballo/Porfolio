import './Sass/style.scss'
//import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from './Components/Home/Home.jsx'
import Proyect from './Components/Proyect/Proyect.jsx'


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Routes> */}
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/" element={<Proyect/>} /> */}
        
      {/* </Routes> */}
      <Home/>
      <Proyect/>
    </div>
  );
}

export default App;
