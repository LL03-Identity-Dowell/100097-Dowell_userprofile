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
            <Col  xl={3} sm={12} className="fw-bold">Phone Brand & Model</Col>
            <Col  xl={9} sm={12}>{object.brand_model}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  xl={3} sm={12} className="fw-bold">Laptop Brand & Model</Col>
            <Col  xl={9} sm={12}>{object.laptop_model}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Phone ID</Col>
            <Col xl={9} sm={12}>{object.phone_id}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Tablet Brand & Model</Col>
            <Col xl={9} sm={12} className='password'>{object.tablet_model}</Col>
        </Row>
        </div>
      </ListGroup.Item>
    
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default DeviceIDView


