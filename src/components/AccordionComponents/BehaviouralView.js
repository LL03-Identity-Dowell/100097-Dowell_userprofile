import React, {useState, useEffect} from 'react'
import { ListGroup, Row, Col  } from 'react-bootstrap';

const BehaviouralView = (viewData) => {
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
            <Col  xl={3} sm={12} className="fw-bold">Benefits</Col>
            <Col  xl={9} sm={12}>{object.benefits}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  xl={3} sm={12} className="fw-bold">Brand Loyalty</Col>
            <Col  xl={9} sm={12}>{object.brand_loyalty}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Role</Col>
            <Col xl={9} sm={12}>{object.role}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Others</Col>
            <Col xl={9} sm={12} className='password'>{object.others_behaviour}</Col>
        </Row>
        </div>
      </ListGroup.Item>
    
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default BehaviouralView


