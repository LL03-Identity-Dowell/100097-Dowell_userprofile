import React, { useState } from 'react';
import { Button , Container, Row , Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import MyProfileForm from './MyProfileForm';
import PersonalReferences from './PersonalReferences'
import DemographicProfile from './DemographicProfile'
import PsychographicProfile from './PsychographicProfile'
import SetPassword from './SetPassword'
import IdVerification from './IdVerification'
import DeviceID from './DeviceID'
import MyOrganization from './MyOrganization'
import BehaviouralProfile from './BehaviouralProfile'
import PersonalIds from './PersonalIds'
import GeographicProfile from './GeographicProfile'
import UsageProfile from './UsageProfile'


function CurrentVersionsTab(userData) {
  const [activeTab, setActiveTab] = useState('tab1');
const profiledata = userData.profileData
const forms_data = userData.formsData

if(userData){
    const all_forms = forms_data[0]; // Assuming there's only one object in the array

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
    }
// Now you can use these variables as needed in your code

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
          <Container>
      <Row>
        <Col sm={4}>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab1')}>01. My Profile
            </Button>
        
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab2')}>02. Set Password
            </Button>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab3')}>03. Device IDs
            </Button>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab4')}>04. Personal IDs
            </Button>
        </Col>
        <Col sm={4}>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab5')}>05. References
            </Button>
        
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab6')}>06. ID Verification
            </Button>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab7')}>07. My Organisation
            </Button>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab8')}>08. Geographic Profile
            </Button>
        </Col>
        <Col sm={4}>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab9')}>09. Demographic Profile
            </Button>
        
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab10')}>10. Psychographic Profile
            </Button>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab11')}>11. Behavioural Profile
            </Button>
            <Button className='tabBtn'
                onClick={() => handleTabClick('tab12')}>12. Usage Profile
            </Button>
        </Col>
      </Row>
    </Container>
     
       
        
    

      <div className="mt-3">
        {activeTab === 'tab1' && <div><MyProfileForm userData={userData.userData} formData={profiledata}/></div>}
        {activeTab === 'tab2' && <div><SetPassword userData={userData.userData}/></div>}
        {activeTab === 'tab3' && <div><DeviceID userData={userData.userData} _deviceIDs={_deviceIDs}/></div>}
        {activeTab === 'tab4' && <div><PersonalIds userData={userData.userData}/></div>}
        {activeTab === 'tab5' && <div><PersonalReferences userData={userData.userData} /></div>}
        {activeTab === 'tab6' && <div><IdVerification/></div>}
        {activeTab === 'tab7' && <div><MyOrganization/></div>}
        {activeTab === 'tab8' && <div><GeographicProfile userData={userData.userData} _geographic={_geographic}/></div>}
        {activeTab === 'tab9' && <div><DemographicProfile userData={userData.userData} _demographic={_demographic}/></div>}
        {activeTab === 'tab10' && <div><PsychographicProfile userData={userData.userData} _psychographic={_psychographic}/></div>}
        {activeTab === 'tab11' && <div><BehaviouralProfile userData={userData.userData} _behavioural={_behavioural}/></div>}
        {activeTab === 'tab12' && <div><UsageProfile userData={userData.userData} _usage={_usage}/></div>}
      </div>
  
    </div>
  );
}

export default CurrentVersionsTab;
