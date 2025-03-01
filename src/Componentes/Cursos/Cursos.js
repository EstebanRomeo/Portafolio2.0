import React from 'react'
import "./Cur.css"

const Cursos = () => {
  return (
    <div className='containerCursos'>
        <div className='titleCursos'>
            <h2>Carreras & cursos</h2>
        </div>
        <div className='cursos'>
        <div class="cards">
    <div class="card red">
        <p class="tip">Desarrollo Web</p>
        <img src='https://comparte-entity-photos.s3.us-east-2.amazonaws.com/39144702-7af9-45a6-8e18-3eb28648fa8a.png' className='imgCur'></img>
    </div>
    <div class="card blue">
        <p class="tip">JavaScript</p>
        <img src='https://comparte-entity-photos.s3.us-east-2.amazonaws.com/39144702-7af9-45a6-8e18-3eb28648fa8a.png' className='imgCur'></img>
    </div>
    <div class="card green">
        <p class="tip">React Js</p>
        <img src='https://comparte-entity-photos.s3.us-east-2.amazonaws.com/39144702-7af9-45a6-8e18-3eb28648fa8a.png' className='imgCur'></img>
    </div>
    <div class="card green">
        <p class="tip">Backend</p>
        <img src='https://comparte-entity-photos.s3.us-east-2.amazonaws.com/39144702-7af9-45a6-8e18-3eb28648fa8a.png' className='imgCur'></img>
    </div>
</div>
        </div>
    </div>
  )
}

export default Cursos