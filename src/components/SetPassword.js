import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


const SetPassword = () => {
  return (
   
        <div>
      <Container fluid className='mb-5'>
        <Row>
            <Col sm={6}>
            <p className="myProfile text-white fw-bold text-center">02. Set Alphanumeric Password</p>
            <p className='fst-italic grayText'>Password Rules</p>
            <ol className='fst-italic grayText'>
              <li>Minimum 8 characters</li>
              <li>Alphanumeric</li>
            </ol>
            </Col>
            <Col sm={6}>
                <Form.Group className="mb-3" controlId="currentpassword">
                    <Form.Label className='labelsStyle'>Your current Password</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Current Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newPassword">
                    <Form.Label className='labelsStyle'>Your new Password</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="New Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label className='labelsStyle'>Confirm new Password</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="dark" className='w-100'>Update Password</Button>

            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SetPassword
