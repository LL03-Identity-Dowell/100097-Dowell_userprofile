import React from 'react'
import { Button , Form} from 'react-bootstrap'
const RedditProfile = () => {
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
        <Form.Group className="mb-3" controlId="redditProfile">
          <Form.Label className='labelsStyle'>Reddit Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter reddit profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Reddit Profile</Button>
        </Form>
    </div>
  )
}

export default RedditProfile
