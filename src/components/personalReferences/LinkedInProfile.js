import React from 'react'
import { Button, Form } from 'react-bootstrap'
const LinkedInProfile = () => {
  return (
    <div>
        <iframe
            title="Embedded Webpage"
            src="https://www.linkedin.com/in/thomas-dowell/" 
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
    
          <Form>
        <Form.Group className="mb-3" controlId="linkedInProfile">
          <Form.Label className='labelsStyle'>Linked In Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter linked in profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Linkedin Profile</Button>
        </Form>
    </div>
  )
}

export default LinkedInProfile
