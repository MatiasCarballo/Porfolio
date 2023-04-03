import React from 'react'
import Img from '../../Assets/compu.png'

const AboutMe = () => {
  return (
    <div className='ContainerAbout'>
        <div className='DesignAboutMe'>
          <div className='AboutMe'>
            <div className='Title'>
              <h3>{"< About Me "}</h3>
            </div>
            <div className='ContentAboutMeText'>
              <div className='AboutMeText'>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sint eligendi consequatur dicta nemo ratione tempora similique voluptatibus, in ab doloribus, error voluptate dolorum ipsum unde consequuntur sit ipsa. Commodi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sint eligendi consequatur dicta nemo ratione tempora similique voluptatibus, in ab doloribus, error voluptate dolorum ipsum unde consequuntur sit ipsa. Commodi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sint eligendi consequatur dicta nemo ratione tempora similique voluptatibus, in ab doloribus, error voluptate dolorum ipsum unde consequuntur sit ipsa. Commodi.</h5>
              </div>
              <div className='ContentAboutMeImg'>
                <img className='image' src={Img} alt="" />
              </div>
            </div>
          </div>
      </div>
      <div className='hAboutMe'></div>
    </div>
  )
}

export default AboutMe