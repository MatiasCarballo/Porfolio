import React from 'react'
import AboutMe from '../AboutMe/AboutMe'


const Home = () => {
  return (
    <div className='ContainerHome'>
      <div className='Home'>
        <div className='CirculoHome'></div>
        <div className='HolaSoy'>
          <h5>Hola soy...</h5>
        </div>
        <dir className='NameHome'>
            <h1 className='Matias'>Matias</h1>
            <h1 className='Carballo'>Carballo</h1>
        </dir>
        <div className='FullStack'>
            <h5>Diseño y Desarrollo </h5><h5> Web FullStack</h5>
        </div>
      </div>
        <AboutMe/>
    </div>
  )
}

export default Home