import React from 'react'
import { Button, Form } from 'react-bootstrap'
const TumblrProfile = () => {
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
        <Form.Group className="mb-3" controlId="tumblrProfile">
          <Form.Label className='labelsStyle'>Tumblr Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter tumblr profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Tumblr Profile</Button>
        </Form>
    </div>
  )
}

export default TumblrProfile
