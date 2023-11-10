import React from 'react'
import { Button, Form } from 'react-bootstrap'
const SnapchatProfile = () => {
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
        <Form.Group className="mb-3" controlId="snapchatProfile">
          <Form.Label className='labelsStyle'>Snapchat Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter snapchat profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Snapchat Profile</Button>
          </Form>
    </div>
  )
}

export default SnapchatProfile
