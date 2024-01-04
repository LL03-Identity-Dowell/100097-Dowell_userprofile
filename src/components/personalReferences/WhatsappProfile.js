import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const WhatsappProfile = (userData) => {
  const userName = userData.userData.userData.userData.userinfo.username;
  const profileLink= userData.whatsappLink
 
  const [formInputs, setFormInputs] = useState({
    whatsappProfile: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formInputs.whatsappProfile) {
      toast.error("Whatsapp Profile URL is required");
      setLoading(false);
      return; 
    }
    const data = {
      Username:userName,
      Whatsapp: formInputs.whatsappProfile,
     
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
        throw new Error(`Failed to submit youtube IDs: ${response.status}`);
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
              <Button className='mb-5' variant="dark" size="sm" onClick={() => {window.open(profileLink, '_blank');}}>My Whatsapp Profile</Button>    

          <Form>
        <Form.Group className="mb-3" controlId="whatsappProfile">
          <Form.Label className='labelsStyle'>Whatsapp Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter Whatsapp profile url' onChange={handleOnChange}/>
        </Form.Group> 
            <Button variant="dark" className='' onClick={handleSubmit} size="lg">{loading? "Updating": "Update Your Whatsapp Profile"}</Button>
        </Form>  
    </div>
  )
}

export default WhatsappProfile
