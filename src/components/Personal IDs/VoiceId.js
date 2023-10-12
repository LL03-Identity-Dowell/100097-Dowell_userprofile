import React from 'react';
import {Button, Image} from 'react-bootstrap';
const VoiceId = () => {
  return (
    <div className='text-center'>
      <Image className='img-fluid mb-4' src="/images/samanta.webp" alt="samanta" width={300} height={300}/>
      <br/><Button  variant="dark" className='lg:w-50'>Update Your Voice ID</Button>
    </div>
  )
}

export default VoiceId
