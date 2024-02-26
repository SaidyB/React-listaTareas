import React, { useState } from 'react'
import Boton from './Boton'

const Lista = () => {

    const [hacer, setHacer]= useState([])



    const listaTareas=['Hacer la cena','Hacer tarea de ingles','Limpiar la cocina','Hacer cafe']


  return (
    <div>
        {listaTareas.map((item,index)=><Boton key={index} setHacer={setHacer} tarea={item}/>)}
        {hacer.map((item, index) => <li key={index}>{item}</li>)}
    
    </div>
    
  )
}

export default Lista