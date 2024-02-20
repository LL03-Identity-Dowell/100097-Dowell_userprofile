import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { getprofiledetails } from '../../store/slice/profiledataSlice';
import { Spinner } from "react-bootstrap";
const PersonalReferences5 = (userData) => {
   const currentstate = useSelector((state) => state.profile[0]);
		const dispatch = useDispatch();
  const userName = userData.userData.userData.userData.userinfo.username;
  const profileLink= userData.perRefLink5
 
  const [formInputs, setFormInputs] = useState({
    personalRefernce5: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formInputs.personalRefernce5) {
      toast.error("Personal Reference 5 URL is required");
      setLoading(false);
      return; 
    }
    const data = {
      Username:userName,
      personal_reference_5: formInputs.personalRefernce5,
     
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
							personal_reference_5: formInputs.personalRefernce5,
						},
					};

					const newState = [updatedUser];
					dispatch(getprofiledetails(newState));
      } else {
        throw new Error(`Failed to submit Personal Refernece ID 5: ${response.status}`);
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
				Personal Reference 5
			</Button>

			<h3>
				Your Personal reference 5 (Name, email, phone, relationship, address)
				(the person will become member while accepting)
			</h3>
			<Form>
				<Form.Group className="mb-3" controlId="personalRefernce5">
					<Form.Label className="labelsStyle">
						Personal Reference5 Profile
					</Form.Label>
					<Form.Control
						className="inputStyle"
						type="text"
						placeholder="Enter Personal Reference5"
						onChange={handleOnChange}
					/>
				</Form.Group>
				<Button variant="dark" onClick={handleSubmit} className="" size="lg">
					{loading ? (
						<Spinner animation="border" size="sm" variant="light" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						"Update Your Personal Reference 5"
					)}
				</Button>
			</Form>
		</div>
	);
}

export default PersonalReferences5
