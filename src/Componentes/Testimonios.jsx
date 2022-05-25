import React from 'react'
import "./Testimonios.css"

const Testimonios = (props) => {
  return (
    <div className='contenedorTestimonios'>
      <img className='imagenTestimonio' src={require (`../Imagenes/${props.imagen}.png`)} alt ={`Imagen de ${props.nombre}`} />
      <div className='contenedorTextosTestimonios'>
        <p className='nombreTestimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='profesionTestimonio'>{props.profesion} en <strong>{props.empresa}</strong></p>
        <p className='textoTestimonio'>{props.testimonio}</p>
      </div>
    </div>
  )
}

export default Testimonios;