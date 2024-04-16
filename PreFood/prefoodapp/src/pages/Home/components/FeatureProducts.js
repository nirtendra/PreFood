import { ProductCard } from "../../../components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const FeatureProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("  http://localhost:4000/featured_Products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="FeaturedContainer">
      <Row>
        <h3>FeaturedProducts</h3>
      </Row>
      <Container fluid className="FeaturedContainerItems">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
          
        ))}
      </Container>
    </div>
  );
};
