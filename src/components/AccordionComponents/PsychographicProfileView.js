import React, {useState, useEffect} from 'react'
import { ListGroup, Row, Col  } from 'react-bootstrap';

const PsychographicProfileView = (viewData) => {
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
            <Col  xl={3} sm={12} className="fw-bold">IQ Level</Col>
            <Col  xl={9} sm={12}>{object.IQ_Level}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col  xl={3} sm={12} className="fw-bold">Life Style</Col>
            <Col  xl={9} sm={12}>{object.Life_Style}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Attitude</Col>
            <Col xl={9} sm={12}>{object.Your_Attitude}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Personality</Col>
            <Col xl={9} sm={12} className='password'>{object.Your_Personality}</Col>
        </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        
      >
        <div className="ms-2 me-auto">
        <Row>
            <Col xl={3} sm={12} className="fw-bold">Others</Col>
            <Col xl={9} sm={12} className='password'>{object.Others_psychographic}</Col>
        </Row>
        </div>
      </ListGroup.Item>
    
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default PsychographicProfileView


