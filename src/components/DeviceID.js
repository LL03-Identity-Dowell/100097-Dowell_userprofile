import React from 'react'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'
const DeviceID = () => {
  return (
    <div>
    <Container fluid className='mb-5'>
      <Row>
          <Col sm={6}>
          <p className="myProfile text-white fw-bold text-center">03. Device IDs</p>
          <p className='fst-italic grayText fw-bold my-5'>What is Device ID</p>
          <ul className='fst-italic grayText list-unstyled'>
            <li>Phone
              <ol>
                <li>Go to settings</li>
                <li>My phone</li>
              </ol>
            </li>
            <li>Laptop
            <ol>
                <li>Go to settings</li>
                <li>My Preferences</li>
              </ol>
            </li>
            <li>Tablet
            <ol>
                <li>Go to settings</li>
                <li>My Preferences</li>
              </ol>
            </li>
          </ul>
          </Col>
          <Col sm={6}>
              <Form.Group className="mb-3" controlId="phoneId">
                  <Form.Label className='labelsStyle'>Your Phone ID</Form.Label>
                  <Form.Control className='inputStyle' type="text" placeholder="Phone ID" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phoneBrand">
                  <Form.Label className='labelsStyle'>Your Phone Brand & Model</Form.Label>
                  <Form.Control className='inputStyle' type="text" placeholder="Phone Brand & Model" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="laptopBrand">
                  <Form.Label className='labelsStyle'>Your Laptop Brand & Model</Form.Label>
                  <Form.Control className='inputStyle' type="text" placeholder="Laptop Brand & Model" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="laptopBrand">
                  <Form.Label className='labelsStyle'>Your Tablet Brand & Model</Form.Label>
                  <Form.Control className='inputStyle' type="text" placeholder="Tablet Brand & Model" />
              </Form.Group>
              <Button variant="dark" className='w-100'>Update Device IDs</Button>

          </Col>
      </Row>
    </Container>
  </div>
  )
}

export default DeviceID
