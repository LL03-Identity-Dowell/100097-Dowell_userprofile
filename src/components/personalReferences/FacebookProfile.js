import React from 'react'
import { Button, Form } from 'react-bootstrap'
const FacebookProfile = () => {
  return (
    <div>
        <iframe
            title="Embedded Webpage"
            src="https://www.facebook.com/uxlivinglab/" 
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
         <Form>
        <Form.Group className="mb-3" controlId="facebookProfile">
          <Form.Label className='labelsStyle'>Facebook Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter facebook profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Facebook Profile</Button>
       </Form>
    </div>
  )
}

export default FacebookProfile
