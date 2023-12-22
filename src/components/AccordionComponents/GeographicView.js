import React, {useState, useEffect} from 'react'
import { ListGroup, Row, Col  } from 'react-bootstrap';

const GeographicView = (viewData) => {
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
            <Col  sm={3} className="fw-bold">City</Col>
            <Col  sm={9}>{object.city}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  sm={3} className="fw-bold">Country</Col>
            <Col  sm={9}>{object.country}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Latitude</Col>
            <Col sm={9}>{object.latitude}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Longitude</Col>
            <Col sm={9} className='password'>{object.longitude}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Region</Col>
            <Col sm={9} className='password'>{object.region}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Others</Col>
            <Col sm={9} className='password'>{object.others}</Col>
        </Row>
        </div>
      </ListGroup.Item>
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default GeographicView


