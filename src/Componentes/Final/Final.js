import React from 'react'
import DecryptedText from './DecryptedText'
import "./Fin.css"

const Final = () => {
  return (
    <div className='containerFinal'> 
        <div className='infoFinal'>
            <DecryptedText text="Tenes" />
            <DecryptedText text="algun" />
            <DecryptedText text="proyecto" />
            <DecryptedText text="o" />
            <DecryptedText text="diseño" />
            <DecryptedText text="en mente," />
            <DecryptedText text="hablame" />
        </div>
        <div className='formularioo'>

<div class="card1">
  <span class="title">Contacto</span>
  <form class="form">
    <div class="group">
    <input placeholder="‎" type="text" required=""></input>
    <label for="name">Nombre</label>
    </div>
<div class="group">
    <input placeholder="‎" type="email" id="email" name="email" required=""></input>
    <label for="email">Email</label>
    </div>
<div class="group">
    <textarea placeholder="‎" id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">Mensaje</label>
</div>
    <button type="submit">Enviar</button>
  </form>
</div>

        </div>
    </div>
  )
}

export default Final