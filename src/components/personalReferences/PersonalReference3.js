import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { getprofiledetails } from '../../store/slice/profiledataSlice';
import { Spinner } from "react-bootstrap";
const PersonalReferences3 = (userData) => {
   const currentstate = useSelector((state) => state.profile[0]);
		const dispatch = useDispatch();
  const userName = userData.userData.userData.userData.userinfo.username;
  const profileLink= userData.perRefLink3
 
  const [formInputs, setFormInputs] = useState({
    personalRefernce3: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formInputs.personalRefernce3) {
      toast.error("Personal Reference 3 URL is required");
      setLoading(false);
      return; 
    }
    const data = {
      Username:userName,
      personal_reference_3: formInputs.personalRefernce3,
     
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
							personal_reference_3: formInputs.personalRefernce3,
						},
					};

					const newState = [updatedUser];
					dispatch(getprofiledetails(newState));
      } else {
        throw new Error(`Failed to submit Personal Refernece ID 3: ${response.status}`);
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
				Personal Reference 3
			</Button>

			<h3>
				Your Personal reference 3 (Name, email, phone, relationship, address)
				(the person will become member while accepting)
			</h3>
			<Form>
				<Form.Group className="mb-3" controlId="personalRefernce3">
					<Form.Label className="labelsStyle">
						Personal Reference3 Profile
					</Form.Label>
					<Form.Control
						className="inputStyle"
						type="text"
						placeholder="Enter Personal Reference3"
						onChange={handleOnChange}
					/>
				</Form.Group>
				<Button variant="dark" onClick={handleSubmit} className="" size="lg">
					{loading ? (
						<Spinner animation="border" size="sm" variant="light" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						"Update Your Personal Reference 3"
					)}
				</Button>
			</Form>
		</div>
	);
}

export default PersonalReferences3
