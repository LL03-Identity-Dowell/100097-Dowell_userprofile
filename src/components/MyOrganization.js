import React, { useState, useEffect } from "react";
import { Container, Form, Col, Row, Button, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { getprofiledetails } from "../store/slice/profiledataSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
const MyOrganization = (userData) => {
	const myworkspace_info = userData._myworkspace;
	const user_id = userData._userId;
	const [myworkspace, setmyworkspace] = useState({});
	const [uploadedlogo, setuploadedlogo] = useState(null);

	const [loading, setLoading] = useState(false);
	const [formInputs, setFormInputs] = useState({
		pin: myworkspace_info ? myworkspace_info.PIN : "",
		city: myworkspace_info ? myworkspace_info.city : "",
		country: myworkspace_info ? myworkspace_info.country : "",
		latitude: myworkspace_info ? myworkspace_info.latitude : "",
		longitude: myworkspace_info ? myworkspace_info.longitude : "",
		organisation_address: myworkspace_info ? myworkspace_info.org_address : "",
		organisation_logo:myworkspace_info ? myworkspace_info.org_logo : "",
		workspace_Name: myworkspace_info ? myworkspace_info.workspace_name : "",
	});

	const userName = userData._username;
	const dispatch = useDispatch();
	const id = userData._userId;
	const handleOnChange = (e) => {
		setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
	};
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFormInputs({ ...formInputs, organisation_logo: file });
		setuploadedlogo(URL.createObjectURL(file))
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const myFormData = new FormData();

		myFormData.append("Username", userData._username);
		myFormData.append("userID", user_id);
		myFormData.append("workspace_name", formInputs.workspace_Name);
		myFormData.append("org_address", formInputs.organisation_address);
		myFormData.append("PIN", formInputs.pin);
		myFormData.append("city", formInputs.city);
		myFormData.append("country", formInputs.country);
		myFormData.append("org_logo", formInputs.organisation_logo);
		myFormData.append("latitude", formInputs.latitude);
		myFormData.append("longitude", formInputs.longitude);

		console.log([...myFormData]);
		try {
			const response = await fetch(
				"https://100097.pythonanywhere.com/myworkspace",
				{
					method: "POST",
					body: myFormData,
				}
			);

			if (response.ok) {
				const formData = {
					Username: userName,
					userID: id,
				};

				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				};

				try {
					const response = await fetch(
						"https://100097.pythonanywhere.com/getprofile",
						requestOptions
					);
					const responseData = await response.json();

					if (response.ok) {
						dispatch(getprofiledetails(responseData));

						toast.success("success");
					} else {
						// alert('Form submission failed');
					}
				} catch (error) {
					console.error("Error submitting form:", error);
				}
			} else {
				throw new Error(`Failed to update My Workspace: ${response.status}`);
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

			<p className="myProfile text-white fw-bold text-center">
				07. Your Workspace
			</p>
			<Form enctype="multipart/form-data" onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="workspace_Name">
					<Form.Label className="labelsStyle">Your Workspace</Form.Label>
					<Form.Control
						value={formInputs.workspace_Name}
						onChange={handleOnChange}
						className="inputStyle"
						type="text"
						placeholder="update your Workspace name"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="organisation_address">
					<Form.Label className="labelsStyle">Organisation Address</Form.Label>
					<Form.Control
						value={formInputs.organisation_address}
						onChange={handleOnChange}
						className="inputStyle"
						as="textarea"
						rows={3}
						placeholder="Enter your Workspace address"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="pin">
					<Form.Label className="labelsStyle">PIN/ZIP code</Form.Label>
					<Form.Control
						value={formInputs.pin}
						onChange={handleOnChange}
						className="inputStyle"
						type="text"
						placeholder="Enter PIN/ZIP code"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="city">
					<Form.Label className="labelsStyle">
						City of your Workspace
					</Form.Label>
					<Form.Control
						value={formInputs.city}
						onChange={handleOnChange}
						aria-label="city"
						className="inputStyle"
					/>
					{/* <option value="city1">City 1</option>
                        <option value="city2">City 2</option> */}
					{/* </Form.Select> */}
				</Form.Group>
				<Form.Group className="mb-3" controlId="country">
					<Form.Label className="labelsStyle">
						Country of your Workspace
					</Form.Label>
					<Form.Control
						value={formInputs.country}
						onChange={handleOnChange}
						aria-label="country"
						className="inputStyle"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="orgLogo">
					<Form.Label className="labelsStyle">Workspace Logo</Form.Label>
					<br />
					
					{
						uploadedlogo==null?(<Image
						src={formInputs.organisation_logo!==""?formInputs.organisation_logo:"/images/org-logo-3.png"}
						width={200}
						height={200}
						fluid
					/>):(<Image
						src={uploadedlogo}
						width={200}
						height={200}
						fluid
					/>)
					}
					{/* <Form.Control value={formInputs.organisation_logo} onChange={handleOnChange} className='inputStyle' as="textarea" rows={3}/> */}
				</Form.Group>
				<Form.Group controlId="organisation_logo" className="mb-3">
					<Form.Label className="labelsStyle">Upload new logo</Form.Label>
					<Form.Control
						name="image"
						onChange={handleFileChange}
						className="inputStyle"
						type="file"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="latitude">
					<Form.Label className="labelsStyle">Latitude of Workspace</Form.Label>
					<Form.Control
						value={formInputs.latitude}
						onChange={handleOnChange}
						className="inputStyle"
						type="text"
						placeholder="Latitude of the geo coordinates of organisation"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="longitude">
					<Form.Label className="labelsStyle">
						Longitude of Workspace
					</Form.Label>
					<Form.Control
						value={formInputs.longitude}
						onChange={handleOnChange}
						className="inputStyle"
						type="text"
						placeholder="Longitude of the geo coordinates of organisation"
					/>
				</Form.Group>
				<Button variant="dark" type="submit" className="w-100 btn mb-5">
					{loading ? (
						<Spinner animation="border" size="sm" variant="light" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						"Update Workspace Details"
					)}
				</Button>
			</Form>
		</div>
	);
};

export default MyOrganization;
