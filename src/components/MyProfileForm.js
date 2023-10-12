import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
const MyProfileForm = () => {
  return (
    <div>
      <Container fluid>
        <Row>
            <Col sm={6}>
            <p className="myProfile text-white fw-bold text-center">01. My Profile</p>
            <Form>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label className='labelsStyle'>Your first name</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label className='labelsStyle'>Your last name</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label className='labelsStyle'>Your phone number</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourEmial">
                    <Form.Label className='labelsStyle'>Your email</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourAddress">
                    <Form.Label className='labelsStyle'>Your Address</Form.Label>
                    <Form.Control className='inputStyle' as="textarea" rows={3} placeholder="Enter your address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pin/zipcode">
                    <Form.Label className='labelsStyle'>Your PIN/ZIP code</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your PIN/ZIP Code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pin/zipcode">
                    <Form.Label className='labelsStyle'>Your City/Location</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your City Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                    <Form.Label className='labelsStyle'>Your City/Location</Form.Label>
                    <Form.Select aria-label="Country 1" className='inputStyle'>
                        <option>Country 1</option>
                        <option value="country2">Country 2</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            </Col>
            <Col sm={6}>
                <Form.Group className="mb-3" controlId="yourDesignation">
                    <Form.Label className='labelsStyle'>Your Designation</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your designation" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourTeamCode">
                    <Form.Label className='labelsStyle'>Your Team Code</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your team code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nativeLanguage">
                    <Form.Label className='labelsStyle'>Your Native Language</Form.Label>
                    <Form.Select aria-label="nativeLanguage" className='inputStyle'>
                        <option>English</option>
                        <option value="chinese">Chinese</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nationality">
                    <Form.Label className='labelsStyle'>Your Nationality</Form.Label>
                    <Form.Select aria-label="nationality" className='inputStyle'>
                        <option>English</option>
                        <option value="chinese">Chinese</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourPhoto">
                    <Form.Label className='labelsStyle'>Your Photo</Form.Label>
                    <Form.Control className='inputStyle' as="textarea" rows={3}/>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload new photo</Form.Label>
                    <Form.Control className='inputStyle' type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourVision">
                    <Form.Label className='labelsStyle'>Your Vision</Form.Label>
                    <Form.Control className='inputStyle' as="textarea" rows={3}/>
                </Form.Group>
                <Button variant="dark" className='w-100'>Update</Button>

            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyProfileForm
