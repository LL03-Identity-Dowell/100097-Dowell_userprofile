import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { getprofiledetails } from '../../store/slice/profiledataSlice';
import { Spinner } from "react-bootstrap";
const YoutubeProfile = (userData) => {

    const currentstate = useSelector((state) => state.profile[0]);
		const dispatch = useDispatch();
  const userName = userData.userData.userData.userData.userinfo.username;
  const profileLink= userData.youtubeLink
 
  const [formInputs, setFormInputs] = useState({
    youtubeProfile: profileLink,
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formInputs.youtubeProfile) {
      toast.error("Youtube Profile URL is required");
      setLoading(false);
      return; 
    }
    const data = {
      Username:userName,
      Youtube: formInputs.youtubeProfile,
     
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
							Youtube: formInputs.youtubeProfile,
						},
					};

					const newState = [updatedUser];
					dispatch(getprofiledetails(newState));
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
			<ToastContainer position="top-right" />
		  {
			  profileLink!=="" && profileLink!==undefined?(<>	<iframe
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
				My Youtube Profile
			</Button></>):(<div className='mb-3'>Your Profile information is not available, update this to view</div>)
		}

			<Form>
				<Form.Group className="mb-3" controlId="youtubeProfile">
					<Form.Label className="labelsStyle">Youtube Profile</Form.Label>
					<Form.Control
						className="inputStyle"
						type="text"
						placeholder="Enter youtube profile url"
					  onChange={handleOnChange}
					  value={formInputs.youtubeProfile}
					  id='youtubeProfile'
					/>
				</Form.Group>
				<Button variant="dark" className="" onClick={handleSubmit} size="lg">
					{loading ? (
						<Spinner animation="border" size="sm" variant="light" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						"Update Your youtube Profile"
					)}
				</Button>
			</Form>
		</div>
	);
}

export default YoutubeProfile
