import React from "react";
import NavigationMenu from "./NavigationMenu";
import Main from "./Main";
const Home = (data) => {
	const userData = data.userInfo;
	
	

	return (
		<div>
			<NavigationMenu />
			<Main data={userData}   />
		</div>
	);
};

export default Home;
