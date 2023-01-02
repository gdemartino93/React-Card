import React from 'react'
const productImg = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11900.jpg";
const descriptionImg = "Amazon gift card";
const price = 20;
const Card = () => {
  return (
    <section className='Card'>
        <img src={productImg} alt={descriptionImg} />
        <h3>Amazon 35euro Gift Card</h3>
        <span className='price'> {price} euro</span>
        <span className='soldBy'> Venduto da xxxmaster</span>
        <button>Compra ora per {price} euro</button>
    </section>
  )
}

export default Card