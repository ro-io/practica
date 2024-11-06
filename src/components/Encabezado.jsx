import React from 'react'
import logo from "../assets/Jira.svg"
import "./Encabezado.css"

const Encabezado = ({atributo}) => {
  return (
    <div className={`encabezado ${atributo}`}>
        <div>
            <span className='uno'>1</span>
            <span>Agenda/Topic</span>

        </div>
        <div className='numero'>
            <span className='saas'>SAAS-0000</span>
            <img src={logo} alt="" />
            
        </div>
    </div>
  )
}

export default Encabezado