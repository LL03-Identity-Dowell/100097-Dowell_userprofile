import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const LinkedInProfile = (userData) => {

  const userName = userData.userData.userData.userData.userinfo.username;
 
  const [formInputs, setFormInputs] = useState({
    linkedInProfile: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
    console.log(formInputs.link)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const data = {
      Username:userName,
      linkedin_profile: formInputs.linkedInProfile,
      facebook_profile:"",
      instagram_profile:"",
      twitter_profile: "",
      discord_profile: "",
      tiktok_profile: "",
      snapchat_profile: "",
      pinterest_profile: "",
      youtube_profile: "",
      whatsapp_profile: "",
      tumblr_profile: "",
      xing_profile: "",
      reddit_profile: "",
      academia_profile: "",
      personal_reference_1: "",
      personal_reference_2: "",
      personal_reference_3:"",
      personal_reference_4: "",
      personal_reference_5: "",
    };
  console.log(data)
    try {
      const response = await fetch("https://100097.pythonanywhere.com/Reference_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
  
        toast.success("success");
      } else {
        throw new Error(`Failed to submit device IDs: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
              <ToastContainer position="top-right"/>

        <iframe
            title="Embedded Webpage"
            src="https://www.linkedin.com/in/thomas-dowell/" 
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
    
          <Form>
        <Form.Group className="mb-3" controlId="linkedInProfile">
          <Form.Label className='labelsStyle'>Linked In Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter linked in profile url' onChange={handleOnChange}/>
        </Form.Group> 
            <Button onClick={handleSubmit} variant="dark" className='' size="lg" >{loading ? "Updating..." : "Update Your Linkedin Profile"}</Button>
        </Form>
    </div>
  )
}

export default LinkedInProfile
