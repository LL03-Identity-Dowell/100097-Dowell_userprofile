import React,{useState} from 'react'
import Accordion from "react-bootstrap/Accordion";
import MyProfileView from './AccordionComponents/MyProfileView'
const AccordionList = (profileData) => {
 const profiledata = profileData.profileData
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
console.log(profiledata)

  return (
    <div>
  
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>My Profile</Accordion.Header>
        <Accordion.Body>
         <MyProfileView data={profiledata}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Set Password</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Device IDs</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Personal IDs</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>References</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>ID Verification</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>My Organisation</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Geographic Profile</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Demographic Profile</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Demographic Profile</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>Behavioural Profile</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>Usage Profile</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header>Section Permissions</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default AccordionList
