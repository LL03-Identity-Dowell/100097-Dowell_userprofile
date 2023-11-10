import React from 'react'
import { Button , Form} from 'react-bootstrap'
const TwitterProfile = () => {
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
        <Form.Group className="mb-3" controlId="twitterProfile">
          <Form.Label className='labelsStyle'>Twitter Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter twitter profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Twitter Profile</Button>
        </Form>  
    </div>
  )
}

export default TwitterProfile
