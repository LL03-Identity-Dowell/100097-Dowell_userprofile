import React from 'react'
import { Form, Button } from 'react-bootstrap'
const DemographicProfile = () => {
  return (
    <div>
        <p className="myProfile text-white fw-bold text-center">09. Demographic Profile</p>
        <Form.Group className="mb-3" controlId="country">
                    <Form.Label className='labelsStyle'>Your income class in the society</Form.Label>
                    <Form.Select aria-label="income" className='inputStyle'>
                        <option>Top 10%</option>
                        <option value="top11">Top 11-20%</option>
                        <option value="top11">Top 20-30%</option>
                        <option value="top11">Top 30-40%</option>
                        <option value="top11">Top 40-50%</option>
                        <option value="top11">Below 50%</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="dateOfBirth">
                    <Form.Label className='labelsStyle'>Your Date of Birth</Form.Label>
                    <Form.Control className='inputStyle' type="date" placeholder="Enter your Date Birth" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="gender">
                    <Form.Label className='labelsStyle'>Gender</Form.Label>
                    <Form.Select aria-label="gender" className='inputStyle'>
                        <option>Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="parent">
                    <Form.Label className='labelsStyle'>Parental Status</Form.Label>
                    <Form.Select aria-label="parent" className='inputStyle'>
                        <option value="female">Parent</option>
                        <option value="other">Not a parent</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="education">
                    <Form.Label className='labelsStyle'>Your Education</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your education" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="occupation">
                    <Form.Label className='labelsStyle'>Your Occupation</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter your occupation" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="familySize">
                    <Form.Label className='labelsStyle'>Your Family Size</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Enter number of members in your family" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="othes">
                    <Form.Label className='labelsStyle'>Others</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="Other details" />
                </Form.Group>
            <Button variant="dark" className='w-100' size="lg">Update Demographic Profile</Button>

    </div>
  )
}

export default DemographicProfile
