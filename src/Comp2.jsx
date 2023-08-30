import React, { useState } from 'react'
import './app.css'

const Comp2 = () => {

  const [Llamada, setLlamada] = useState('')

  const costo = () => {
    let costoLlamada = 100;
    if (Llamada > 3) {
      const minutosExtras = Llamada - 3
      const costoExtras = minutosExtras * 50
      costoLlamada += costoExtras;
    }

    console.log('El costo es: ' + costoLlamada)
    setLlamada('')
  }

  return <>
        <h1>Costo de la llamada</h1>
        <input type='number' placeholder='Duración de la llamada' value={Llamada} onChange={(e) => setLlamada(e.target.value)} />
        <button onClick={costo}>Calcular</button>
    </>
}

export default Comp2;