import React, {useState, useEffect} from 'react'
import { ListGroup, Row, Col  } from 'react-bootstrap';

const DeviceIDView = (viewData) => {
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
            <Col  sm={3} className="fw-bold">Phone Brand & Model</Col>
            <Col  sm={9}>{object.brand_model}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  sm={3} className="fw-bold">Laptop Brand & Model</Col>
            <Col  sm={9}>{object.laptop_model}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Phone ID</Col>
            <Col sm={9}>{object.phone_id}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Tablet Brand & Model</Col>
            <Col sm={9} className='password'>{object.tablet_model}</Col>
        </Row>
        </div>
      </ListGroup.Item>
    
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default DeviceIDView


