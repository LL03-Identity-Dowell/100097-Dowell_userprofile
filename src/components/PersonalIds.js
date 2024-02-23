import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import VoiceId from "./Personal IDs/VoiceId";
import FaceId from "./Personal IDs/FaceId";
import BiometricId from "./Personal IDs/BiometricId";
import VideoId from "./Personal IDs/VideoId";
import SignatureId from "./Personal IDs/SignatureId";
import IdCard1 from "./Personal IDs/IdCard1";
import IdCard2 from "./Personal IDs/IdCard2";
import IdCard3 from "./Personal IDs/IdCard3";
import IdCard4 from "./Personal IDs/IdCard4";
import IdCard5 from "./Personal IDs/IdCard5";

const PersonalIds = (props) => {
	const userInfo = props.userData;
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div>
			<Container>
				<p className="myProfile text-white fw-bold text-center">
					01. Personal References
				</p>
				<Row className="p-5">
					<Col lg={3}>
						<Row>
							<Col>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("voiceid")}
								>
									Voice ID
								</Button>
								<i className="bi bi-caret-right-fill"></i>

								<Button
									className="personalBtn"
									onClick={() => handleTabClick("faceid")}
								>
									Face ID
								</Button>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("biometricid")}
								>
									Biometric ID
								</Button>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("videoid")}
								>
									Video ID
								</Button>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("idCard1")}
								>
									ID Card 1
								</Button>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("idCard2")}
								>
									ID Card 2
								</Button>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("idCard3")}
								>
									ID Card 3
								</Button>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("idCard4")}
								>
									ID Card 4
								</Button>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("idCard5")}
								>
									ID Card 5
								</Button>
								<Button
									className="personalBtn"
									onClick={() => handleTabClick("signature")}
								>
									Signature
								</Button>
							</Col>
						</Row>
					</Col>
					<Col lg={9}>
						<div>
							{activeTab === "voiceid" && (
								<div>
									<VoiceId userInfo={userInfo} />
								</div>
							)}
							{activeTab === "faceid" && (
								<div>
									<FaceId userInfo={userInfo} />
								</div>
							)}
							{activeTab === "biometricid" && (
								<div>
									<BiometricId userInfo={userInfo} />
								</div>
							)}
							{activeTab === "videoid" && (
								<div>
									<VideoId userInfo={userInfo} />
								</div>
							)}
							{activeTab === "idCard1" && (
								<div>
									<IdCard1 userInfo={userInfo} />
								</div>
							)}
							{activeTab === "idCard2" && (
								<div>
									<IdCard2 userInfo={userInfo} />
								</div>
							)}
							{activeTab === "idCard3" && (
								<div>
									<IdCard3 userInfo={userInfo} />
								</div>
							)}
							{activeTab === "idCard4" && (
								<div>
									<IdCard4 userInfo={userInfo} />
								</div>
							)}
							{activeTab === "idCard5" && (
								<div>
									<IdCard5 userInfo={userInfo} />
								</div>
							)}
							{activeTab === "signature" && (
								<div>
									<SignatureId userInfo={userInfo} />
								</div>
							)}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PersonalIds;
