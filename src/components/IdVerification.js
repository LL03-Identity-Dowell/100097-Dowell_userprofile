import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const IdVerification = (props) => {
  const idverify = useSelector((state) => state.idverify);
  
const [updating, setUpdating] = useState(false);


	const [verificationStatus, setVerificationStatus] = useState({
		phone_Verification: idverify.phone_Verification,
		email_Verification: idverify.email_Verification,
		voiceID_Verification: idverify.voiceID_Verification,
		faceID_Verification: idverify.faceID_Verification,
		biometricID_Verification: idverify.biometricID_Verification,
		videoID_Verification: idverify.videoID_Verification,
		idCard1_Verification: idverify.idCard1_Verification,
		idCard2_Verification: idverify.idCard2_Verification,
		idCard3_Verification: idverify.idCard3_Verification,
		idCard4_Verification: idverify.idCard4_Verification,
		idCard5_Verification: idverify.idCard5_Verification,
		signature_Verification: idverify.signature_Verification,
		socialMedia_Verification: idverify.socialMedia_Verification,
		personalReference_Verification: idverify.personalReference_Verification,
		personal_Verification_By_Witness: idverify.personal_Verification_By_Witness,
		organisation_Verification: idverify.organisation_Verification,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
setUpdating(true);
		try {
			const response = await fetch(
				"https://100097.pythonanywhere.com/update_permissions",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						userID: props.userData.formsData[0].userID,
						username: props.userData.formsData[0].username,
						idverification: verificationStatus,
					}),
				}
			);

			if (response.ok) {
        toast.success("Success");
        setUpdating(false);
			} else {
				toast.error("Failed to update permission");
        console.log(response);
        setUpdating(false);
			}
		} catch (error) {
      console.error("Error:", error);
      setUpdating(false);
		}
	};

	const handleRadioChange = (e) => {
		const { name, value } = e.target;
		setVerificationStatus((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div>
			<p className="myProfile text-white fw-bold text-center">
				06. ID Verification Status by AI
			</p>
			<Form className="p-4" onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Phone number verification using OTP</Form.Label>

					<div className="mb-3 d-flex gap-2">
						{[
							"Not_Started",
							"In_Progress",
							"Accepted_After_Verification",
							"Rejected_After_Verification",
						].map((status, index) => (
							<Form.Check
								key={index}
								name="phone_Verification"
								type="radio"
								id={`phone${index + 1}`}
								label={status}
								className="radioText"
								value={status}
								checked={verificationStatus.phone_Verification === status}
								onChange={handleRadioChange}
							/>
						))}
					</div>
				</Form.Group>

				{/* email verification using otp  */}
				<Form.Label className="labelsStyle">
					Email verification using OTP
				</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="email_Verification"
							type="radio"
							id={`email${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.email_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* voice id verification  */}
				<Form.Label className="labelsStyle">
					Voice ID verification using OTP
				</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="voiceID_Verification"
							type="radio"
							id={`voiceid${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.voiceID_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* Face id verification  */}
				<Form.Label className="labelsStyle">Face ID verification</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="faceID_Verification"
							type="radio"
							id={`faceid${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.faceID_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>

				{/* biometric id verification  */}
				<Form.Label className="labelsStyle">
					Biometric ID verification
				</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="biometricID_Verification"
							type="radio"
							id={`biometricid${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.biometricID_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* Video id verification  */}
				<Form.Label className="labelsStyle">Video ID verification</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="videoID_Verification"
							type="radio"
							id={`videoid${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.videoID_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* ID Card 1 verification  */}
				<Form.Label className="labelsStyle">ID Card 1 verification</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="idCard1_Verification"
							type="radio"
							id={`idCard1_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.idCard1_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* ID Card 2 verification  */}
				<Form.Label className="labelsStyle">ID Card 2 verification</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="idCard2_Verification"
							type="radio"
							id={`idCard2_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.idCard2_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* ID Card 3 verification  */}
				<Form.Label className="labelsStyle">ID Card 3 verification</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="idCard3_Verification"
							type="radio"
							id={`idCard3_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.idCard3_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* ID Card 4 verification  */}
				<Form.Label className="labelsStyle">ID Card 4 verification</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="idCard4_Verification"
							type="radio"
							id={`idCard4_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.idCard4_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* ID Card 5 verification  */}
				<Form.Label className="labelsStyle">ID Card 5 verification</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="idCard5_Verification"
							type="radio"
							id={`idCard5_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.idCard5_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* Signature verification  */}
				<Form.Label className="labelsStyle">Signature verification</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="signature_Verification"
							type="radio"
							id={`signature_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.signature_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* Socialmedia profile verification */}
				<Form.Label className="labelsStyle">
					Socialmedia profile verification
				</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="socialMedia_Verification"
							type="radio"
							id={`socialMedia_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.socialMedia_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/*Personal reference verification  */}
				<Form.Label className="labelsStyle">
					Personal reference verification
				</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="personalReference_Verification"
							type="radio"
							id={`personalReference_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={
								verificationStatus.personalReference_Verification === status
							}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* Personal verification by witness  */}
				<Form.Label className="labelsStyle">
					Personal verification by witness
				</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="personal_Verification_By_Witness"
							type="radio"
							id={`personal_Verification_By_Witness${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={
								verificationStatus.personal_Verification_By_Witness === status
							}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				{/* Organisation verification  */}
				<Form.Label className="labelsStyle">
					Organisation verification
				</Form.Label>
				<div className="mb-3 d-flex gap-2">
					{[
						"Not_Started",
						"In_Progress",
						"Accepted_After_Verification",
						"Rejected_After_Verification",
					].map((status, index) => (
						<Form.Check
							key={index}
							name="organisation_Verification"
							type="radio"
							id={`organisation_Verification${index + 1}`}
							label={status}
							className="radioText"
							value={status}
							checked={verificationStatus.organisation_Verification === status}
							onChange={handleRadioChange}
						/>
					))}
				</div>
				<Button variant="dark" type="submit" className="w-100 btn mb-3">
					{updating ? "Updating..." : "Update"}
				</Button>
			</Form>
		</div>
	);
};

export default IdVerification;
