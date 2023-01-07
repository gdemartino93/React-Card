import React , {useState} from 'react'

const Card = ({nome, prezzo, img, soldBy,prezzoAttuale,children, prezzoNascosto} ) => {
  const [ price , setPrice] = useState(prezzoNascosto);
  const [ tasto , setTasto] = useState("Mostra il prezzo");
  const [bid , setBid] = useState(prezzoAttuale);
  const showPrice = () =>{
    if (price === null){
      setPrice(prezzo);
      setTasto("Nascondi il prezzo")
    }else{
      setPrice(prezzoNascosto);
      setTasto("Mostra il prezzo")
    }
  };
  const increaseBid = () =>{
     setBid(bid + 1)
  }

  return (
    
    <section className='Card'>
        <div>{children}</div>
        <img src={img} alt={nome} />
        <h3>{nome}</h3>
        <hr></hr>
        <span className='price text-center'> { price } </span>
        <button onClick={showPrice} className="btn btn-success"> {tasto} </button>
        <span className='soldBy'> Venduto da {soldBy} </span>
        <button className='btn btn-danger' onClick={increaseBid}> Bid </button>
        <span>Prezzo attuale: {bid} € </span>
   
    </section>
  )
}

export default Card
