import React from 'react'
import "./Proy.css"
import Bull1 from "../Img/Bull.PNG"
import Barber1 from "../Img/barberia2.PNG"
import Dos1 from "../Img/dos2.PNG"
import Gt1 from "../Img/Login.PNG"
import Bull2 from "../Img/Bull1.PNG"
import Bull3 from "../Img/Bull2.PNG"
import Dos2 from "../Img/dos.PNG"
import Dos3 from "../Img/dos3.PNG"
import Barber2 from "../Img/barberia5.PNG"
import Barber3 from "../Img/barberia6.PNG"
import Gt2 from "../Img/Register.PNG"
import Gt3 from "../Img/Gestor.PNG"


const Proyectos = () => {
  return (
    <div className='containerProyectos'>
      <div className='titleProy'>
        <h2>Proyectos</h2>
      </div>
      <div className='proyectos'>
        <div className='bullshoes'>

            <div class="cards">
              <div class="card red">
                <img src={Bull1} className='imgBull1'></img>
              </div>
              <div class="card blue">
                <img src={Bull2} className='imgBull1'></img>
              </div>
              <div class="card green">
                <img src={Bull3} className='imgBull1'></img>
              </div>
            </div>

          <div className='infoBull'>
            <h3>BullShoes</h3>
            <p>BullShoes es una plataforma de comercio electrónico diseñada para ofrecer una experiencia de compra fluida, intuitiva y moderna. Desarrollada con un enfoque en usabilidad y rendimiento, esta tienda online permite a los usuarios explorar un catálogo de zapatillas, visualizar descripciones detalladas y gestionar sus compras de manera eficiente.</p>
            <div className='containerTec'> 
              <p>Tecnologias utilizadas:</p>
              <img src='https://images.icon-icons.com/2699/PNG/512/reactjs_logo_icon_170805.png' className='tec'></img>
              <img src='https://embersoftware.com.au/wp-content/uploads/2020/07/firebase-logo.png' className='tec'></img>
            </div>
          </div>
        </div>
        <div className='barberia'>
          <div className='infoBarber'>
            <h3>La Barberia</h3>
            <p>La Barbería es un sitio web moderno y elegante diseñado para reflejar la esencia y el estilo de una barbería profesional. Su estructura intuitiva y su diseño sofisticado ofrecen a los clientes una experiencia inmersiva y funcional.</p>
            <p>Objetivo: Mostrar la trayectoria de La Barberia en los pasos de los años, dando ese estilo caracteristico de la epoca.</p>  
              <div className='containerTec'> 
                <p>Tecnologias utilizadas:</p>
                <img src='https://images.icon-icons.com/2699/PNG/512/reactjs_logo_icon_170805.png' className='tec'></img>
              </div>
          </div>
          <div class="cards">
              <div class="card red">
                <img src={Barber1} className='imgBull1'></img>
              </div>
              <div class="card blue">
                <img src={Barber2} className='imgBull1'></img>
              </div>
              <div class="card green">
                <img src={Barber3} className='imgBull1'></img>
              </div>
            </div>




        </div>
        <div className='dosbanderas'>
          
        <div class="cards">
              <div class="card red">
                <img src={Dos1} className='imgBull1'></img>
              </div>
              <div class="card blue">
                <img src={Dos2} className='imgBull1'></img>
              </div>
              <div class="card green">
                <img src={Dos3} className='imgBull1'></img>
              </div>
            </div>

          <div className='infoDosBan'>
            <h3>Dos Banderas</h3>
            <p>Dos Banderas es una plataforma web diseñada para llevar la esencia y calidad artesanal de una panadería tradicional a un entorno digital moderno. Con una interfaz elegante y organizada, la web ofrece a los clientes una experiencia de compra intuitiva y eficiente.</p>
             <p>Objetivo: Tratar de contrarrestar las grandes esperas en los pedidos por parte de apliaciones de pedidos, mostrando de manera profesional otra forma de comprar.</p> 
              <div className='containerTec'> 
              <p>Tecnologias utilizadas:</p>
              <img src='https://images.icon-icons.com/2699/PNG/512/reactjs_logo_icon_170805.png' className='tec'></img>
              <img src='https://embersoftware.com.au/wp-content/uploads/2020/07/firebase-logo.png' className='tec'></img>
            </div>
          </div>
        </div>
        <div className='gtask'>
          <div className='infoGT'> 
            <h3>GTask</h3>
            <p>Aplicación web diseñada para optimizar la gestión de tareas personales a través de un sistema seguro y eficiente. La plataforma permite a los usuarios registrar, visualizar y administrar sus propias tareas de manera organizada, garantizando una experiencia fluida e intuitiva.</p>
             <p>Objetivo: Crear un organizador de tareas diarias, en el que cada usuario pueda gestionar sus tareas de forma idependiente, con un diseño atractivo.</p> 
              <div className='containerTec'> 
              <p>Tecnologias utilizadas:</p>
              <img src='https://images.icon-icons.com/2699/PNG/512/reactjs_logo_icon_170805.png' className='tec'></img>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png' className='tec'></img>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png' className='tec'></img>

            </div>
          </div>
          
          <div class="cards">
              <div class="card red">
                <img src={Gt1} className='imgBull1'></img>
              </div>
              <div class="card blue">
                <img src={Gt2} className='imgBull1'></img>
              </div>
              <div class="card green">
                <img src={Gt3} className='imgBull1'></img>
              </div>
            </div>

        </div>
      </div>
      
    </div>
  )
}

export default Proyectos