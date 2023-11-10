import React from 'react'
import { Button, Form } from 'react-bootstrap'
const InstagramProfile = () => {
  return (
    <div>
        <iframe
            title="Embedded Webpage"
            src="https://www.instagram.com/dowell_npslive/" 
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
           <Form>
        <Form.Group className="mb-3" controlId="instagramProfile">
          <Form.Label className='labelsStyle'>Instagram Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter instagram profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Instagram Profile</Button>
        </Form>
    </div>
  )
}

export default InstagramProfile
