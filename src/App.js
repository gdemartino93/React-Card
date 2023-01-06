import Card from "./Card";
import products from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";



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
