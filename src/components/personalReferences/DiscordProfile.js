import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const DiscordProfile = (userData) => {
  const userName = userData.userData.userData.userData.userinfo.username;
  const profileLink= userData.discordLink
 
  const [formInputs, setFormInputs] = useState({
    discordProfile: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
    console.log(formInputs.link)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   // Validate the input field
   if (!formInputs.discordProfile) {
    toast.error("Discord profile URL is required");
    setLoading(false);
    return; 
  }
    const data = {
      Username:userName,
      Discord: formInputs.discordProfile,
     
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

        <Button className='mb-5' variant="dark" size="sm" onClick={() => {window.open(profileLink, '_blank');}}>My Discord Profile</Button>    

   <Form>
        <Form.Group className="mb-3" controlId="discordProfile">
          <Form.Label className='labelsStyle'>Discord Profile</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder='Enter discord profile url'  onChange={handleOnChange}/>
        </Form.Group> 
                    <Button variant="dark" className='' onClick={handleSubmit}  size="lg">{loading ? "Updating..." :"Update Your Discord Profile"}</Button>
          </Form>
    </div>
  )
}

export default DiscordProfile
