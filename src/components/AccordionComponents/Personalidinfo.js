import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

const Personalidinfo = (props) => {
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
											? props.data.faceID
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
											? props.data.biometricID
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
											? props.data.IDcard1
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
											? props.data.IDcard2
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
											? props.data.IDcard3
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
											? props.data.IDcard4
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
											? props.data.IDcard5
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
											? props.data.signature
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
