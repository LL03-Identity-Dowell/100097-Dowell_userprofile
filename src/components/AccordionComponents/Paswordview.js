import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
const Paswordview = (props) => {
	console.log(props.data.profileData)
	 const [showPassword, setShowPassword] = useState(false);
		

		const handleShowPassword = () => {
			setShowPassword(!showPassword);
		};
	return (
		<>
			{/* <table className="personal-id-table">
				<tbody>
					<tr key="" className="light-background">
						<td className="first-column">Password</td>
						<td className="second-column">
							<span>
								{showPassword
									? props.data.profileData.Password
									: props.data.profileData.Password.replace(/./g, "*")}
							</span>

							<span className="ms-2">
								{showPassword ? (
									<FaEye onClick={handleShowPassword} size={19} />
								) : (
									<FaEyeSlash onClick={handleShowPassword} size={19} />
								)}
							</span>
						</td>
					</tr>
				</tbody>
			</table> */}
		</>
	);
};

export default Paswordview;
