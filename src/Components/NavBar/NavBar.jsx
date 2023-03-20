import React, {useState} from 'react'
import {BiHome, BiSave, BiWindowAlt, BiMessageDetail} from 'react-icons/bi'

const NavBar = () => {
    //se podria ver la direccion url para comparar y ver la cual esta active
    const [active, setActive] = useState('home')

    const ItemActivo = (page)=>{
        setActive(page)
    }

  return (//******************* */
    <div className='ContainerNavigation'>
        <div className='Navigation'>
            <div className='ContainerLogo'>
            <div className='LogoNavBar'></div>
          <h4 className='NameNavBar'>Matias Carballo</h4>
            </div>
            <ul>
                <li className={`list ${active === 'home' ? 'active' : ''}`} onClick={()=>{ItemActivo('home')}}>
                    <a href="#home">
                        <span className='icon'><BiHome/></span>
                        <span className='text'>Home</span>
                    </a>
                </li>
                <li className={`list ${active === 'home1' ? 'active' : ''}`} onClick={()=>{ItemActivo('home1')}}>
                    <a href="#home">
                        <span className='icon'><BiSave/></span>
                        <span className='text'>Home1</span>
                    </a>
                </li>
                <li className={`list ${active === 'home2' ? 'active' : ''}`} onClick={()=>{ItemActivo('home2')}}>
                    <a href="#home">
                        <span className='icon'><BiWindowAlt/></span>
                        <span className='text'>Home2</span>
                    </a>
                </li>
                <li className={`list ${active === 'home3' ? 'active' : ''}`} onClick={()=>{ItemActivo('home3')}}>
                    <a href="#home">
                        <span className='icon'><BiMessageDetail/></span>
                        <span className='text'>Home3</span>
                    </a>
                </li>
                <div className='indicator'></div>
            </ul>
        </div>
    </div>
  )
}

export default NavBar