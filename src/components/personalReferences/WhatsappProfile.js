import React from 'react'
import { Button, Form } from 'react-bootstrap'
const WhatsappProfile = () => {
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
        <Form.Group className="mb-3" controlId="whatsappProfile">
          <Form.Label className='labelsStyle'>Whatsapp Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Whatsapp profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Whatsapp Profile</Button>
        </Form>  
    </div>
  )
}

export default WhatsappProfile
