import React from 'react'
import CardStyles from '../Styles/Card.module.css'

const Card = (props) => {
  return (
    <>
      <h1>Lista de tareas</h1>
      <div className={CardStyles.cardContainer}>{props.children}</div>
      
    </>
  )
}

export default Card