import React from 'react'
import { Button , Form} from 'react-bootstrap'
const AcademiaProfile = () => {
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
        <Form.Group className="mb-3" controlId="academiaProfile">
          <Form.Label className='labelsStyle'>Academia Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Academia profile url'/>
        </Form.Group> 
            <Button variant="dark" className='' size="lg">Update Your Academia Profile</Button>
         </Form>
    </div>
  )
}

export default AcademiaProfile
