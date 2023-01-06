import React , {useState} from 'react'

const Card = ({nome, prezzo, img, soldBy,prezzoAttuale,children,limited} ) => {

  const [ price , setPrice] = useState(prezzoAttuale);
  const showPrice = () =>{
    if (price === 0){
      setPrice(prezzo)
    }else{
      setPrice(prezzoAttuale)
    }
  }

  return (
    
    <section className='Card'>
        <div>{children}</div>
        <img src={img} alt={nome} />
        <h3>{nome}</h3>
        <hr></hr>
        <span className='price'> { price } euro</span>
        <span className='soldBy'> Venduto da {soldBy}</span>
        <button onClick={()=> alert(`nome: ${nome}`)} >Compra ora per {prezzo} euro</button>
        <button onClick={showPrice} >Mostra / Nascondi il prezzo</button>
        <span>Prezzo attuale:</span>
        <p>{limited}</p>
   
    </section>
  )
}

export default Card
