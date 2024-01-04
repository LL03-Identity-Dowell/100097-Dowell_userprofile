import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Button,
  Form,
} from "react-bootstrap";
const CardGrid = () => {
  return (
    <div>
      <div className="card-container mt-5">
      <NestedCard/>
      <NestedCard/>
      <NestedCard/>

    </div>
    <div className="card-container mt-5">
      <NestedCard/>
      <NestedCard/>
      <NestedCard/>

    </div>
    </div>
  );
};

export default CardGrid;


function NestedCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`position-relative ${isExpanded ? "expanded" : ""}`}
    >
            {!isExpanded && <CardImg variant="top" src="/images/org-logo-3.png" alt="Image" />}

      <CardBody className={`p-4 ${isExpanded ? "p-4" : ""}`}>
        {isExpanded && (
          <Form className="form_card">
            <CardText><p>&#60;Organisation Name Owner&gt;</p></CardText>
            
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
        )}
      </CardBody>
    </Card>
  );
}



