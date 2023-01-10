import React from 'react'
import {FiMenu} from 'react-icons/fi' 

const NavBar = () => {
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
                <div className='Proyect'><h3>Proyect</h3></div>
              </div>
              <div className='IconsMovile'>
                <div className='Menu'>
                  <FiMenu/>
                </div>
              </div>
            </div>
            
          </div>
        </div> 
    </div>

  )
}

export default NavBar