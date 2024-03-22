import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MyProfileForm from "./MyProfileForm";
import PersonalReferences from "./PersonalReferences";
import DemographicProfile from "./DemographicProfile";
import PsychographicProfile from "./PsychographicProfile";
import SetPassword from "./SetPassword";
import IdVerification from "./IdVerification";
import DeviceID from "./DeviceID";
import MyOrganization from "./MyOrganization";
import BehaviouralProfile from "./BehaviouralProfile";
import PersonalIds from "./PersonalIds";
import GeographicProfile from "./GeographicProfile";
import UsageProfile from "./UsageProfile";
import { useDispatch, useSelector } from "react-redux";
import { getprofiledetails } from "../store/slice/profiledataSlice";
import Loader from "./Loader";
import { getprofileview } from "../store/slice/profileviewSlice";

function CurrentVersionsTab(userData) {
	const [activeTab, setActiveTab] = useState();

	// Now you can use these variables as needed in your code

	const dispatch = useDispatch();

	const username = useSelector((state) => state.user.userinfo.username);
	const Userid = useSelector((state) => state.user.userinfo.userID);
	const profileidata = useSelector((state) => state.profile);
	const profileview = useSelector((state) => state.view);

	const handleTabClick = (tab) => {
		setActiveTab(tab);

		if (
			tab == "tab3" ||
			tab == "tab4" ||
			tab == "tab5" ||
			tab == "tab7" ||
			tab == "tab8" ||
			tab == "tab9" ||
			tab == "tab10" ||
			tab == "tab11" ||
			tab == "tab12"
		) {
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
		}

		if (tab == "tab1") {
			//user profile info api
			const handleSubmitProfile = async () => {
				const formData = {
					username: username,
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
						"https://100014.pythonanywhere.com/api/profile_view/",
						requestOptions
					);
					const responseData = await response.json();
					dispatch(getprofileview(responseData));

					if (response.ok) {
						// alert('Form submitted successfully');
					} else {
						// alert('Form submission failed');
					}
				} catch (error) {
					console.error("Error submitting form:", error);
				}
			};
			if (profileview == null) {
				handleSubmitProfile();
			}
		}
	};

	return (
		<div>
			<Container>
				<Row>
					<Col sm={4}>
						<Button className="tabBtn" onClick={() => handleTabClick("tab1")}>
							01. My Profile
						</Button>

						<Button className="tabBtn" onClick={() => handleTabClick("tab2")}>
							02. Set Password
						</Button>
						<Button className="tabBtn" onClick={() => handleTabClick("tab3")}>
							03. Device IDs
						</Button>
						<Button className="tabBtn" onClick={() => handleTabClick("tab4")}>
							04. Personal IDs
						</Button>
					</Col>
					<Col sm={4}>
						<Button className="tabBtn" onClick={() => handleTabClick("tab5")}>
							05. References
						</Button>

						<Button className="tabBtn" onClick={() => handleTabClick("tab6")}>
							06. ID Verification
						</Button>
						<Button className="tabBtn" onClick={() => handleTabClick("tab7")}>
							07. My Workspace
						</Button>
						<Button className="tabBtn" onClick={() => handleTabClick("tab8")}>
							08. Geographic Profile
						</Button>
					</Col>
					<Col sm={4}>
						<Button className="tabBtn" onClick={() => handleTabClick("tab9")}>
							09. Demographic Profile
						</Button>

						<Button className="tabBtn" onClick={() => handleTabClick("tab10")}>
							10. Psychographic Profile
						</Button>
						<Button className="tabBtn" onClick={() => handleTabClick("tab11")}>
							11. Behavioural Profile
						</Button>
						<Button className="tabBtn" onClick={() => handleTabClick("tab12")}>
							12. Usage Profile
						</Button>
					</Col>
				</Row>
			</Container>

			<div className="mt-3">
				{activeTab === "tab1" && (
					<div>
						{profileview !== null ? (
							<MyProfileForm
								userData={userData.userData}
								formData={profileview}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab2" && (
					<div>
						<SetPassword userData={userData.userData} />
					</div>
				)}
				{activeTab === "tab3" && (
					<div>
						{profileidata !== null ? (
							<DeviceID
								userData={userData.userData}
								_deviceIDs={profileidata[0].deviceIDs}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab4" && (
					<div>
						{profileidata !== null ? (
							<PersonalIds
								userData={userData.userData}
								personalids={profileidata[0].personalids}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab5" && (
					<div>
						{profileidata !== null ? (
							<PersonalReferences
								userData={userData.userData}
								_reference={profileidata[0].reference}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab6" && (
					<div>
						<IdVerification />
					</div>
				)}
				{activeTab === "tab7" && (
					<div>
						{profileidata !== null ? (
							<MyOrganization
								_myworkspace={profileidata[0].myworkspace}
								_userId={profileidata[0].userID}
								_username={profileidata[0].username}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab8" && (
					<div>
						{profileidata !== null ? (
							<GeographicProfile
								userData={userData.userData}
								_geographic={profileidata[0].geographic}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab9" && (
					<div>
						{profileidata !== null ? (
							<DemographicProfile
								userData={userData.userData}
								_demographic={profileidata[0].demographic}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab10" && (
					<div>
						{profileidata !== null ? (
							<PsychographicProfile
								userData={userData.userData}
								_psychographic={profileidata[0].psychographic}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab11" && (
					<div>
						{profileidata !== null ? (
							<BehaviouralProfile
								userData={userData.userData}
								_behavioural={profileidata[0].behavioural}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
				{activeTab === "tab12" && (
					<div>
						{profileidata !== null ? (
							<UsageProfile
								userData={userData.userData}
								_usage={profileidata[0].usage}
							/>
						) : (
							<Loader />
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default CurrentVersionsTab;
