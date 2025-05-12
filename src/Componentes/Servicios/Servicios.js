import React from 'react'
import "./Ser.css"


const Servicios = () => {
  return (
    <div className='containerServicios'>
        <div className='containerTitleServ'>
            <h2>Servicios</h2>
        </div>
        <div className='servicios'>

            <div class="brutalist-card">
            <div class="brutalist-card__header">
                <div class="brutalist-card__icon">

                </div>
                <div class="brutalist-card__alert">Web Design</div>
            </div>
            <div class="brutalist-card__message">
            <ul>
                    <li>Creación de interfaces modernas, responsivas y optimizadas</li>
                    <li>Uso de tecnologías como HTML, CSS, JavaScript, React.js y TailwindCSS .</li>
                    <li>Enfoque en experiencia de usuario (UX) y diseño atractivo (UI).</li>
                </ul>
            </div>
            </div>




            <div class="brutalist-card">
            <div class="brutalist-card__header">
                <div class="brutalist-card__icon">

                </div>
                <div class="brutalist-card__alert">Web FullStack</div>
            </div>
            <div class="brutalist-card__message">
            <ul>
                    <li>Integración de frontend con backend usando Node.js, Express y SQL.</li>
                    <li>Desarrollo de APIs eficientes y seguras.</li>
                    <li>Creación de sistemas de autenticación y gestión de usuarios.</li>
                </ul>
            </div>
            </div>




            <div class="brutalist-card">
            <div class="brutalist-card__header">
                <div class="brutalist-card__icon">

                </div>
                <div class="brutalist-card__alert">Software a medida</div>
            </div>
            <div class="brutalist-card__message">
            <ul>
                    <li>Creación de plataformas de gestión y automatización.</li>
                    <li>Soluciones a medida para pequeñas empresas y emprendimientos.</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Servicios