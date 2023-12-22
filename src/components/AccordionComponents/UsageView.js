import React, {useState, useEffect} from 'react'
import { ListGroup, Row, Col  } from 'react-bootstrap';

const UsageView = (viewData) => {
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
            <Col  sm={3} className="fw-bold">Awareness Level</Col>
            <Col  sm={9}>{object.awareness_level}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  sm={3} className="fw-bold">purpose</Col>
            <Col  sm={9}>{object.purpose}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col sm={3} className="fw-bold">Usage Rate</Col>
            <Col sm={9}>{object.usage_rate}</Col>
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

export default UsageView


