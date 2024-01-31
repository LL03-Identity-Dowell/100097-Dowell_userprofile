import React from "react";
import { Image } from "react-bootstrap";


const Personalidinfo = (props) => {
	
	return (
		<>
			<table className="personal-id-table">
				<tbody>
					<tr key="" className="light-background">
						<td className="first-column">Voice ID</td>
						<td className="second-column">
							{props.data.voiceID !== "" ? (
								<audio src={props.data.voiceID} controls />
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
						<td className="first-column">Face ID</td>
						<td className="second-column">
							<Image
								className="img-fluid mb-4"
								src={
									props.data.faceID !== ""
										? props.data.faceID
										: "/images/samanta.webp"
								}
								alt="faceid"
								width={300}
								height={200}
							/>
						</td>
					</tr>
					<tr key="" className="light-background">
						<td className="first-column">Biometric ID</td>
						<td className="second-column">
							<Image
								className="img-fluid mb-4"
								src={
									props.data.biometricID !== ""
										? props.data.biometricID
										: "/images/samanta.webp"
								}
								alt="bioid"
								width={300}
								height={200}
							/>
						</td>
					</tr>

					<tr key="" className="full-background">
						<td className="first-column">Video ID</td>
						<td className="second-column">
							{props.data.videoID !== "" ? (
								<video
									src={props.data.videoID}
									alt="faceid"
									width={300}
									height={200}
									controls
								/>
							) : (
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="bioid"
									width={300}
									height={200}
								/>
							)}
						</td>
					</tr>
					<tr key="" className="light-background">
						<td className="first-column"> ID Card 1</td>
						<td className="second-column">
							<Image
								className="img-fluid mb-4"
								src={
									props.data.IDcard1 !== ""
										? props.data.IDcard1
										: "/images/samanta.webp"
								}
								alt="bioid"
								width={300}
								height={200}
							/>
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column"> ID Card 2</td>
						<td className="second-column">
							<Image
								className="img-fluid mb-4"
								src={
									props.data.IDcard2 !== ""
										? props.data.IDcard2
										: "/images/samanta.webp"
								}
								alt="bioid"
								width={300}
								height={200}
							/>
						</td>
					</tr>
					<tr key="" className="light-background">
						<td className="first-column"> ID Card 3</td>
						<td className="second-column">
							<Image
								className="img-fluid mb-4"
								src={
									props.data.IDcard3 !== ""
										? props.data.IDcard3
										: "/images/samanta.webp"
								}
								alt="bioid"
								width={300}
								height={200}
							/>
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column"> ID Card 4</td>
						<td className="second-column">
							<Image
								className="img-fluid mb-4"
								src={
									props.data.IDcard4 !== ""
										? props.data.IDcard4
										: "/images/samanta.webp"
								}
								alt="bioid"
								width={300}
								height={200}
							/>
						</td>
					</tr>
					<tr key="" className="light-background">
						<td className="first-column"> ID Card 5</td>
						<td className="second-column">
							<Image
								className="img-fluid mb-4"
								src={
									props.data.IDcard5 !== ""
										? props.data.IDcard5
										: "/images/samanta.webp"
								}
								alt="bioid"
								width={300}
								height={200}
							/>
						</td>
					</tr>
					<tr key="" className="full-background">
						<td className="first-column"> Signature</td>
						<td className="second-column">
							<Image
								className="img-fluid mb-4"
								src={
									props.data.signature !== ""
										? props.data.signature
										: "/images/samanta.webp"
								}
								alt="bioid"
								width={300}
								height={200}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Personalidinfo;
