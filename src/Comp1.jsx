import React, { useState } from 'react';
import './app.css'

const Comp1 = () => {

  const [numero, setNumero] = useState('');

  const cambiar = () => {
    const horas = Math.floor(numero / 3600);
    const segundos = numero % 3600;
    const minutos = Math.floor(segundos / 60);
    const segundosFin = segundos % 60;

    console.log(horas + ' hora,' + minutos + ' minutos,' + segundosFin + 'segundos');
    setNumero('');
  }

  return <>
      <h1>Convertir segundos a horas, minutos y segundos</h1>
      <input type='number' placeholder='Ingrese los segundos' value={numero} onChange={(e) => setNumero(e.target.value) } />
      <button onClick={cambiar}>Cambiar</button>
    </>
}

export default Comp1;