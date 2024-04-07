import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../HomePage.css";
import HeroImage from "../../../assets/heroimage.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Hero = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <div className="FirstHero">
            <h2>
              "Navigate Flavorful Delights Digitally
              <br /> Your Menu, Your Way.One Click Away!"
            </h2>
            <Link to="/products">
              <Button variant="outline-warning ">Explore More</Button>
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <div className="SecondHero">
            <img src={HeroImage} alt="heroimage"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
