import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import React, {useState} from 'react'

const SideBar = () => {
    return (
      <div className='sideBarBox'>
      <p className='myProfile text-white fw-bold text-center'>My Profile</p>
      <MyProfileVersion/>
    </div>
  )
}

export default SideBar




function MyProfileVersion() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
    return (
    <Accordion defaultActiveKey="0" className='accord'>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={toggleAccordion}> 
          {isOpen ? '-' : '+'} My Profile Versions</Accordion.Header>
          <Accordion.Body>
              V9999. Current Version<br/>
              V9998. [Date], [time]<br/>
              V9997. [Date], [time]<br/>
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

