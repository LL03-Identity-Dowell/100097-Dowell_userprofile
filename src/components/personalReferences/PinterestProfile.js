import React from 'react'
import { Button, Form } from 'react-bootstrap'
const PinterestProfile = () => {
  return (
    <div>
        <iframe
            title="Embedded Webpage"
            src="https://twitter.com/DoWellResearch" 
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
   <Form>
        <Form.Group className="mb-3" controlId="pinterestProfile">
          <Form.Label className='labelsStyle'>Pinterest Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter pinterest profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Pinterest Profile</Button>
          </Form>
    </div>
  )
}

export default PinterestProfile
