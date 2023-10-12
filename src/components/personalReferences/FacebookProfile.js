import React from 'react'
import { Button } from 'react-bootstrap'
const FacebookProfile = () => {
  return (
    <div>
        <iframe
            title="Embedded Webpage"
            src="https://www.facebook.com/uxlivinglab/" 
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
          <div className='text-center'>
            <Button variant="dark" className='' size="lg">Update Your Facebook Profile</Button>
          </div>
    </div>
  )
}

export default FacebookProfile
