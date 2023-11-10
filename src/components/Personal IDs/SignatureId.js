import React from 'react'
import {Button, Image, Form} from 'react-bootstrap';

const SignatureId = () => {
  return (
    <div>
    <div className='text-center'>
      <Image className='img-fluid mb-4' src="/images/samanta.webp" alt="samanta" width={300} height={300}/>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="signatureFile">
          <Form.Label className='labelsStyle'>Signature</Form.Label>
          <Form.Control className='inputStyle' type="file"/>
        </Form.Group> 
        <Button  variant="dark" className='lg:w-50'>Update Your Signature</Button>
        </Form>
    </div>
  )
}

export default SignatureId
