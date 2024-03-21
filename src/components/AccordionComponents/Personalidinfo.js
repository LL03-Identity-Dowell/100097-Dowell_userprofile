import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";


const Personalidinfo = (props) => {
	function getModifiedUrl(url) {
		const index = url.indexOf("/media");
		return url.substring(index);
	}		
	console.log(props)
	
	return (
		<>
			{!Object.keys(props.data).every(
				(key) =>
					key === "_id" ||
					key === "username" ||
					key === "userID" ||
					props.data[key] === ""
			) ? (
				<>
					<ListGroup as="ul">
						{props.data.voiceID !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											Voice ID
										</Col>
										<Col xl={9} sm={12}>
											{props.data.voiceID !== "" ? (
												<audio
													className="audio-wrapper"
													src={getModifiedUrl(props.data.voiceID)}
													controls
												/>
											) : (
												<Image
													className="img-fluid mb-4 view-wrapper"
													src="/images/samanta.webp"
													alt="faceid"
													width={300}
													height={200}
												/>
											)}
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.faceID !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											Face ID
										</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={
													props.data.faceID !== ""
														? getModifiedUrl(props.data.faceID)
														: "/images/samanta.webp"
												}
												alt="faceid"
												width={300}
												height={200}
											/>
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.biometricID !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											Biometric ID
										</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={
													props.data.biometricID !== ""
														? getModifiedUrl(props.data.biometricID)
														: "/images/samanta.webp"
												}
												alt="bioid"
												width={300}
												height={200}
											/>
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.videoID !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											video ID
										</Col>
										<Col xl={9} sm={12}>
											{props.data.videoID !== "" ? (
												<video
													src={getModifiedUrl(props.data.videoID)}
													alt="faceid"
													className="video-wrapper"
													width={300}
													height={200}
													controls
												/>
											) : (
												<Image
													className="img-fluid mb-4 view-wrapper"
													src="/images/samanta.webp"
													alt="bioid"
													width={300}
													height={200}
												/>
											)}
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.IDcard1 !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											ID Card 1
										</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={
													props.data.IDcard1 !== ""
														? getModifiedUrl(props.data.IDcard1)
														: "/images/samanta.webp"
												}
												alt="bioid"
												width={300}
												height={200}
											/>
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.IDcard2 !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											ID Card 2
										</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={
													props.data.IDcard2 !== ""
														? getModifiedUrl(props.data.IDcard2)
														: "/images/samanta.webp"
												}
												alt="bioid"
												width={300}
												height={200}
											/>
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.IDcard3 !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											ID Card 3
										</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={
													props.data.IDcard3 !== ""
														? getModifiedUrl(props.data.IDcard3)
														: "/images/samanta.webp"
												}
												alt="bioid"
												width={300}
												height={200}
											/>
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.IDcard4 !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											ID Card 4
										</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={
													props.data.IDcard4 !== ""
														? getModifiedUrl(props.data.IDcard4)
														: "/images/samanta.webp"
												}
												alt="bioid"
												width={300}
												height={200}
											/>
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.IDcard5 !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											ID Card 5
										</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={
													props.data.IDcard5 !== ""
														? getModifiedUrl(props.data.IDcard5)
														: "/images/samanta.webp"
												}
												alt="bioid"
												width={300}
												height={200}
											/>
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}

						{props.data.signature !== "" ? (
							<ListGroup.Item as="li">
								<div className="ms-2 me-auto">
									<Row className="align-items-center">
										<Col xl={3} sm={12} className="fw-bold">
											Signature
										</Col>
										<Col xl={9} sm={12}>
											<Image
												className="img-fluid mb-4 view-wrapper"
												src={
													props.data.signature !== ""
														? getModifiedUrl(props.data.signature)
														: "/images/samanta.webp"
												}
												alt="bioid"
												width={300}
												height={200}
											/>
										</Col>
									</Row>
								</div>
							</ListGroup.Item>
						) : (
							""
						)}
					</ListGroup>
				</>
			) : (
				<div>
					Your Personal Ids information is not available, update this to view
				</div>
			)}
		</>
	);
};

export default Personalidinfo;
