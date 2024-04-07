
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom"


export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Footer Section 1</h5>
            <p>This is the first section of the footer.</p>
          </Col>
          <Col md={6}>
            <h5>Footer Section 2</h5>
            <p>This is the second section of the footer.</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Link to="/">
          <p className="text-center">&copy; 2024 Your Website</p>
          </Link>
           
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
