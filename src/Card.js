import React from 'react'


const Card = (props) => {
  return (
    <section className='Card'>
        <img src={props.img} alt={props.nome} />
        <h3>{props.nome}</h3>
        <hr></hr>
        <span className='price'> {props.prezzo} euro</span>
        <span className='soldBy'> Venduto da xxxmaster</span>
        <button>Compra ora per {props.prezzo} euro</button>
    </section>
  )
}

export default Card