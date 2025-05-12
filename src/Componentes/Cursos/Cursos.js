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
        <h3 class="tip">Desarrollo Web</h3>
        <p className='second-text'>Html - Css - Js</p>
        <img src='https://comparte-entity-photos.s3.us-east-2.amazonaws.com/39144702-7af9-45a6-8e18-3eb28648fa8a.png' className='imgCur'></img>
    </div>
    <div class="card blue">
        <h3 class="tip">JavaScript</h3>
        <img src='https://comparte-entity-photos.s3.us-east-2.amazonaws.com/39144702-7af9-45a6-8e18-3eb28648fa8a.png' className='imgCur'></img>
    </div>
    <div class="card green">
        <h3 class="tip">React Js</h3>
        <img src='https://comparte-entity-photos.s3.us-east-2.amazonaws.com/39144702-7af9-45a6-8e18-3eb28648fa8a.png' className='imgCur'></img>
    </div>
    <div class="card green">
        <h3 class="tip">Backend</h3>
        <p className='second-text'>Node Js - Express - Mongo - SQLite</p>
        <img src='https://comparte-entity-photos.s3.us-east-2.amazonaws.com/39144702-7af9-45a6-8e18-3eb28648fa8a.png' className='imgCur'></img>
    </div>
    <div class="card green">
        <h3 class="tip">Tec. Sup. Desarrollo de Software</h3>
        <img src='https://clusterriocuarto.com/wp-content/uploads/2023/09/image.png' className='imgCur2'></img>
    </div>
</div>
        </div>
    </div>
  )
}

export default Cursos