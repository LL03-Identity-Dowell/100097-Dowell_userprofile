import { data } from "autoprefixer";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
	Card,
	CardImg,
	CardBody,
	CardText,
	Button,
	Form,
} from "react-bootstrap";
const CardGrid = (props) => {
	return (
		<div>
			<div className="card-container mt-5">
				<NestedCard section="section1" formdata={props.data} />
				<NestedCard section="section2" formdata={props.data} />
				<NestedCard section="section3" formdata={props.data} />
			</div>
			<div className="card-container mt-5">
				<NestedCard section="section4" formdata={props.data} />
				<NestedCard section="section5" formdata={props.data} />
				<NestedCard section="section6" formdata={props.data} />
			</div>
		</div>
	);
};

export default CardGrid;

function NestedCard(props) {
	const [isExpanded, setIsExpanded] = useState(false);
	console.log(props.section);
	console.log("insideform", props.formdata.userID);

	const [permissions, setPermissions] = useState({
		MyProfile: false,
		VerifyUsername_Password_Strength: false,
		DeviceDetails: false,
		PersonalIDs: false,
		PersonalReferences: false,
		IDVerification_Status: false,
		OrganisationDetails: false,
		GeographicProfile: false,
		DemographicProfile: false,
		PsychographicProfile: false,
		BehaviouralProfile: false,
		UsageProfile: false,
	});
	const [updating, setUpdating] = useState(false);
	const handleCheckboxChange = (checkboxId) => {
		setPermissions((prevPermissions) => ({
			...prevPermissions,
			[checkboxId]: !prevPermissions[checkboxId],
		}));
	};

	const handleUpdatePermissionClick = async () => {
		setUpdating(true);
		try {
			const apiUrl = "https://100097.pythonanywhere.com/update_permissions";
			const response = await fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userID: props.formdata.userID,
					username: props.formdata.username,
					section: {
						Section_Name: props.section,
						...permissions,
					},
				}),
			});

			// Handle the response as needed
			if (response.ok) {
				toast.success("Success");
				setUpdating(false);
			} else {
				toast.error("Failed to update permission");
				console.log(response)
				setUpdating(false);
			}
		} catch (error) {
			console.error("Error updating permissions:", error);
			setUpdating(false);
		}
	};

	return (
		<>
			<ToastContainer position="top-right" />
			<Card
				onMouseEnter={() => setIsExpanded(true)}
				onMouseLeave={() => setIsExpanded(false)}
				className={`position-relative card-profile-inner ${
					isExpanded ? "expanded" : ""
				}`}
			>
				{!isExpanded && (
					<CardImg variant="top" src="/images/org-logo-3.png" alt="Image" />
				)}

				<CardBody className={`p-4 ${isExpanded ? "p-4" : ""}`}>
					{isExpanded && (
						<Form className="form_card">
							<CardText>
								<p>&#60;Organisation Name Owner&gt;</p>
							</CardText>
							<Form.Check
								type="checkbox"
								id="myprofile1"
								label="Section 01 - My Profile"
								checked={permissions.MyProfile}
								onChange={() => handleCheckboxChange("MyProfile")}
							/>

							<Form.Check
								type="checkbox"
								id="myprofile2"
								label="Section 02 - Verify Username & Password Strength"
								checked={permissions.VerifyUsername_Password_Strength}
								onChange={() =>
									handleCheckboxChange("VerifyUsername_Password_Strength")
								}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile3"
								label="Section 03 - Device Details"
								checked={permissions.DeviceDetails}
								onChange={() => handleCheckboxChange("DeviceDetails")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile4"
								label="Section 04 - Personal IDs"
								checked={permissions.PersonalIDs}
								onChange={() => handleCheckboxChange("PersonalIDs")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile5"
								label="Section 05 - Personal References"
								checked={permissions.PersonalReferences}
								onChange={() => handleCheckboxChange("PersonalReferences")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile6"
								label="Section 06 - ID Verification Status"
								checked={permissions.IDVerification_Status}
								onChange={() => handleCheckboxChange("IDVerification_Status")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile7"
								label="Section 07 - Organisation Details"
								checked={permissions.OrganisationDetails}
								onChange={() => handleCheckboxChange("OrganisationDetails")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile8"
								label="Section 08 - Geographic Profile"
								checked={permissions.GeographicProfile}
								onChange={() => handleCheckboxChange("GeographicProfile")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile9"
								label="Section 09 - Demographic Profile"
								checked={permissions.DemographicProfile}
								onChange={() => handleCheckboxChange("DemographicProfile")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile10"
								label="Section 10 - Psychographic Profile"
								checked={permissions.PsychographicProfile}
								onChange={() => handleCheckboxChange("PsychographicProfile")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile11"
								label="Section 11 - Behavioural Profile"
								checked={permissions.BehaviouralProfile}
								onChange={() => handleCheckboxChange("BehaviouralProfile")}
							/>
							<Form.Check
								type="checkbox"
								id="myprofile12"
								label="Section 12 - Usage Profile"
								checked={permissions.UsageProfile}
								onChange={() => handleCheckboxChange("UsageProfile")}
							/>
							<Button variant="dark" onClick={handleUpdatePermissionClick}>
								{updating ? "Updating..." : "Update Permission"}
							</Button>
						</Form>
					)}
				</CardBody>
			</Card>
		</>
	);
}
