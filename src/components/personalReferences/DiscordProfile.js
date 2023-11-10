import React from 'react'
import { Button, Form } from 'react-bootstrap'
const DiscordProfile = () => {
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
        <Form.Group className="mb-3" controlId="discordProfile">
          <Form.Label className='labelsStyle'>Discord Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter discord profile url'/>
        </Form.Group> 
                    <Button variant="dark" className='' size="lg">Update Your Discord Profile</Button>
          </Form>
    </div>
  )
}

export default DiscordProfile
