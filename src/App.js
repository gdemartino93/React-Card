import Card from "./Card";

const firstCard = {
  nome : "10 euro Amazon",
  prezzo : 10,
  img : "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11900.jpg"
};
const secondCard = {
  nome : "Mascherine 50 pz",
  prezzo : 20,
  img : "https://www.dentaltix.com/it/sites/default/files/styles/large/public/ffp2-mascarilla-plegable-de-color-negro.jpeg?itok=GMTlXGrM"
}

function App() {
  return (
    <div className="App">
      <main>
        <Card nome={firstCard.nome} prezzo={firstCard.prezzo} img={firstCard.img}  />
        <Card nome={secondCard.nome} prezzo={secondCard.prezzo} img={secondCard.img} />

      </main>
  
    </div>
  );
}

export default App;
