import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError('Failed to fetch products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Product List</h1>
      {data.map(product => (
         <div key={product.id} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{ width: "200px" }} />
          <h4>Price: {product.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default Product;
