import React from 'react'
import { Button , Form} from 'react-bootstrap'
const PersonalReferences2 = () => {
  return (
    <div>
        <h3>Your Personal reference 2 (Name, email, phone, relationship, address) (the person will become member while accepting)</h3>
        <Form>
        <Form.Group className="mb-3" controlId="personalRefernce2">
          <Form.Label className='labelsStyle'>Personal Reference2 Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Personal Reference2'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Personal Reference 2</Button>
          </Form>
    </div>
  )
}

export default PersonalReferences2
