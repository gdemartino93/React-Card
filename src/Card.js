import React from 'react'

const Card = ({nome, prezzo, img, soldBy,children} ) => {
  return (
    <section className='Card'>
        <div>{children}</div>
        <img src={img} alt={nome} />
        <h3>{nome}</h3>
        <hr></hr>
        <span className='price'> {prezzo} euro</span>
        <span className='soldBy'> Venduto da {soldBy}</span>
        <button>Compra ora per {prezzo} euro</button>
    </section>
  )
}

export default Card