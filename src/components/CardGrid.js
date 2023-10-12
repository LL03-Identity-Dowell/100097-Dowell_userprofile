import React, {useState} from "react";
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const CardGrid = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
    <Container fluid>
      <Row>
        <Col sm>
          <Card className="bg-dark text-white border border-0">
            <Card.Img src="/images/org-logo-3.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm></Col>
        <Col sm>
            <div
                className="image-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <img src="/images/org-logo-3.png" alt="Image" className="image" />
                {isHovered && <div className="hover-text"><HoverForm/></div>}
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardGrid;


function HoverForm(){
  return(
    <div>
      <p>&#60;Organisation name Owner&gt;</p>
      <Form>
          <Form.Check type="checkbox" id="myprofile" label="Section 01 - My Profile"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 02 - Verify Username & Password Strength"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 03 - Device Details"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 04 - Personal IDs"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 05 - Personal References"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 06 - ID Verification Status"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 07 - Organisation Details"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 08 - Geographic Profile"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 09 - Demographic Profile"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 10 - Psychographic Profile"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 11 - Behavioural Profile"/>
          <Form.Check type="checkbox" id="myprofile" label="Section 12 - Usage Profile"/>
          <Button variant="dark">Update Permission</Button>
      </Form>
    </div>
  )
}