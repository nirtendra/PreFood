import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Rating } from "./Rating";

import { Link } from "react-router-dom";
import PizzaImage from "../../assets/pizza.jpg";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const {
    id,
    name,
    description,
    price,
    category,
    rating,
    img,
    top_seller,
    PizzaImage,
  } = product;

  const [quantity, setQuantity] = useState(1);






  const handleAddToCartClick = () => {
    
  
    setQuantity(1); // Reset quantity to 1 after adding to order
  };


  return (
    <div className="card-main" style={{ padding: "15px" }}>
      <Link to={`/products/${id}`}>
        <Card className="card" style={{ width: "25rem" }}>
          {top_seller && (
            <span className=" position-absolute top-4 bg-warning">
              Top Rated
            </span>
          )}

          <div>
            <Card.Img variant="top" src={img} alt={PizzaImage} />
          </div>

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{category}</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            <p>
              <span>$</span>
              <span>{price}</span>
            </p>

            <div className="ratingContainer">
              <Rating rating={rating} />
            </div>

            <Button onClick={handleAddToCartClick} variant="success">
              Add To Order
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
