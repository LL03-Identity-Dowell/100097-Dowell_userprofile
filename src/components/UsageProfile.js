import React from 'react'
import {Form, Button} from 'react-bootstrap'
const UsageProfile = () => {
  return (
    <div className='mb-5'>
      <p className="myProfile text-white fw-bold text-center">12. Usage Profile</p>
      <Form>
        <Form.Group className="mb-3" controlId="favoriteProduct">
          <Form.Label className='labelsStyle'>Usage rate for your favourite product or service</Form.Label>
          <Form.Select aria-label="favoriteProduct" className='inputStyle'>
            <option value="heavy">Heavy</option>
            <option value="medium">Medium</option>
            <option value="light">Light</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="awareness">
          <Form.Label className='labelsStyle'>Awareness level while using the product or service</Form.Label>
          <Form.Select aria-label="awareness" className='inputStyle'>
            <option value="unaware">Unaware</option>
            <option value="aware">Aware</option>
            <option value="intrested">Intrested</option>
            <option value="enthsiastic">Enthusiastic</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="purpose">
          <Form.Label className='labelsStyle'>Purpose while using the product or service</Form.Label>
          <Form.Select aria-label="purpose" className='inputStyle'>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="leisure">Leisure</option>
            <option value="personal">Personal</option>
            <option value="gift">Gift</option>
          </Form.Select>
        </Form.Group> 
        <Form.Group className="mb-3" controlId="others">
          <Form.Label className='labelsStyle'>Others</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder="other details" />
        </Form.Group> 
        <Button variant="dark" className='w-100'>Update Usage Profile</Button>
      </Form>
    </div>
  )
}

export default UsageProfile
