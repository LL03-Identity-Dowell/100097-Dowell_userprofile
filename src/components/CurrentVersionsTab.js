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
        {activeTab === 'tab3' && <div><DeviceID userData={userData.userData}/></div>}
        {activeTab === 'tab4' && <div><PersonalIds/></div>}
        {activeTab === 'tab5' && <div><PersonalReferences/></div>}
        {activeTab === 'tab6' && <div><IdVerification/></div>}
        {activeTab === 'tab7' && <div><MyOrganization/></div>}
        {activeTab === 'tab8' && <div><GeographicProfile userData={userData.userData}/></div>}
        {activeTab === 'tab9' && <div><DemographicProfile userData={userData.userData}/></div>}
        {activeTab === 'tab10' && <div><PsychographicProfile userData={userData.userData}/></div>}
        {activeTab === 'tab11' && <div><BehaviouralProfile userData={userData.userData}/></div>}
        {activeTab === 'tab12' && <div><UsageProfile/></div>}
      </div>
  
    </div>
  );
}

export default CurrentVersionsTab;
