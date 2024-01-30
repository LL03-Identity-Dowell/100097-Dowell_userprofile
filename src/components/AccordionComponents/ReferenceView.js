import React from "react";
import { Image } from "react-bootstrap";

const ReferenceView = (props) => {
	console.log(props.data);
	return (
		<>
			<table className="refererce-id-table">
				<tbody>
					<tr key="" className="light-background">
						<td className="first-column">Facebook Profile</td>
						<td className="second-column">
							{props.data.Facebook_profile !== "" ? (
								<iframe
									width="100%"
									height="450"
									loading="lazy"
									allowfullscreen
									referrerpolicy="no-referrer-when-downgrade"
									src={props.data.Facebook_profile}
								></iframe>
							) : (
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="faceid"
									width={300}
									height={200}
								/>
							)}
						</td>
					</tr>

					<tr key="" className="full-background">
						<td className="first-column">Discord Profile</td>
						<td className="second-column">
							{props.data.Discord !== "" ? (
								<iframe
									width="100%"
									height="450"
									loading="lazy"
									allowfullscreen
									referrerpolicy="no-referrer-when-downgrade"
									src={props.data.Discord}
								></iframe>
							) : (
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="faceid"
									width={300}
									height={200}
								/>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Instagram Profile</td>
						<td className="second-column">
							{props.data.Instagram !== "" ? (
								<iframe
									width="100%"
									height="450"
									loading="lazy"
									allowfullscreen
									referrerpolicy="no-referrer-when-downgrade"
									src={props.data.Instagram}
								></iframe>
							) : (
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="faceid"
									width={300}
									height={200}
								/>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Linkedin Profile</td>
						<td className="second-column">
							{props.data.Linkedin !== "" ? (
								<iframe
									width="100%"
									height="450"
									loading="lazy"
									allowfullscreen
									referrerpolicy="no-referrer-when-downgrade"
									src={props.data.Linkedin}
								></iframe>
							) : (
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="faceid"
									width={300}
									height={200}
								/>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Pinterest Profile</td>
						<td className="second-column">
							{props.data.Pinterest !== "" ? (
								<iframe
									width="100%"
									height="450"
									loading="lazy"
									allowfullscreen
									referrerpolicy="no-referrer-when-downgrade"
									src={props.data.Pinterest}
								></iframe>
							) : (
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="faceid"
									width={300}
									height={200}
								/>
							)}
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column">Reddit Profile</td>
						<td className="second-column">
							{props.data.Reddit !== "" ? (
								<iframe
									width="100%"
									height="450"
									loading="lazy"
									allowfullscreen
									referrerpolicy="no-referrer-when-downgrade"
									src={props.data.Reddit}
								></iframe>
							) : (
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="faceid"
									width={300}
									height={200}
								/>
							)}
						</td>
					</tr>

					<tr key="" className="light-background">
						<td className="first-column">Snapchat Profile</td>
						<td className="second-column">
							{props.data.Snapchat !== "" ? (
								<iframe
									width="100%"
									height="450"
									loading="lazy"
									allowfullscreen
									referrerpolicy="no-referrer-when-downgrade"
									src={props.data.Snapchat}
								></iframe>
							) : (
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="faceid"
									width={300}
									height={200}
								/>
							)}
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default ReferenceView;
