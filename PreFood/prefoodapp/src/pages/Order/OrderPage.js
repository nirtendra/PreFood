import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook for route parameters

export const OrderPage = ({ productId }) => {
  const [product, setProduct] = useState(null);

  const { id } = useParams(); // Access product ID from route parameter

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:4000/products/${id}`); // Fetch product by ID from route
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]); // Re-run useEffect on ID change

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleQuantityChange = (event) => {
    // Implement logic to update quantity based on user input (optional)
  };

  return (
    <div className="order-page">
      <h2>Order Details</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" defaultValue={1} onChange={handleQuantityChange} />
      {/* Add button to confirm order or proceed to checkout (optional) */}
      <button>Confirm Order</button>
    </div>
  );
};
