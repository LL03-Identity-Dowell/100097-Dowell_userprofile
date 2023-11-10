import React from 'react'
import { Button, Form } from 'react-bootstrap'
const PersonalReferences1 = () => {
  return (
    <div>
        <h3>Your Personal reference 1 (Name, email, phone, relationship, address) (the person will become member while accepting)</h3>
        <Form>
        <Form.Group className="mb-3" controlId="personalRefernce1">
          <Form.Label className='labelsStyle'>Personal Reference1 Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Personal Reference1'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Personal Reference 1</Button>
          </Form>
    </div>
  )
}

export default PersonalReferences1
