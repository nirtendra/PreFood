import { ProductCard } from "../../../components/Elements/ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

export const FeatureProducts = () => {
  return (
    <div className="FeaturedContainer">
      <Row>
        <h3>FeaturedProducts</h3>
      </Row>
      <Container fluid className="FeaturedContainerItems">
        <Row xs={12}  md={4}>
          <Col className="EachCard">
            <ProductCard />
          </Col >
          <Col className="EachCard">
            <ProductCard />
          </Col>
          <Col className="EachCard">
            <ProductCard />
          </Col>
          <Col className="EachCard">
            <ProductCard />
          </Col>
          <Col className="EachCard">
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
