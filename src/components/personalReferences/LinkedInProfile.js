import React from 'react'
import { Button } from 'react-bootstrap'
const LinkedInProfile = () => {
  return (
    <div>
        <iframe
            title="Embedded Webpage"
            src="https://www.linkedin.com/in/thomas-dowell/" 
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
          <div className='text-center'>
            <Button variant="dark" className='' size="lg">Update Your Linkedin Profile</Button>
          </div>
    </div>
  )
}

export default LinkedInProfile
