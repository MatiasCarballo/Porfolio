import React, {useState} from 'react'
import {BiHome, BiSave, BiWindowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'


const NavBar = () => {
    //se podria ver la direccion url para comparar y ver la cual esta active
    const currentURL = window.location.href
    const lastSegment = currentURL.split('/').pop();
    const [active, setActive] = useState(lastSegment);
    
    const ItemActivo = (page)=>{
        setActive(page)
    }

  return (
    <div className='ContainerNavigation'>
        <div className='Navigation'>
            <div className='ContainerLogo'>
            <div className='LogoNavBar'></div>
          <h4 className='NameNavBar'>Matias Carballo</h4>
            </div>
            <ul>
                <li className={`list ${active === '' ? 'active' : ''}`} onClick={()=>{ItemActivo('')}}>
                    <Link to="/" className='linkNav'>
                        <span className='icon'><BiHome/></span>
                        <span className='text'>Home</span>
                    </Link>
                </li>
                <li className={`list ${active === 'proyect' ? 'active' : ''}`} onClick={()=>{ItemActivo('proyect')}}>
                    <Link to="/proyect" className='linkNav'>
                        <span className='icon'><BiSave/></span>
                        <span className='text'>Home1</span>
                    </Link>
                </li>
                <li className={`list ${active === 'contact' ? 'active' : ''}`} onClick={()=>{ItemActivo('contact')}}>
                    <Link to="/contact" className='linkNav'>
                        <span className='icon'><BiWindowAlt/></span>
                        <span className='text'>Home2</span>
                    </Link>
                </li>

                <div className='indicator'></div>
            </ul>
        </div>
    </div>
  )
}

export default NavBar