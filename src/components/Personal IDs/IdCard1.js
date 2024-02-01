import React, { useEffect, useState } from "react";
import { Button, Image, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const IdCard1 = (props) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [updating, setUpdating] = useState(false);
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		// Check if a file is selected
		if (file) {
			if (file.type.startsWith("image/")) {
				setSelectedFile(file);
			} else {
				toast.info(
					"Please select a valid image file (JPEG, PNG, GIF, or SVG)."
				);
				event.target.value = null; 
			}
		}
	};
	const username = props.userInfo.profileData.Username;
	console.log(selectedFile);
	const handleSubmit = async () => {
		setUpdating(true);
		if (selectedFile) {
			console.log("Selected file:", selectedFile);
			const formData = new FormData();
			formData.append("Username", username);
			formData.append("IDcard1", selectedFile);

			console.log("Upload Payload:", {
				username,
				image: formData.get("IDcard1"),
			});
			try {
				const response = await fetch(
					"https://100097.pythonanywhere.com/getids",
					{
						method: "POST",
						body: formData,
					}
				);
				const data = await response.json();
				console.log(data);
				if (response.ok) {
					setUpdating(false);
					toast.success("Image uploaded successfully!");
					setSelectedFile(null);
				} else {
					setUpdating(false);
					toast.error("Failed to upload image.");
				}
			} catch (error) {
				setUpdating(false);
				console.error("Error:", error);
				toast.error("An error occurred while uploading the image.");
			}
		} else {
			setUpdating(false);
			toast.error("Please select ID card first");
		}
	};
	console.log(props.userInfo.formsData[0].personalids.IDcard1);


	return (
		<div>
			<div className="text-center">
				<ToastContainer position="top-right" />

				<Image
					className="img-fluid mb-4"
					src={
						props.userInfo.formsData[0].personalids.IDcard1 !== ""
							? props.userInfo.formsData[0].personalids.IDcard1
							: "/images/samanta.webp"
					}
					alt="samanta"
					width={300}
					height={300}
				/>
			</div>
			<Form>
				<Form.Group className="mb-3" controlId="IdCard1File">
					<Form.Label className="labelsStyle">Id Card1</Form.Label>
					<Form.Control
						className="inputStyle"
						type="file"
						onChange={handleFileChange}
						accept="image/jpeg, image/png, image/gif, image/svg+xml"
					/>
				</Form.Group>
				<Button onClick={handleSubmit} variant="dark" className="lg:w-50">
					{updating ? "Updating" : "Update Your ID Card 1"}
				</Button>
			</Form>
		</div>
	);
};

export default IdCard1;
