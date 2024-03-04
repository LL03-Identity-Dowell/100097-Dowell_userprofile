import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import { useDispatch, useSelector } from "react-redux";
import { getprofiledetails } from "../../store/slice/profiledataSlice";
import { Spinner } from "react-bootstrap";
const LinkedInProfile = (userData) => {
	const currentstate = useSelector((state) => state.profile[0]);
	const dispatch = useDispatch();
	const linkedinLink_value = userData.linkedinLink;
	console.log(linkedinLink_value);
	const userName = userData.userData.userData.userData.userinfo.username;

	const [formInputs, setFormInputs] = useState({
		linkedInProfile: linkedinLink_value,
	});
	const [loading, setLoading] = useState(false);

	const handleOnChange = (e) => {
		setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
		console.log(formInputs.link);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		// Validate the input field
		if (!formInputs.linkedInProfile) {
			toast.error("LinkedIn profile URL is required");
			setLoading(false);
			return;
		}
		const data = {
			Username: userName,
			Linkedin: formInputs.linkedInProfile,
		};

		console.log(data);
		try {
			const response = await fetch(
				"https://100097.pythonanywhere.com/Reference_form",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData);

				toast.success("success");

				const updatedUser = {
					...currentstate,
					reference: {
						...currentstate.reference,
						Linkedin: formInputs.linkedInProfile,
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
	console.log("linkedinLink_value");
	return (
		<div>
			<ToastContainer position="top-right" />
			<iframe
				width="100%"
				height="450"
				loading="lazy"
				allowfullscreen
				referrerpolicy="no-referrer-when-downgrade"
				src={linkedinLink_value}
				sandbox="allow-scripts allow-same-origin"
			></iframe>
			<Iframe src={linkedinLink_value} width="100%" height="100%" />
			<Button
				className="mb-5"
				variant="dark"
				size="sm"
				onClick={() => {
					window.open(linkedinLink_value, "_blank");
				}}
			>
				My LinkedIn Profile
			</Button>
			<Form>
				<Form.Group className="mb-3" controlId="linkedInProfile">
					<Form.Label className="labelsStyle">Linked In Profile</Form.Label>
					<Form.Control
						className="inputStyle"
						type="text"
						placeholder="Enter linked in profile url"
						onChange={handleOnChange}
						id="linkedInProfile"
						value={formInputs.linkedInProfile}
					/>
				</Form.Group>
				<Button onClick={handleSubmit} variant="dark" className="" size="lg">
					{loading ? (
						<Spinner animation="border" size="sm" variant="light" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						"Update Your Linkedin Profile"
					)}
				</Button>
			</Form>
		</div>
	);
};

export default LinkedInProfile;
