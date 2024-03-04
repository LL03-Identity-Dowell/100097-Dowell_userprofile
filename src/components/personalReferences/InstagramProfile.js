import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { getprofiledetails } from '../../store/slice/profiledataSlice';
import { Spinner } from "react-bootstrap";
const InstagramProfile = (userData) => {
  const currentstate = useSelector((state) => state.profile[0]);
	const dispatch = useDispatch();
  const userName = userData.userData.userData.userData.userinfo.username;
  const profileLink= userData.instagramLink
 
  const [formInputs, setFormInputs] = useState({
    instagramProfile: profileLink,
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
    console.log(formInputs.instagramProfile)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
     // Validate the input field
     if (!formInputs.instagramProfile) {
      toast.error("Instagram profile URL is required");
      setLoading(false);
      return; 
    }
    const data = {
      Username:userName,
      Instagram:formInputs.instagramProfile
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
							Instagram: formInputs.instagramProfile,
						},
					};

					const newState = [updatedUser];
					dispatch(getprofiledetails(newState));
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
			<ToastContainer position="top-right" />
			<iframe
				width="100%"
				height="450"
				loading="lazy"
				allowfullscreen
				referrerpolicy="no-referrer-when-downgrade"
				src={profileLink}
			></iframe>
			<Button
				className="mb-5"
				variant="dark"
				size="sm"
				onClick={() => {
					window.open(profileLink, "_blank");
				}}
			>
				My Instagram Profile
			</Button>
			<Form>
				<Form.Group className="mb-3" controlId="instagramProfile">
					<Form.Label className="labelsStyle">Instagram Profile</Form.Label>
					<Form.Control
						className="inputStyle"
						type="text"
						placeholder="Enter instagram profile url"
					  onChange={handleOnChange}
					  value={formInputs.instagramProfile}
					  id='instagramProfile'
					/>
				</Form.Group>
				<Button variant="dark" className="" onClick={handleSubmit} size="lg">
					{loading ? (
						<Spinner animation="border" size="sm" variant="light" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						"Update Your Instagram Profile"
					)}
				</Button>
			</Form>
		</div>
	);
}

export default InstagramProfile
