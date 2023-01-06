import React , {useState} from 'react'

const Card = ({nome, prezzo, img, soldBy,prezzoAttuale,children} ) => {
  const [ price , setPrice] = useState(prezzoAttuale);
  const [ tasto , setTasto] = useState("Mostra il prezzo");
  const showPrice = () =>{
    if (price === null){
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
        <span className='price text-center'> { price } </span>
        <button onClick={showPrice} className="btn btn-success"> {tasto} </button>
        <span className='soldBy'> Venduto da {soldBy} </span>
        <span>Prezzo attuale:</span>
   
    </section>
  )
}

export default Card
