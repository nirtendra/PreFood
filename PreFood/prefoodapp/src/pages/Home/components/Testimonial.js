import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../HomePage.css";

export const Testimonial = () => {
  return (
    <>
      <Container className="TestimonialContainer">
        <h2>Testimonial</h2>

        <Row className="TestimonialContainerRow">
          <Col md={6}>
            <div>
              <p>
                <h3>"This app has transformed how I dine.</h3>
                With its easy ordering and swift delivery, I enjoy fresh,
                flavorful meals every time. The wide menu selection ensures
                there's something for every taste. It's dining made effortless."
              </p>
            </div>
            <div>
              <h3>"This app has transformed how I dine.</h3>
              <p>
                With its easy ordering and swift delivery, I enjoy fresh,
                flavorful meals every time. The wide menu selection ensures
                there's something for every taste. It's dining made effortless."
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h3>"This app has made ordering food a breeze. </h3>
              <p>
                From placing my order to receiving it hot and delicious, the
                process is seamless. With a diverse menu, there's always
                something to satisfy my cravings. It's convenience and taste,
                all in one place."
              </p>
            </div>
            <div>
              <h3>
                {" "}
                "Thanks to this app, dining out is now as easy as a tap.{" "}
              </h3>
              <p>
                With its quick ordering and delectable dishes, I can indulge in
                restaurant-quality meals from the comfort of my home. It's the
                ultimate dining experience, simplified."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
