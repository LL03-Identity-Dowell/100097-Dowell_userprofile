import React, {useEffect} from 'react'
import { Spinner, Button, Container, Col, Row } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

const Loader = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('components/Loader');
  // }, []);
  return (
    <Container className='loaderContainer'>
    <Row className="justify-content-center">
      <Col xs={12} md={6} className="align-self-center">
        <img src="/images/logo.webp" width={100} height={100}/>
        <Spinner animation="grow" />
      </Col>
    </Row>
  </Container>

   
  )
}

export default Loader
