import React, { useState } from 'react'
import './app.css'

const Comp3 = () => {
  const [nombre, setNombre] = useState('')
  const [hora, setHora] = useState('')

    const saludo = () => {

    if (hora<0){
        console.log('Error tiene q poner una hora mayor o igual a 0')
        setNombre('')
        setHora('')
    }else if(hora >= 0 && hora <= 11) {
        console.log('Buenos días, ' + nombre)
        setNombre('')
        setHora('')
    } else if (hora >= 12 && hora <= 18) {
        console.log('Buenas tardes, ' + nombre)
        setNombre('')
        setHora('')
    } else if(hora >= 19 && hora <= 23) {
        console.log('Buenas noches, ' + nombre)
        setNombre('')
        setHora('')
    }else{
        console.log('Error tiene q poner una hora menor o igual a 23')
        setNombre('')
        setHora('')
    }
  }

    return <>
        <h1>Saludo según la Hora</h1>
        <input type='text' placeholder='Ingrese su nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type='number' placeholder='Ingrese la hora (0-23)' value={hora} onChange={(e) => setHora(e.target.value)} />
        <button onClick={saludo}>Obtener Saludo</button>
    </>
}

export default Comp3;