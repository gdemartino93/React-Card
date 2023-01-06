import React from 'react'

const Card = ({nome, prezzo, img, soldBy,prezzoAttuale,children,limited} ) => {

  const showPrice = () =>{
    console.log(prezzo)
  };

  return (
    
    <section className='Card'>
        <div>{children}</div>
        <img src={img} alt={nome} />
        <h3>{nome}</h3>
        <hr></hr>
        <span className='price'> {prezzo} euro</span>
        <span className='soldBy'> Venduto da {soldBy}</span>
        <button onClick={()=> alert(`nome: ${nome}`)} >Compra ora per {prezzo} euro</button>
        <button onClick={()=> showPrice()} >Controlla il prezzo</button>
        <span>Prezzo attuale:</span>
        <span>{prezzoAttuale}</span>
        <p>{limited}</p>
   
    </section>
  )
}

export default Card
