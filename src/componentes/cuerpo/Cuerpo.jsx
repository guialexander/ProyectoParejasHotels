import React from 'react'
import './cuerpo.css'

import Lista from '../Lista/Lista'

export const Main = ({HotelsList=[], onAddStado}) => {
  
  const handleADD=(event)=>{
    const newForm=true

    
    onAddStado(newForm)

  }
  const onEStado = (Hotel)=>{
    
    onAddStado(Hotel)

  }

  return (
 <>
    
    <div className='main__Tabla'> 
     <div className='Tabla__ProcdutsHoteles'>
        <h2>Hotels</h2>
       <button onClick={handleADD} className='Tabla__ProcdutsHoteles--btnadd'>add</button>
       
       

     
     </div>
   
    <div className='Tabla__ProcdutsHoteles-tabla'>
      <table >
      <thead>
           
            <tr>
                <th><h2> Hotel</h2></th>
                <th><h2> Ciudad</h2></th>
                <th><h2> Phone</h2></th>
                <th><h2> Photo</h2></th>
                <th></th>
            </tr>
            </thead>   
       <tbody>
            
            {HotelsList.map((Hotel)=>(
             <tr>
            <Lista
            key={Hotel.id}
            Hotel ={Hotel}
            onEditStado={onEStado}
            
            /> 
             </tr>
            
             ))}
        </tbody>     
                 
        </table>
        </div>    
  
    </div>  
    

    </>
      )
}
export default Main