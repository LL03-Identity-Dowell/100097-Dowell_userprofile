import React from 'react'
import { Button, Form } from 'react-bootstrap'
const PersonalReferences5 = () => {
  return (
    <div>
        <h3>Your Personal reference 5 (Name, email, phone, relationship, address) (the person will become member while accepting)</h3>
        <Form>
        <Form.Group className="mb-3" controlId="personalRefernce5">
          <Form.Label className='labelsStyle'>Personal Reference5 Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Personal Reference5'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Personal Reference 5</Button>
          </Form>
    </div>
  )
}

export default PersonalReferences5
