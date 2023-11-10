import React from 'react'
import { Button , Form} from 'react-bootstrap'
const PersonalReferences3 = () => {
  return (
    <div>
        <h3>Your Personal reference 3 (Name, email, phone, relationship, address) (the person will become member while accepting)</h3>
        <Form>
        <Form.Group className="mb-3" controlId="personalRefernce3">
          <Form.Label className='labelsStyle'>Personal Reference3 Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Personal Reference3'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Personal Reference 3</Button>
          </Form>
    </div>
  )
}

export default PersonalReferences3
