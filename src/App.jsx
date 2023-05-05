import { useEffect, useReducer, useState } from 'react'
import Cabecera from './componentes/cabecera/cabecera'
import Main from './componentes/Main/main'
import Formulario from './componentes/Formulario/Formulario';
import Footer1 from './componentes/Footer/Footer1'
import FormUpdate from './componentes/FormUpdate/FormUpdate';
import { hotels as HotelsList2 } from './assets/data';

import './App.css'


function App() {
  const [HotelsList, setHotelsList] = useState(HotelsList2);
  const[Hotel,SetHotel]=useState({})
  const [Form,setForm]=useState(true);
  const handleAddHotel=(newHotelsList)=>{
 
  setHotelsList(
    [
      ...HotelsList,
      newHotelsList
    ]
  )
}

  const handleUpdateHotel=(newHotelsList)=>{
 
    setHotelsList(
      [
        ...HotelsList,
        newHotelsList
      ]
    )
    
  
   }

 

const onaddstado =(Hotel)=>{
   SetHotel(Hotel)
     setForm(!Form)
}
  useEffect(()=>{
    const fetchHotels=async()=>{
      const url=`${import.meta.env.VITE_BASE_URL}api/hotels`

      try {
        const response = await fetch(url)
        const data = await response.json()
        setHotelsList(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchHotels()
  },[Hotel])

  return (
    <>
    <Cabecera/>
   <main>    
    <Main
    HotelsList= {HotelsList} 
    onAddStado={onaddstado} />
    {
     
        Form ?
         <Formulario onAddHotel={handleAddHotel}/>
         :
         <FormUpdate 
         Hotel={Hotel}
         />

    }
    </main>
    <Footer1/>
    
   
    
    
      </>
  )
}

export default App
