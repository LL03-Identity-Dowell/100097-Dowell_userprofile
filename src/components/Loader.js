import React, {useEffect} from 'react'
import { Spinner, Button, Container, Col, Row } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

const Loader = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('components/Loader');
  // }, []);
  return (
     <>
      <div className="wrap-loader">
        <div className="loader">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="wrap-text">
            <div className="text">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="loader-text">Loading</div>
      </div>
    </>

   
  )
}

export default Loader
