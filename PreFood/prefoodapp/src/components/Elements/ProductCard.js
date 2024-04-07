import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import PizzaImage from "../../assets/pizza.jpg";

export const ProductCard = () => {
  return (
  <div>
        <Link to="/">   
      
        <Card style={{ width: "18rem" }}>
        <span className=" position-absolute top-4 bg-warning">Top Rated</span>

        <Card.Img variant="top" src={PizzaImage} />
        <Card.Body>
          <Card.Title>Pizza</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
        </ListGroup>
     
        <Card.Body>
          <p>
            <span>$</span>
            <span>99</span>
          </p>

          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>

          <Button variant="success">Add To Order</Button>
        </Card.Body>
       
      </Card>
      </Link>
    </div>
  );
};
