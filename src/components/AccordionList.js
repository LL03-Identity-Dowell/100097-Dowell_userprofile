import React,{useState} from 'react'
import Accordion from "react-bootstrap/Accordion";
import MyProfileView from './AccordionComponents/MyProfileView'
import DeviceIDView from './AccordionComponents/DeviceIDView'
import BehaviouralView from './AccordionComponents/BehaviouralView'
import UsageView from './AccordionComponents/UsageView'
import GeographicView from './AccordionComponents/GeographicView'
import PsychographicProfileView from './AccordionComponents/PsychographicProfileView'
import DemographicView from './AccordionComponents/DemographicView'
import Workspace from './AccordionComponents/Workspace'
const AccordionList = (profileData) => {
 const profiledata = profileData.profileData

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
const all_forms = profileData.formsData[0]


    const _id = all_forms._id;
    var _username = all_forms.username;
    var _userID = all_forms.userID;
    var _reference = all_forms.reference;
    var _demographic = all_forms.demographic;
    var _psychographic = all_forms.psychographic;
    var _deviceIDs = all_forms.deviceIDs;
    var _behavioural = all_forms.behavioural;
    var _geographic = all_forms.geographic;
    var _usage = all_forms.usage;
    var _workspace = all_forms.myworkspace

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
         <DeviceIDView data={_deviceIDs}/>
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
        <Accordion.Header>My Workspace</Accordion.Header>
        <Accordion.Body>
          <Workspace data={_workspace}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Geographic Profile</Accordion.Header>
        <Accordion.Body>
         <GeographicView data={_geographic}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Demographic Profile</Accordion.Header>
        <Accordion.Body>
         <DemographicView data={_demographic}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Psychographic Profile</Accordion.Header>
        <Accordion.Body>
         <PsychographicProfileView data={_psychographic}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>Behavioural Profile</Accordion.Header>
        <Accordion.Body>
         <BehaviouralView data={_behavioural}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>Usage Profile</Accordion.Header>
        <Accordion.Body>
         <UsageView data={_usage}/>
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
