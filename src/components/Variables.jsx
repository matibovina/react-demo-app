import React, { useState } from 'react'

const Variables = () => {

  const [texto, setTexto] = useState('Texto desde estado');

  const eventoClick = () => {
    setTexto('Nuevo texto')
  };

  const parrafo = 'Apps React para test';


  return (
    <div>
        <p>{ parrafo }</p>
        {/* <h2>{ texto }</h2>
        <button onClick={ ()=> eventoClick() }>Click Aqui</button> */}
    </div>
  )
}

export default Variables