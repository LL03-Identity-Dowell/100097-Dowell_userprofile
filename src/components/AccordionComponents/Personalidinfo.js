import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

const Personalidinfo = (props) => {
	function getModifiedUrl(url) {
		const index = url.indexOf("/media");
		return url.substring(index);
	}		
	
	return (
		<>
			<ListGroup as="ul">
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								Voice ID
							</Col>
							<Col sm={9}>
								{props.data.voiceID !== "" ? (
									<audio src={getModifiedUrl(props.data.voiceID)} controls />
								) : (
									<Image
										className="img-fluid mb-4"
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
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								Face ID
							</Col>
							<Col sm={9}>
								<Image
									className="img-fluid mb-4"
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
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								Biometric ID
							</Col>
							<Col sm={9}>
								<Image
									className="img-fluid mb-4"
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
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								video ID
							</Col>
							<Col sm={9}>
								{props.data.videoID !== "" ? (
									<video
										src={getModifiedUrl(props.data.videoID)}
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
							</Col>
						</Row>
					</div>
				</ListGroup.Item>
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								ID Card 1
							</Col>
							<Col sm={9}>
								<Image
									className="img-fluid mb-4"
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
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								ID Card 2
							</Col>
							<Col sm={9}>
								<Image
									className="img-fluid mb-4"
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
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								ID Card 3
							</Col>
							<Col sm={9}>
								<Image
									className="img-fluid mb-4"
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
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								ID Card 4
							</Col>
							<Col sm={9}>
								<Image
									className="img-fluid mb-4"
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
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								ID Card 5
							</Col>
							<Col sm={9}>
								<Image
									className="img-fluid mb-4"
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
				<ListGroup.Item as="li">
					<div className="ms-2 me-auto">
						<Row className="align-items-center">
							<Col sm={3} className="fw-bold">
								Signature
							</Col>
							<Col sm={9}>
								<Image
									className="img-fluid mb-4"
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
			</ListGroup>
		</>
	);
};

export default Personalidinfo;
