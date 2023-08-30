import React, { useState } from 'react'
import './app.css'

const Comp3 = () => {
  const [nombre, setNombre] = useState('')
  const [hora, setHora] = useState('')
  const [saludos, setSaludos] = useState([])

  const generarSaludo = () => {
    if (hora < 0 || hora > 23) {
      console.log('Error: Por favor, ingrese una hora válida (0-23)')
      return
    }

    let nuevoSaludo = ''

    if (hora >= 0 && hora <= 11) {
      nuevoSaludo = 'Buenos días, ' + nombre
    } else if (hora >= 12 && hora <= 18) {
      nuevoSaludo = 'Buenas tardes, ' + nombre
    } else {
      nuevoSaludo = 'Buenas noches, ' + nombre
    }

    setSaludos([...saludos, nuevoSaludo])
    setNombre('')
    setHora('')
  }

  return <>
      <h1>Saludo según la Hora</h1>
      <input type='text' placeholder='Ingrese su nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type='number' placeholder='Ingrese la hora (0-23)' value={hora} onChange={(e) => setHora(e.target.value)} />
      <button onClick={generarSaludo}>Obtener Saludo</button>
      <ul>
        {saludos.map((saludo, index) => (
          <li key={index}>{saludo}</li>
        ))}
      </ul>
    </>
}

export default Comp3;