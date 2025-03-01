import React from 'react'
import "./Ser.css"


const Servicios = () => {
  return (
    <div className='containerServicios'>
        <div className='containerTitleServ'>
            <h2>Servicios</h2>
        </div>
        <div className='servicios'>
            <div className='serv1'>
                <h3>Web Design</h3>
                <ul>
                    <li>Creación de interfaces modernas, responsivas y optimizadas</li>
                    <li>Uso de tecnologías como HTML, CSS, JavaScript, React.js y TailwindCSS .</li>
                    <li>Enfoque en experiencia de usuario (UX) y diseño atractivo (UI).</li>
                </ul>
            </div>
            <div className='serv2'>
                <h3>Web FullStack <br></br>(En proceso)</h3>
                <ul>
                    <li>Integración de frontend con backend usando Node.js, Express y SQL.</li>
                    <li>Desarrollo de APIs eficientes y seguras.</li>
                    <li>Creación de sistemas de autenticación y gestión de usuarios.</li>
                </ul>
            </div>
            <div className='serv3'>
                <h3>Software a medida</h3>
                <ul>
                    <li>Creación de plataformas de gestión y automatización.</li>
                    <li>Soluciones a medida para pequeñas empresas y emprendimientos.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Servicios