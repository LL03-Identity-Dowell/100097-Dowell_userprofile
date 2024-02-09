import React from "react";
import NavigationMenu from "./NavigationMenu";
import Main from "./Main";
const Home = (data) => {
	const userData = data.userInfo;
	const profile = data.profileView;
	const all_forms_data = data.getResponse;

	return (
		<div>
			<NavigationMenu />
			<Main data={userData} profileData={profile} formsData={all_forms_data} />
		</div>
	);
};

export default Home;
