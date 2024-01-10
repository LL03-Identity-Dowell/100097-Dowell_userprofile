import React, {useState, useEffect} from 'react'
import { ListGroup, Row, Col  } from 'react-bootstrap';

const Workspace = (viewData) => {
  const [object, setObject] = useState(null);
  const data = viewData.data;
  useEffect(() => {
 
    setObject(data);
  }, [viewData]);
  return (
    <div>
      {object?
      <ListGroup as="ul">
      <ListGroup.Item  as="li">
        <div className="ms-2 me-auto">
          <Row>
            <Col  sm={3} className="fw-bold">Your Workspace Name</Col>
            <Col  sm={9}>{object.workspace_name}</Col>
          </Row>         
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <div className="ms-2 me-auto">
            <Row>
                <Col  sm={3} className="fw-bold">Organisation Address</Col>
                <Col  sm={9}>{object.org_address}</Col>
            </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <div className="ms-2 me-auto">
            <Row>
                <Col sm={3} className="fw-bold">PIN/ZIP code</Col>
                <Col sm={9}>{object.PIN}</Col>
            </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <div className="ms-2 me-auto">
            <Row>
                <Col sm={3} className="fw-bold">City of your Workspace</Col>
                <Col sm={9} className='password'>{object.city}</Col>
            </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <div className="ms-2 me-auto">
            <Row>
                <Col sm={3} className="fw-bold">Country of your Workspace</Col>
                <Col sm={9} className='password'>{object.country}</Col>
            </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <div className="ms-2 me-auto">
            <Row>
                <Col sm={3} className="fw-bold">Workspace Logo</Col>
                <Col sm={9} className='password'>{object.org_logo}</Col>
            </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <div className="ms-2 me-auto">
            <Row>
                <Col sm={3} className="fw-bold">Latitude of Workspace</Col>
                <Col sm={9} className='password'>{object.latitude}</Col>
            </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <div className="ms-2 me-auto">
            <Row>
                <Col sm={3} className="fw-bold">Longitude of Workspace</Col>
                <Col sm={9} className='password'>{object.longitude}</Col>
            </Row>
        </div>
      </ListGroup.Item>
    
    </ListGroup>

:"Loading"}
    </div>
  )
}

export default Workspace


