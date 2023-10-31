import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import CardGrid from "./CardGrid";
import CurrentVersionsTab from './CurrentVersionsTab'
import AccordionList from "./AccordionList";

const SideContent = (userData) => {
  console.log("side",userData)
  const profileData = userData.profileData
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const accordionList = [
    "My Profile",
    "Set Password",
    "Device IDs",
    "Personal IDs",
    "References",
    "ID Verification",
    "My Organisation",
    "Geographic Profile",
    "Demographic Profile",
    "Psychographic Profile",
    "Behavioural Profile",
    "Usage Profile",
    "Section Permissions",
  ];
  return (
    <div>
      <p className="sideContentHead text-center p-4">
       {userData.userData.userinfo.first_name}  {userData.userData.userinfo.last_name} My Profile – Selected Version [V9998]
      </p>
     <AccordionList profileData={profileData}/>

      <hr className="hr" />
      {/* profile tagline  */}
      <p className="myProfile text-white fw-bold text-center">
        Profile permissions to other organisations
      </p>
      <p className="subHeading fst-italic fw-bold">
        Disclaim Third Party Liability
      </p>
      <p className="subHeading fst-italic">
        Dowell may share your personal data with other entities, in the context
        of providing the services required. Other entities or third parties are
        required to take appropriate security measures to protect your personal
        data in line with our policies.
        <br />
        However, we will not, in any circumstances, share your personal
        information with other individuals or organizations without your
        permission, including public organizations, corporations, or
        individuals, except when applicable by law. We do not sell, communicate
        or divulge your information to any mailing lists. In this last case, you
        may at any time ask us to remove your name from such lists.
        <br />
        The only exception is if the law or a court order compels us to. We will
        share your information with government agencies if they need or request
        it as per applicable laws or requirements through official channels.
        <br />
        We may share your personal data with third parties where required by
        law, where it is necessary for one of the activities mentioned above, or
        where we have another legitimate legal basis for doing so. We require
        third parties, public organizations, corporations, individuals, or
        Government agencies to respect the security of your data and to treat it
        in accordance with the law. Dowell won’t be responsible in any case for
        the misuse, losses, or damages to any information that may directly or
        indirectly incur or suffer due to any unauthorized activities conducted
        by the party, as explained above, and may incur criminal or civil
        Liability.
        <br />
        You acknowledge and agree that Dowell is not responsible for Third Party
        Services and that Dowell makes no representations or warranties
        regarding Third Party Services.
      </p>
      <Form>
        <div>
          <Form.Check
            type="checkbox"
            id="agree"
            label="Agree"
            className="subHeading fst-italic"
          />
        </div>
    </Form>
    <CardGrid/>
    <hr className="hr" />
      {/* Edit Current Verions tagline */}
      <p className="myProfile text-white fw-bold text-center">
        Edit Current Version [9999] of My Profile
      </p>
      <CurrentVersionsTab userData={userData} profileData={profileData}/>
    </div>
  );
};

export default SideContent;
