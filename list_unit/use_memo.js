import { useState, useMemo } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }])
  }

  return (
    <div style={{ padding: '10px 32px' }}>
      <input
        value={name}
        placeholder='Enter name...'
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input 
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: 
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App