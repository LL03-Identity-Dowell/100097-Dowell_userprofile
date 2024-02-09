import React, { useEffect, useState } from "react";
import NavigationMenu from "./NavigationMenu";
import Main from "./Main";
const Home = (data) => {
	const userData = data.userInfo;
	const profile = data.profileView;
	const all_forms_data = data.getResponse;
	const [sectiondata, setsectiondata] = useState(null);
	const storedSessionId = sessionStorage.getItem("session_id");

	useEffect(() => {
		const getsectiondata = async () => {
			const formData = {
				username: profile.Username,
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
					"https://100097.pythonanywhere.com/get_user_sections",
					Options
				);
				const responseData = await response.json();
				setsectiondata(responseData);
				if (response.ok) {
					console.log(responseData);
					// alert('Form submitted successfully');
				} else {
					// alert('Form submission failed');
				}
			} catch (error) {
				console.error("Error submitting form:", error);
			}
		};

		getsectiondata();
	}, [userData, storedSessionId]);
	return (
		<div>
			<NavigationMenu />
			<Main data={userData} profileData={profile} formsData={all_forms_data} />
		</div>
	);
};

export default Home;
