
import React, { useEffect, useRef, useState } from 'react'


   // function rain(){
   //     let amount = 50;
   //     let body = document.querySelector('body');
   //     let i = 0;
//
   //     while(i < amount){
   //         let drop = document.createElement('i');
//
   //         let size = Math.random() * 5;
   //         let posX = Math.floor(Math.random() * window.innerWidth);
   //         let delay = Math.random() * -20;
   //         let duration = Math.random() * 5;
//
   //         drop.style.width = 0.2 + size + 'px';
   //         drop.style.left = posX + 'px';
   //         drop.style.animationDelay = delay + 's';
   //         drop.style.animationDuration = 1 + duration + 's';
   //         body.appendChild(drop);
   //         i++;
   //     }
   // }
//
   // rain()
//

const Backgound3 = () =>{
    const containerRef = useRef(null);

    const [ancho, setAncho] = useState(window.innerWidth);


    useEffect(() => {
      let amount = 200;
      let i = 0;
  
      while(i < amount){
        let drop = document.createElement('i');
  
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * ancho);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
  
        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';
        containerRef.current.appendChild(drop);
        i++;
      }
      const currentContainerRef = containerRef.current;

      // Agregamos el listener de evento al objeto window
      window.addEventListener('resize', handleResize);
  
      // Definimos la función callback para actualizar el ancho del componente
      function handleResize() {
        setAncho(window.innerWidth);
      }
  
      // Limpiamos el listener de evento al desmontar el componente
      return () => {
        currentContainerRef.querySelectorAll('i').forEach(drop => drop.remove());
        window.removeEventListener('resize', handleResize);
      };
    }, [ancho]);
  
    return (
      <div className='containerBackground3' ref={containerRef}></div>
    );
  }

export default Backgound3