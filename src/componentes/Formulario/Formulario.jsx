import React, { useState } from 'react'

import './Formulario.css'

export const Formulario = ({ onAddHotel }) => {

  const [ HotelsList, setHotelsList] = useState({});

  const handleChange=(event)=>{

    const {name,value}=event.target;
    setHotelsList(
      {
        ...HotelsList,
        [name]: value ,

      })   
  };

  const handleSubmit = async(event) => {

    event.preventDefault();

    const newHotelsList={
      ...HotelsList,
      id:Date.now(),
    }
    console.log(newHotelsList)
    
    onAddHotel(newHotelsList)//agregar nuevo dato  hay error llama la función 

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(HotelsList),
      }
      const url = 'http://localhost:3001/api/hotels'

      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }

     // Clear form
     setHotelsList({})
  };

  return (
    <>
        <h1 className='Form__ADD'>ADD</h1>
   
      <form className="main__contact-form" onSubmit={handleSubmit} >

        <div>
        <div className='contact-form__title'><h3>Agregar Hotel</h3></div>

          <div className="contact-form__column">
            <label className="contact-form__label">
              Name Hotel:
            </label>
            <input
              type="text"
              name="name"
              placeholder='Ingresa el nombre del Hotel'
              className="contact-form__input"
              onChange={handleChange}
             required
            />
          </div>
          <div className="contact-form__column">
            <label className="contact-form__label">
              city:
            </label>
            <input
              type="text"
              name="city"
              placeholder='Enter city'
              className="contact-form__input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form__column">
            <label className="contact-form__label">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              placeholder='Enter phone'
              placeholder='Ingresa el telefono'
              className="contact-form__input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form__column">
            <label className="contact-form__label">
             Photo:
            </label>
            <input
              type="url"
              name="photo"
              className="contact-form__input"
             placeholder='https://picsum.photos/200'
              onChange={handleChange}
              placeholder='Link imagen del Hotel'

              />
          </div>
        </div>

        <button type="submit"  className="contact-form__button">
          Agregar
        </button>
      </form>
     
    </>
  )
}
export default Formulario;