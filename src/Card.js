import React , {useState} from 'react'

const Card = ({nome, prezzo, img, soldBy,prezzoAttuale,children,limited} ) => {
  const [ price , setPrice] = useState(prezzoAttuale);
  const [ tasto , setTasto] = useState("Mostra il prezzo");
  const showPrice = () =>{
    if (price === 0){
      setPrice(prezzo);
      setTasto("Nascondi il prezzo")
    }else{
      setPrice(prezzoAttuale);
      setTasto("Mostra il prezzo")
    }
  };


  return (
    
    <section className='Card'>
        <div>{children}</div>
        <img src={img} alt={nome} />
        <h3>{nome}</h3>
        <hr></hr>
        <span className='price'> { price } euro</span>
        <button onClick={showPrice} >{tasto}</button>
        <span className='soldBy'> Venduto da {soldBy}</span>
        <button onClick={()=> alert(`nome: ${nome}`)} >Compra ora per {prezzo} euro</button>
        <span>Prezzo attuale:</span>
        <p>{limited}</p>
   
    </section>
  )
}

export default Card
