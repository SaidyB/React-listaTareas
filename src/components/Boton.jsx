import React from 'react'
import BotonStyle from '../Styles/Boton.module.css'

const Boton = ({tarea, setHacer}) => {

    const addHacer= () =>{
        setHacer((prev) => [...prev, tarea])
    }




  return (
    <button onClick={addHacer} className={BotonStyle.boton}>{tarea}</button>
  )
}

export default Boton