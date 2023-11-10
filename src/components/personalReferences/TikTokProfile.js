import React from 'react'
import { Button, Form } from 'react-bootstrap'
const TikTokProfile = () => {
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
        <Form.Group className="mb-3" controlId="tiktokProfile">
          <Form.Label className='labelsStyle'>TikTok Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter tiktok profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your TikTok Profile</Button>
          </Form>
    </div>
  )
}

export default TikTokProfile
