import React from 'react'
import { Button, Form } from 'react-bootstrap'
const XingProfile = () => {
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
        <Form.Group className="mb-3" controlId="xingProfile">
          <Form.Label className='labelsStyle'>Xing Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Xing profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Xing Profile</Button>
         </Form> 
    </div>
  )
}

export default XingProfile
