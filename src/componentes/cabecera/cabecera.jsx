import React from 'react'
import './cabecera.css'

export const cabecera = () => {
  return (
    <>
    <header>
    <div className="contenedor__titulo">
        <h2>My Hotel</h2>
        <img className='contenedor__titulo--imgen' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrveFAJQwHyId-9qrFlq_i4wZgaF0Uawh5A&usqp=CAU" alt='image'></img>
        <h4>Get Started!</h4>
    </div>
    </header>    

    
    </>
    
  )
}

export default cabecera;
