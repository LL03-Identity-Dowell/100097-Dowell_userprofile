import React, {useState, useEffect} from 'react'
import { ListGroup, Row, Col  } from 'react-bootstrap';
import { useSelector } from "react-redux";


const UsageView = (viewData) => {
	const usage_profile = useSelector((state) => state.profile[0].usage);

  return (
    <>
    <ListGroup as="ul">
      {Object.entries(usage_profile).map(
        ([iusage_profile_Key, usage_profile_Value], index) => (
          <ListGroup.Item as="li" key={index}>
            <div className="ms-2 me-auto">
              <Row className="align-items-center">
                <Col sm={4} className="fw-bold">
                  {iusage_profile_Key}
                </Col>
                <Col sm={8}>
                  {usage_profile_Value}
                </Col>
              </Row>
            </div>
          </ListGroup.Item>
        )
      )}
    </ListGroup>
  </>
  )
}

export default UsageView


