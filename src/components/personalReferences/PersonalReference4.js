import React from 'react'
import { Button, Form } from 'react-bootstrap'
const PersonalReferences4 = () => {
  return (
    <div>
        <h3>Your Personal reference 4 (Name, email, phone, relationship, address) (the person will become member while accepting)</h3>
        <Form>
        <Form.Group className="mb-3" controlId="personalRefernce4">
          <Form.Label className='labelsStyle'>Personal Reference4 Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Personal Reference4'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Personal Reference 4</Button>
          </Form>
    </div>
  )
}

export default PersonalReferences4
