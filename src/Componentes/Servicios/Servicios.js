import React from 'react'
import "./Ser.css"


const Servicios = () => {
  return (
    <div className='containerServicios'>
        <div className='containerTitleServ'>
            <h2>Roles que desempeño</h2>
        </div>
        <div className='servicios'>

            <div class="brutalist-card">
            <div class="brutalist-card__header">
                <div class="brutalist-card__icon">

                </div>
                <div class="brutalist-card__alert">DISEÑADOR</div>
            </div>
            <div class="brutalist-card__message">
                <p>
                    Valoro las interfaces limpias, la estructura clara y las experiencias que se sienten naturales para el usuario.
                </p>
            <ul>
                    <li>UX, UI</li>
                    <li>Aplicaciones Web</li>
                    <li>interfaces responsivas</li>
                </ul>
                <p>Herramientas:
Figma, Canva, lápiz y papel, goconqr prototipado rápido.</p>
            </div>
            </div>




            <div class="brutalist-card">
            <div class="brutalist-card__header">
                <div class="brutalist-card__icon">

                </div>
                <div class="brutalist-card__alert">FULLSTACK DEVELOPER</div>
            </div>
            <div class="brutalist-card__message">
                <p>
                    Disfruto transformar ideas en productos reales, desde el diseño hasta el desarrollo de sistemas .
                </p>
            <ul>
                    <li>Integración de frontend con backend usando Node.js, Express y SQL.</li>
                    <li>Desarrollo de APIs eficientes y seguras.</li>
                    <li>Creación de sistemas de autenticación y gestión de usuarios.</li>
                </ul>
                <p>
                    Herramientas de desarrollo: Git, GitHub, VS Code, TailwindCSS(en proceso).
                </p>
            </div>
            </div>




            <div class="brutalist-card">
            <div class="brutalist-card__header">
                <div class="brutalist-card__icon">

                </div>
                <div class="brutalist-card__alert">LIDER DE CODELAUNCH</div>
            </div>
            <div class="brutalist-card__message">
                <p>
                    Soy fundador y líder de CodeLaunch, una startup que conecta programadores de todo el mundo con proyectos reales para que ganen experiencia, mejoren sus habilidades y trabajen en equipo.
                </p>
                <h4 className='code'>Que hacemos en CodeLaunch:</h4>
            <ul>
                <li>Alojamos proyectos reales para desarrolladores en formación.</li>
                <li>Creamos equipos internacionales de programadores.</li>
                <li>Promovemos la colaboración, las buenas prácticas y el crecimiento profesional.</li>
            </ul>
            <h4 className='code'>Impacto obtenido:</h4>
             <ul>
                <li>Crecimiento constante de la comunidad.</li>
                <li>Proyectos completados por equipos globales.</li>
                <li>Primeros pasos laborales para nuevos desarrolladores.</li>
            </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Servicios