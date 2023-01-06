import Card from "./Card";
import products from "./Products";


function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          {products.map(product =>{
            return <Card key={product.id} {...product}/>
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
