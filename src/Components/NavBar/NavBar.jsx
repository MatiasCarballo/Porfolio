import React from 'react'
import { useState } from 'react'
import {FiMenu} from 'react-icons/fi' 
import {BiHome, BiUser, BiTerminal, BiEnvelope} from 'react-icons/bi'


const NavBar = () => {
  const [buttom, setButtom] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [nav, setNav] = useState(false)

//
//window.pageYOffset
//
  const menu = () =>{
    setButtom(!buttom)
    console.log(buttom);
  }

  window.addEventListener("scroll",(e)=>{
    setScroll(document.documentElement.scrollTop)
  })


  if(scroll > 130 && nav){
    setNav(false)
    console.log('entre en la primera');
  }
  else if(scroll < 130 && !nav){
    setNav(true)
    console.log('enter en la segunada');
  }


  return (
    <div className='NavBar'>
      { nav ? (<div className='NavBarContainer'>
          <div className='Bar'>
            <div className='Navs'>
              <div className='Logo'>
                <h1>Logo</h1>
              </div>
              <div className='Icons'>
                <div className='Inicio'><h3><a href='#Home' className='direction'>Inicio</a></h3></div>
                <div className='About'><h3><a href='#AboutMe' className='direction'>Sobre Mi</a></h3></div>
                <div className='Proyect'><h3><a href='#Proyect' className='direction'>Proyectos</a></h3></div>
                <div className='Contact'><h3><a href='#Contact' className='direction'>Contacto</a></h3></div>
              </div>
              <div className='IconsMovile' onClick={()=>{menu()}}>
                <div className='Menu' >
                  {
                    buttom ? (<>
                      <FiMenu/>
                      <div className='MenuMovil'>
                          <h3 className='InicioM'><a href='#Home' className='direction'>Inicio</a></h3>
                          <h3 className='AboutM'><a href='#AboutMe' className='direction'>Sobre Mi</a></h3>
                          <h3 className='ProyectM'><a href='#Proyect' className='direction'>Proyecpt</a></h3>
                          <h3 className='ProyectM'><a href='#Contact' className='direction'>Contacto</a></h3>
                      </div>
                    </>) : 
                    (<FiMenu/>)
                  }
                  
                </div>
              </div>
            </div>
            
          </div>
        </div> )
         : 
        (<div className='NavBarContainerN'>
         
            <div className='IconsN' ><a href='#Home' className='direction'><BiHome className='IconN'/><div className='IconN1'>Home</div></a></div>
            <div className='IconsN' ><a href='#AboutMe' className='direction'><BiUser className='IconN'/><div className='IconN1'>Sobre Mi</div></a></div>
            <div className='IconsN' ><a href='#Proyect' className='direction'><BiTerminal className='IconN'/><div className='IconN1'>Proyectos</div></a></div>
            <div className='IconsN' ><a href='#Contact' className='direction'><BiEnvelope className='IconN'/><div className='IconN1'>Contacto</div></a></div>
          
          
        </div>)
//, , , 
      }
        
    </div>

  )
}

export default NavBar