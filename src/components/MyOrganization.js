import React from 'react'
import {Form, Button} from 'react-bootstrap'
const MyOrganization = () => {
  return (
    <div>
            <p className="myProfile text-white fw-bold text-center">07. Your Workspace</p>

                <Form.Group className="mb-3" controlId="yourOrganization">
                    <Form.Label className='labelsStyle'>Your Workspace</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="update your Workspace name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourOrgAddress">
                    <Form.Label className='labelsStyle'>Organisation Address</Form.Label>
                    <Form.Control className='inputStyle' as="textarea" rows={3} placeholder="Enter your Workspace address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pin/zipcode">
                    <Form.Label className='labelsStyle'>PIN/ZIP code</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter PIN/ZIP code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label className='labelsStyle'>City of your Workspace</Form.Label>
                    <Form.Select aria-label="city" className='inputStyle'>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                    <Form.Label className='labelsStyle'>Country of your Workspace</Form.Label>
                    <Form.Select aria-label="country" className='inputStyle'>
                        <option value="country1">Country 1</option>
                        <option value="country2">Country 2</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="orgLogo">
                    <Form.Label className='labelsStyle'>Workspace Logo</Form.Label>
                    <Form.Control className='inputStyle' as="textarea" rows={3}/>
                </Form.Group>
                <Form.Group controlId="logoFile" className="mb-3">
                    <Form.Label className='labelsStyle'>Upload new logo</Form.Label>
                    <Form.Control className='inputStyle' type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="orgLatitude">
                    <Form.Label className='labelsStyle'>Latitude of Workspace</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Latitude of the geo coordinates of organisation" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="orgLongitude">
                    <Form.Label className='labelsStyle'>Longitude of Workspace</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Longitude of the geo coordinates of organisation" />
                </Form.Group>
                <Button variant="dark" className='w-100'>Update Workspace Details</Button>

            
    </div>
  )
}

export default MyOrganization
