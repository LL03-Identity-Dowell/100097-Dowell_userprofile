import React, {useState} from "react";
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const CardGrid = () => {
  return (
    <div className="card-container">
    <Card className="custom-card border-0">
      <Card.Img src="/images/org-logo-3.png" alt="Image 1" height={300}  width={300}/>
      <div className="overlay">
        <Card.Text><HoverForm/></Card.Text>
      </div>
    </Card>

    <Card className="custom-card">
      <Card.Img src="/images/org-logo-3.png" alt="Image 2" />
      <div className="overlay">
        <Card.Text><HoverForm/></Card.Text>
      </div>
    </Card>

    <Card className="custom-card">
      <Card.Img src="/images/org-logo-3.png" alt="Image 3" />
      <div className="overlay">
        <Card.Text><HoverForm/></Card.Text>
      </div>
    </Card>
  </div>
  );
};

export default CardGrid;


function HoverForm(){
  return(
    <div className="p-4">
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


