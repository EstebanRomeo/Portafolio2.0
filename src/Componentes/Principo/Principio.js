import React from 'react'
import BlurText from "./BlurText";
import io from "../Img/yo.png"
import "./Prin.css"
import FlowingMenu from '../FlowingMenu/FlowingMenu'


const demoItems = [
  { link: '#containerAcerca', text: 'Acerca de Mí' },
  { link: '#servicios', text: 'Servicios' },
  { link: '#containerCursos', text: 'Cursos & carreras' },
  { link: '#proyectos', text: 'Proyectos' }
];



const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

<BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>

const Principio = () => {
  return (
    <div className='containerPrincipio'>
        <div className='containerNav'>
        <div style={{ height: '300px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
        </div>
        <div className='containerInfo'>
            <div className='textP'>
            <BlurText
              text="Esteban Romeo"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text0"
            />
            <BlurText
              text="FrontEnd Developer"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text1"
            />
                        <BlurText
              text="En camino a FullStack"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text2"
            />
            </div>
            <div className='imgP'>
              <img src={io} className='imgP'></img>
            </div>
        </div>
    </div>
  )
}

export default Principio