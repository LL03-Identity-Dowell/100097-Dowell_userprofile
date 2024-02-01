import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReferenceView = (props) => {
	
	return (
		<>
			<table className="refererce-id-table">
				<tbody>
					<tr key="" className="light-background">
						<td className="first-column">Facebook Profile</td>
						<td className="second-column">
							{props.data.Facebook_profile !== "" ? (
								<Link
									to={props.data.Facebook_profile}
									className="text-black-50"
								>
									{props.data.Facebook_profile}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>

					<tr key="" className="full-background">
						<td className="first-column">Discord Profile</td>
						<td className="second-column">
							{props.data.Discord !== "" ? (
								<Link to={props.data.Discord} className="text-black-50">
									{props.data.Discord}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Instagram Profile</td>
						<td className="second-column">
							{props.data.Instagram !== "" ? (
								<Link to={props.data.Instagram} className="text-black-50">
									{props.data.Instagram}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Linkedin Profile</td>
						<td className="second-column">
							{props.data.Linkedin !== "" ? (
								<Link to={props.data.Linkedin} className="text-black-50">
									{props.data.Linkedin}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Pinterest Profile</td>
						<td className="second-column">
							{props.data.Pinterest !== "" ? (
								<Link to={props.data.Pinterest} className="text-black-50">
									{props.data.Pinterest}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Reddit Profile</td>
						<td className="second-column">
							{props.data.Reddit !== "" ? (
								<Link to={props.data.Reddit} className="text-black-50">
									{props.data.Reddit}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Snapchat Profile</td>
						<td className="second-column">
							{props.data.Snapchat !== "" ? (
								<Link to={props.data.Snapchat} className="text-black-50">
									{props.data.Snapchat}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Tiktok Profile</td>
						<td className="second-column">
							{props.data.Tiktok !== "" ? (
								<Link to={props.data.Tiktok} className="text-black-50">
									{props.data.Tiktok}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Tumbir Profile</td>
						<td className="second-column">
							{props.data.Tumbir !== "" ? (
								<Link to={props.data.Tumbir} className="text-black-50">
									{props.data.Tumbir}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Twitter Profile</td>
						<td className="second-column">
							{props.data.Twitter !== "" ? (
								<Link to={props.data.Twitter} className="text-black-50">
									{props.data.Twitter}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Whatsapp Profile</td>
						<td className="second-column">
							{props.data.Whatsapp !== "" ? (
								<Link to={props.data.Whatsapp} className="text-black-50">
									{props.data.Whatsapp}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Youtube Profile</td>
						<td className="second-column">
							{props.data.Youtube !== "" ? (
								<Link to={props.data.Youtube} className="text-black-50">
									{props.data.Youtube}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Academia Profile</td>
						<td className="second-column">
							{props.data.academia_profile !== "" ? (
								<Link
									to={props.data.academia_profile}
									className="text-black-50"
								>
									{props.data.academia_profile}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Personal Reference 1 </td>
						<td className="second-column">
							{props.data.personal_reference_1 !== "" ? (
								<Link
									to={props.data.personal_reference_1}
									className="text-black-50"
								>
									{props.data.personal_reference_1}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="light-background">
						<td className="first-column">Personal Reference 2 </td>
						<td className="second-column">
							{props.data.personal_reference_2 !== "" ? (
								<Link
									to={props.data.personal_reference_2}
									className="text-black-50"
								>
									{props.data.personal_reference_2}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Personal Reference 3 </td>
						<td className="second-column">
							{props.data.personal_reference_3 !== "" ? (
								<Link
									to={props.data.personal_reference_3}
									className="text-black-50"
								>
									{props.data.personal_reference_3}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="light-background">
						<td className="first-column">Personal Reference 4 </td>
						<td className="second-column">
							{props.data.personal_reference_4 !== "" ? (
								<Link
									to={props.data.personal_reference_4}
									className="text-black-50"
								>
									{props.data.personal_reference_4}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="light-background">
						<td className="first-column">Personal Reference 5 </td>
						<td className="second-column">
							{props.data.personal_reference_5 !== "" ? (
								<Link
									to={props.data.personal_reference_5}
									className="text-black-50"
								>
									{props.data.personal_reference_5}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">xing profile </td>
						<td className="second-column">
							{props.data.xing_profile !== "" ? (
								<Link to={props.data.xing_profile} className="text-black-50">
									{props.data.xing_profile}
								</Link>
							) : (
								<span> You Don't have Profile Link</span>
							)}
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default ReferenceView;
