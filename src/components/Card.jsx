import React from 'react'
import Encabezado from './Encabezado'
import Fecha from './Fecha'
import "./Card.css"

const Card = (props) => {
  let gColor = props.atributo;
  return (
    <div className='carta'>
        <Encabezado atributo={gColor}/>
        <p className='medio'>Description of what is done here</p>
        <Fecha/>
    </div>
  )
}

export default Card