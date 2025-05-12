import React from 'react'
import DecryptedText from './DecryptedText'
import "./Fin.css"
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

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
          <div className="contacto-datos">
            
    <p><FaEnvelope style={{ marginRight: '8px' }} color="white" /><a href="mailto:estebannicolasromeo@gmail.com">estebannicolasromeo@gmail.com</a></p>
    <p><FaPhoneAlt style={{ marginRight: '8px' }} color="white"/><a href="tel:+5491123456789">+54 9 3584906829</a></p>
  </div>
        </div>
    </div>
  )
}

export default Final