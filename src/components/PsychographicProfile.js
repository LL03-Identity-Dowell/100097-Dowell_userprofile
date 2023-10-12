import React from 'react'
import { Form, Button } from 'react-bootstrap'
const PsychographicProfile = () => {
  return (
    <div>
      <p className="myProfile text-white fw-bold text-center">10. Psychographic Profile</p>
      <Form>
        <Form.Group className="mb-3" controlId="lifestyle">
          <Form.Label className='labelsStyle'>Your Life Style</Form.Label>
          <Form.Select aria-label="lifestyle" className='inputStyle'>
            <option value="modern">Modern</option>
            <option value="traditional">Traditional</option>
            <option value="trendsetter">Trendsetter</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="iqlevel">
          <Form.Label className='labelsStyle'>Your IQ Level</Form.Label>
          <Form.Select aria-label="iqlevel" className='inputStyle'>
              <option>Above 140 - <sup>""</sup>Near<sup>""</sup> genius or genius</option>
              <option value="verSuperior">120 - 140 Very superior intelligence</option>
              <option value="Superior">110 - 110 Superior intelligence</option>
              <option value="Normal">90 - 110 - Normal, or average, intelligence</option>
              <option value="belowAverage">Below 90 - Below Average</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="attitude">
          <Form.Label className='labelsStyle'>Your Attitude</Form.Label>
          <Form.Select aria-label="attitude" className='inputStyle'>
              <option value="innovators">Innovators</option>
              <option value="earlyAdopters">Early Adopters</option>
              <option value="earlyMajority">Early Majority</option>
              <option value="lateMajority">Late Majority</option>
              <option value="leggards">Leggards</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="personality">
          <Form.Label className='labelsStyle'>Your Personality (test using https://www.16personalities.com/)</Form.Label>
          <Form.Select aria-label="personality" className='inputStyle'>
              <option value="architect">Architect</option>
              <option value="logician">Logician</option>
              <option value="commander">Commander</option>
              <option value="advocate">Advocate</option>
              <option value="mediator">Mediator</option>
              <option value="protaganist">Protagonist</option>
              <option value="compaigner">Compaigner</option>
              <option value="logistician">Logistician</option>
              <option value="defender">Defender</option>
              <option value="executive">Executive</option>
              <option value="consul">Consul</option>
              <option value="virtuoso">Virtuoso</option>
              <option value="Adventurer">Adventurer</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="virtuoso">Entertainer</option>

          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="others">
          <Form.Label className='labelsStyle'>Others</Form.Label>
          <Form.Control className='inputStyle' placeholder='Other details'/>
        </Form.Group>
        <Button variant="dark" className='w-100'>Update Psychographic Profile</Button>

      </Form>
    </div>
  )
}

export default PsychographicProfile
