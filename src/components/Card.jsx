import React from 'react'
import Encabezado from './Encabezado'
import Fecha from './Fecha'
import "./Card.css"

const Card = ({atributo}) => {
  return (
    <div className='carta'>
        <Encabezado atributo={atributo}/>
        <p className='medio'>Description of what is done here</p>
        <Fecha/>
        <button>Ingresar</button>
    </div>
  )
}

export default Card