import React from 'react'
import { useState } from 'react'
import {FiMenu} from 'react-icons/fi' 

const NavBar = () => {
  const [buttom, setButtom] = useState(false)
  const [scroll, setScroll] = useState(document.documentElement.scrollTop)


  const menu = () =>{
    setButtom(!buttom)
    console.log(buttom);
  }

  window.addEventListener("scroll",(e)=>{
    //let holas = window.pageYOffset
    let holas = document.documentElement.scrollTop
    setScroll(holas)
  })

  // const hola =(e)=>{

  //   setScroll(document.documentElement.scroll)
  //   console.log(scroll);
  // }

  //let kk = document.documentElement.scrollTop

  if(scroll > 100){
    //setScroll(document.documentElement.scrollTop)
    console.log('hola que hace?')
  }
  if(scroll < 100){
    //setScroll(document.documentElement.scrollTop)
    console.log('Nose que hace!');
  }

  const prueba=()=>{
    window.scrollTo({
      behavior:"smooth",
      top:670,
    })
  }


  return (
    <div className='NavBar'>
        <div className='NavBarContainer'>
          <div className='Bar'>
            <div className='Navs'>
              <div className='Logo'>
                <h1>Logo</h1>
              </div>
              <div className='Icons'>
                <div className='Inicio'><h3>Inicio</h3></div>
                <div className='About'><h3>About</h3></div>
                <div className='Proyect' onClick={()=>{prueba()}}><h3>Proyect</h3></div>
              </div>
              <div className='IconsMovile' onClick={()=>{menu()}}>
                <div className='Menu' >
                  {
                    buttom ? (<>
                      <FiMenu/>
                      <div className='MenuMovil'>
                          <h3 className='InicioM'>Inicio</h3>
                          <h3 className='AboutM'>About</h3>
                          <h3 className='ProyectM'>Proyect</h3>
                      </div>
                    </>) : 
                    (<FiMenu/>)
                  }
                  
                </div>
              </div>
            </div>
            
          </div>
        </div> 
    </div>

  )
}

export default NavBar