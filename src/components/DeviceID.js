import React, { useState } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

const DeviceID = (userData) => {
  const [formInputs, setFormInputs] = useState({
    phoneId: "",
    phoneBrand: "",
    laptopBrand: "",
    tabletBrand: "",
  });
  const [loading, setLoading] = useState(false);

  const userName = userData.userData.userData.userinfo.username;
console.log("Device is", userName)
  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const data = {
      Username: userName,
      phoneId: formInputs.phoneId,
      phoneBrand: formInputs.phoneBrand,
      laptopBrand: formInputs.laptopBrand,
      tabletBrand: formInputs.tabletBrand,
    };
  
    try {
      const response = await fetch("https://100097.pythonanywhere.com/Deviceid_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
  
        toast.success("success");
      } else {
        throw new Error(`Failed to submit device IDs: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
        <ToastContainer position="top-right"/>

      <Container fluid className="mb-5">
        <Row>
          <Col sm={6}>
            <p className="myProfile text-white fw-bold text-center">
              03. Device IDs
            </p>
            <p className="fst-italic grayText fw-bold my-5">
              What is Device ID
            </p>
            <ul className="fst-italic grayText list-unstyled">
              <li>
                Phone laptop tablet
                <ol>
                  <li>Go to settings</li>
                  <li>My phone</li>
                </ol>
              </li>
              <li>
                Laptop
                <ol>
                  <li>Go to settings</li>
                  <li>My Preferences</li>
                </ol>
              </li>
              <li>
                Tablet
                <ol>
                  <li>Go to settings</li>
                  <li>My Preferences</li>
                </ol>
              </li>
            </ul>
          </Col>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="phoneId">
                <Form.Label className="labelsStyle">Your Phone ID</Form.Label>
                <Form.Control
                  className="inputStyle"
                  type="text"
                  placeholder="Phone ID"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phoneBrand">
                <Form.Label className="labelsStyle">
                  Your Phone Brand & Model
                </Form.Label>
                <Form.Control
                  className="inputStyle"
                  type="text"
                  placeholder="Phone Brand & Model"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="laptopBrand">
                <Form.Label className="labelsStyle">
                  Your Laptop Brand & Model
                </Form.Label>
                <Form.Control
                  className="inputStyle"
                  type="text"
                  placeholder="Laptop Brand & Model"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="tabletBrand">
                <Form.Label className="labelsStyle">
                  Your Tablet Brand & Model
                </Form.Label>
                <Form.Control
                  className="inputStyle"
                  type="text"
                  placeholder="Tablet Brand & Model"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Button variant="dark" className="w-100" type="submit">
                {loading ? "Updating..." : "Update Device IDs"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeviceID;
