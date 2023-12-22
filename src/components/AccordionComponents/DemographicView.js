import React, {useState, useEffect} from 'react'
import { ListGroup, Row, Col  } from 'react-bootstrap';

const DemographicView = (viewData) => {
  const [object, setObject] = useState(null);
  const data = viewData.data;
  useEffect(() => {
 
    setObject(data);
  }, [viewData]);
  return (
    <div>
      {object?
      <ListGroup as="ul">
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
          <Row>
            <Col  sm={3} className="fw-bold">Date Of Birth</Col>
            <Col  sm={9}>{object.date_of_birth}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  sm={3} className="fw-bold">Education</Col>
            <Col  sm={9}>{object.education}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Family Size</Col>
            <Col sm={9}>{object.family_size}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Gender</Col>
            <Col sm={9} className='password'>{object.gender}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Occupation</Col>
            <Col sm={9} className='password'>{object.occupation}</Col>
        </Row>
        </div>
      </ListGroup.Item>  <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Parental Status</Col>
            <Col sm={9} className='password'>{object.parental_status}</Col>
        </Row>
        </div>
      </ListGroup.Item>  <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Others</Col>
            <Col sm={9} className='password'>{object.others_demographic}</Col>
        </Row>
        </div>
      </ListGroup.Item>  <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Gender</Col>
            <Col sm={9} className='password'>{object.gender}</Col>
        </Row>
        </div>
      </ListGroup.Item>
    
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default DemographicView


