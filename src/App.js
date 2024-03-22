import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getsections } from "./store/slice/sectionslice";
import { getidverify } from "./store/slice/idverify";
import { getprofiledetails } from "./store/slice/profiledataSlice";
import { getprofileview } from "./store/slice/profileviewSlice";
import { getuserdetails } from "./store/slice/userdataslice";

const App = () => {
	const searchParams = new URLSearchParams(window.location.search);
	let [userData, setUserData] = useState(null);
	
	
	const [sectiondata, setsectiondata] = useState(null);
	const [verifydata, setverifydata] = useState(null);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	useEffect(() => {
		const sessionID = searchParams.get("session_id");
		const apiUrl = "https://100014.pythonanywhere.com/api/userinfo/";
		const storedSessionId = sessionStorage.getItem("session_id");
		console.log(storedSessionId);
		if (storedSessionId) {
			console.log("not found in console");
			// Fetch user info using the stored session ID
			fetchUserInfo(apiUrl, storedSessionId);
		} else if (sessionID) {
			console.log("found");
			fetchUserInfo(apiUrl, sessionID);
			sessionStorage.setItem("session_id", sessionID); // Store session ID
		} else {
			console.log("not Found");
			// const redirectUrl = "https://100014.pythonanywhere.com/?redirect_url=http://127.0.0.1:3000";
			const redirectUrl =
				"https://100014.pythonanywhere.com/?redirect_url=https://100097.pythonanywhere.com/";

			if (typeof window !== "undefined") {
				window.location.href = redirectUrl;
			}
		}
	}, []);

	async function fetchUserInfo(url, id) {
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ session_id: id }),
			});

			const data = await response.json();

			dispatch(getuserdetails(data));
			console.log("user info", data);
			let user_name = data.userinfo.username;
			const user_id = data.userinfo.userID;
			console.log(user_name, user_id);
			getsectiondata(user_name,id);
			
			if (data.message === "You are logged out, Please login and try again!!") {
				navigate(
					"https://100014.pythonanywhere.com/en/?redirect_url=http://127.0.0.1:3000"
				);
			}
			// else {
			// 	navigate("src/components/Home.js");
			// }
			navigate("/");
		} catch (error) {
			console.error("Error fetching user info:", error);
		}
	}
	
	

	

	const getsectiondata = async (user_name, id) => {
		const formData = {
			username: user_name,
			session_id: id,
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
				"https://100097.pythonanywhere.com/get_user_sections",
				Options
			);
			const responseData = await response.json();

			if (response.ok) {
				if (responseData.data.section1 !== undefined) {
					console.log(responseData);

					dispatch(getsections(responseData.data));
				} else {
					dispatch(
						getsections({
							section1: {
								Section_Name: "section1",
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
							},
							section2: {
								Section_Name: "section2",
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
							},
							section3: {
								Section_Name: "section3",
								DeviceDetails: false,
								PersonalReferences: false,
								OrganisationDetails: false,
							},
							section4: {
								Section_Name: "section4",
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
							},
							section5: {
								Section_Name: "section5",
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
							},
							section6: {
								Section_Name: "section6",
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
							},
						})
					);
				}
			}
		} catch (error) {
			console.error("Error submitting ", error);
		}
	};

	
	
	const getuserdata = useSelector((state) => state.user);
	const sections = useSelector((state) => state.sections);

	useEffect(() => {
		

		

		setUserData(getuserdata);

		setsectiondata(sections);
	}, [  getuserdata, sections]);

	return   userData && sectiondata ? (
		<div>
			<ToastContainer position="top-right" />

			<Home
				userInfo={userData}
				
				
			/>
		</div>
	) : (
		<Loader />
	);
};

export default App;
