import React from 'react'
import { useState } from 'react';
import './FormUpdate.css'

export const FormUpdate = ({Hotel}) => {

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
    console.log(Hotel.id)
    const url = `http://localhost:3001/api/hotels/${Hotel.id}`
    const config = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(HotelsList),
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()
    } catch (error) {
      console.log(error)
    }


    
     // Clear form
     setHotelsList({})
  };

  return (
    <>
    
    
     <form className="main__contact-formUP" onSubmit={handleSubmit} >
     <h1 className='edit--hotel' >Edit</h1>
   
        <div>
          <div className="contact-formUP__column">
            
            <label className="contact-formUP__label">
              Name Hotel:
            </label>
            <input
              type="text"
              name="name"
              placeholder= {Hotel.name}
              className="contact-formUP__input"
              onChange={handleChange}
             required
            />
          </div>
          <div className="contact-formUP__column">
            <label className="contact-formUP__label">
              city:
            </label>
            <input
              type="text"
              name="city"
              placeholder={Hotel.city}
              className="contact-formUP__input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-formUP__column">
            <label className="contact-formUP__label">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              placeholder={Hotel.phone}
              className="contact-formUP__input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-formUP__column">
            <label className="contact-form__label">
             Photo:
            </label>
            <input
              type="url"
              name="photo"
              className="contact-formUP__input"
              placeholder={Hotel.photo}
              onChange={handleChange}
              
              
              />
          </div>
        </div>

        <button type="submit"  className="contact-formUP__button">
          Edit
        </button>
      </form>
 
    </>
  )
}
export default FormUpdate;