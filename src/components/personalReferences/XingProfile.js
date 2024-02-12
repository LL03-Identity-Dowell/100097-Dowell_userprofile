import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { getprofiledetails } from '../../store/slice/profiledataSlice';

const XingProfile = (userData) => {


    const currentstate = useSelector((state) => state.profile[0]);
		const dispatch = useDispatch();

  const userName = userData.userData.userData.userData.userinfo.username;
  const profileLink= userData.xingLink
 
  const [formInputs, setFormInputs] = useState({
    xingProfile: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formInputs.xingProfile) {
      toast.error("Xing Profile URL is required");
      setLoading(false);
      return; 
    }
    const data = {
      Username:userName,
      xing_profile: formInputs.xingProfile,
     
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

         const updatedUser = {
						...currentstate,
						reference: {
							...currentstate.reference,
							xing_profile: formInputs.xingProfile,
						},
					};

					const newState = [updatedUser];
					dispatch(getprofiledetails(newState));
      } else {
        throw new Error(`Failed to submit Xing IDs: ${response.status}`);
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
          width="100%"
          height="450"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={profileLink}>
        </iframe>
        <Button className='mb-5' variant="dark" size="sm" onClick={() => {window.open(profileLink, '_blank');}}>My Xing Profile</Button>    

            <Form>
        <Form.Group className="mb-3" controlId="xingProfile">
          <Form.Label className='labelsStyle'>Xing Profile</Form.Label>
          <Form.Control className='inputStyle' onChange={handleOnChange} type="text" placeholder='Enter Xing profile url'/>
        </Form.Group> 
            <Button variant="dark" onClick={handleSubmit} size="lg">{loading? "updating": "Update Your Xing Profile"}</Button>
         </Form> 
    </div>
  )
}

export default XingProfile
