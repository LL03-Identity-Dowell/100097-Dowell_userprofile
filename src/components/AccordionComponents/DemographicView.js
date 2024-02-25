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
            <Col  xl={3} sm={12} className="fw-bold">Date Of Birth</Col>
            <Col  xl={9} sm={12}>{object.date_of_birth}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  xl={3} sm={12} className="fw-bold">Education</Col>
            <Col  xl={9} sm={12}>{object.education}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Family Size</Col>
            <Col xl={9} sm={12}>{object.family_size}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Gender</Col>
            <Col xl={9} sm={12} className='password'>{object.gender}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Occupation</Col>
            <Col xl={9} sm={12} className='password'>{object.occupation}</Col>
        </Row>
        </div>
      </ListGroup.Item>  <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Parental Status</Col>
            <Col xl={9} sm={12} className='password'>{object.parental_status}</Col>
        </Row>
        </div>
      </ListGroup.Item>  <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Others</Col>
            <Col xl={9} sm={12} className='password'>{object.others_demographic}</Col>
        </Row>
        </div>
      </ListGroup.Item>  <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Gender</Col>
            <Col xl={9} sm={12} className='password'>{object.gender}</Col>
        </Row>
        </div>
      </ListGroup.Item>
    
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default DemographicView


