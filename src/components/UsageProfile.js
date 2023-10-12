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
        <Form.Group className="mb-3" controlId="city">
          <Form.Label className='labelsStyle'>City your residing for last 5 years</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder="Enter your City" />
        </Form.Group> 
        <Form.Group className="mb-3" controlId="latitude">
          <Form.Label className='labelsStyle'>Latitude of your house</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder="Latitude of the geo coordinates of your house" />
        </Form.Group> 
        <Form.Group className="mb-3" controlId="longititude">
          <Form.Label className='labelsStyle'>Longitude of your house</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder="Longitude of the geo coordinates of your house" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="region">
          <Form.Label className='labelsStyle'>Region inside location</Form.Label>
          <Form.Select aria-label="region" className='inputStyle'>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </Form.Select>
        </Form.Group> 
        <Form.Group className="mb-3" controlId="others">
          <Form.Label className='labelsStyle'>Others</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder="other details" />
        </Form.Group> 
        <Button variant="dark" className='w-100'>Update Geographic Profile</Button>
      </Form>
    </div>
  )
}

export default UsageProfile
