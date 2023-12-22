import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const DiscordProfile = (userData) => {
  const userName = userData.userData.userData.userData.userinfo.username;
 
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
  
    const data = {
      Username:userName,
     
      discord_profile: formInputs.discordProfile,
     
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
            src="https://twitter.com/DoWellResearch" 
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
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
