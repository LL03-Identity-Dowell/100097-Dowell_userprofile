import React from 'react'
import { Button } from 'react-bootstrap'
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
          <div className='text-center'>
            <Button variant="dark" className='' size="lg">Update Your Academia Profile</Button>
          </div>
    </div>
  )
}

export default AcademiaProfile
