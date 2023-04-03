import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    //console.log(e);

    emailjs.sendForm('service_wh5v7ct', 'template_507txel', form.current, 'mpJQCY28iFoN4wFFq')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log('err');
      });
  };



  return (
    <div className='ContainerContact'>
      <form onSubmit={sendEmail} ref={form} className='Contact'>
          <div className='LineContact2'></div>
          <div className='LineContact1'></div>
          <dir className='box'>
              <h2>Contactame</h2>

              <div className='InputBoxContact'>
                <input type="text" required='required' name='name' className='InputName' />
                <span className='NameContact'>Nombre</span>
                <i></i>
              </div>
              <div className='InputBoxContact'> 
                <input type="text" required='required' name='userEmail' className='InputName' />
                <span className='NameContact'>Mail</span>
                <i></i>
              </div>
              <div className='InputBoxContact'>
                {/* <input type="text" required='required' className='InputName' /> */}
                <textarea className='TextName' name="message" placeholder='Mensaje'></textarea>
                {/* <span className='NameTextContact'>Mensaje</span> */}
              </div>
              <div className='InputBoxContact'>
                <input type="submit" value="Enviar" className='ButtomContact'/>
              </div>
          </dir>
      </form> 

    </div>
  )
}

export default Contact