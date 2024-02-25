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
            <Col  xl={3} sm={12} className="fw-bold">City</Col>
            <Col  xl={9} sm={12}>{object.city}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  xl={3} sm={12} className="fw-bold">Country</Col>
            <Col  xl={9} sm={12}>{object.country}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Latitude</Col>
            <Col xl={9} sm={12}>{object.latitude}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Longitude</Col>
            <Col xl={9} sm={12} className='password'>{object.longitude}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Region</Col>
            <Col xl={9} sm={12} className='password'>{object.region}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Others</Col>
            <Col xl={9} sm={12} className='password'>{object.others}</Col>
        </Row>
        </div>
      </ListGroup.Item>
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default GeographicView


