import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import MyProfileView from "./AccordionComponents/MyProfileView";
import DeviceIDView from "./AccordionComponents/DeviceIDView";
import BehaviouralView from "./AccordionComponents/BehaviouralView";
import UsageView from "./AccordionComponents/UsageView";
import GeographicView from "./AccordionComponents/GeographicView";
import PsychographicProfileView from "./AccordionComponents/PsychographicProfileView";
import DemographicView from "./AccordionComponents/DemographicView";
import Workspace from "./AccordionComponents/Workspace";
import Personalidinfo from "./AccordionComponents/Personalidinfo";
import ReferenceView from "./AccordionComponents/ReferenceView";
import Paswordview from "./AccordionComponents/Paswordview";
import Sectionview from "./AccordionComponents/Sectionviewdata";
import IdVerificationView from "./AccordionComponents/IdVerificationView";
import { useDispatch, useSelector } from "react-redux";
import { getidverify } from "../store/slice/idverify";
import Loader from "./Loader";
import { getprofiledetails } from "../store/slice/profiledataSlice";
const AccordionList = (profileData) => {
	const profiledata = profileData.profileData;

	const [isOpen, setIsOpen] = useState(false);
	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	const dispatch = useDispatch();

	const username = useSelector((state) => state.user.userinfo.username);
	const Userid = useSelector((state) => state.user.userinfo.userID);

	const storedSessionId = sessionStorage.getItem("session_id");
	const idverify = useSelector((state) => state.idverify);
	const profileidata = useSelector((state) => state.profile);

	const handleIdVerificationSelection = () => {
		const idverifyhandle = async () => {
			const formData = {
				username: username,
				session_id: storedSessionId,
			};
			console.log(formData);
			const Options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			};

			try {
				const response = await fetch(
					"https://100097.pythonanywhere.com/get_user_idverifications",
					Options
				);
				const responseData = await response.json();

				if (response.ok) {
					if (responseData.data.phone_Verification !== undefined) {
						console.log(responseData);

						dispatch(getidverify(responseData.data));
					} else {
						dispatch(
							getidverify({
								phone_Verification: "Not_Started",
								email_Verification: "Not_Started",
								voiceID_Verification: "Not_Started",
								faceID_Verification: "Not_Started",
								biometricID_Verification: "Not_Started",
								videoID_Verification: "Not_Started",
								idCard1_Verification: "Not_Started",
								idCard2_Verification: "Not_Started",
								idCard3_Verification: "Not_Started",
								idCard4_Verification: "Not_Started",
								idCard5_Verification: "Not_Started",
								signature_Verification: "Not_Started",
								socialMedia_Verification: "Not_Started",
								personalReference_Verification: "Not_Started",
								personal_Verification_By_Witness: "Not_Started",
								organisation_Verification: "Not_Started",
							})
						);
					}
				}
			} catch (error) {
				console.error("Error submitting :", error);
			}
		};

		if (idverify == null) {
			idverifyhandle();
		}
	};

	const handleprofileids = () => {
		const getprofileids = async () => {
			const formData = {
				Username: username,
				userID: Userid,
			};
			console.log(formData);
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

				dispatch(getprofiledetails(responseData));
				if (response.ok) {
					console.log(responseData, "getprofile");
					// alert('Form submitted successfully');
				} else {
					// alert('Form submission failed');
				}
			} catch (error) {
				console.error("Error submitting form:", error);
			}
		};
		if (profileidata == null) {
			getprofileids();
		}
	};

	return (
		<div>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>My Profile</Accordion.Header>
					<Accordion.Body>
						<MyProfileView data={profiledata} />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Set Password</Accordion.Header>
					<Accordion.Body>
						{/* <Paswordview data={profileData}></Paswordview> */}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header onClick={handleprofileids}>
						Device IDs
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<DeviceIDView data={profileidata[0].deviceIDs} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header onClick={handleprofileids}>
						Personal IDs
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<Personalidinfo data={profileidata[0].personalids} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="4">
					<Accordion.Header onClick={handleprofileids}>
						References
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<ReferenceView data={profileidata[0].reference} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="5">
					<Accordion.Header onClick={handleIdVerificationSelection}>
						ID Verification
					</Accordion.Header>
					<Accordion.Body>
						{idverify !== null ? <IdVerificationView /> : <Loader />}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="6">
					<Accordion.Header onClick={handleprofileids}>
						My Workspace
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<Workspace data={profileidata[0].myworkspace} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="7">
					<Accordion.Header onClick={handleprofileids}>
						Geographic Profile
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<GeographicView data={profileidata[0].geographic} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="8">
					<Accordion.Header onClick={handleprofileids}>
						Demographic Profile
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<DemographicView data={profileidata[0].demographic} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="9">
					<Accordion.Header onClick={handleprofileids}>
						Psychographic Profile
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<PsychographicProfileView data={profileidata[0].psychographic} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="10">
					<Accordion.Header onClick={handleprofileids}>
						Behavioural Profile
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<BehaviouralView data={profileidata[0].behavioural} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="11">
					<Accordion.Header onClick={handleprofileids}>
						Usage Profile
					</Accordion.Header>
					<Accordion.Body>
						{profileidata !== null ? (
							<UsageView data={profileidata[0].usage} />
						) : (
							<Loader />
						)}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="12">
					<Accordion.Header>Section Permissions</Accordion.Header>
					<Accordion.Body>
						<Sectionview />
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default AccordionList;
