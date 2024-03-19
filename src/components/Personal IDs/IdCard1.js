import React, { useEffect, useState } from "react";
import { Button, Image, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getprofiledetails } from "../../store/slice/profiledataSlice";
import { Spinner } from "react-bootstrap";
const IdCard1 = (props) => {
	const substr = "100097.pythonanywhere.com/";
	function removeSecondOccurrence(str, substr) {
		var firstIndex = str.indexOf(substr);
		if (firstIndex !== -1) {
			var secondIndex = str.indexOf(substr, firstIndex + 1);
			if (secondIndex !== -1) {
				return (
					str.substring(0, secondIndex) +
					str.substring(secondIndex + substr.length)
				);
			}
		}
		return str;
	}

	
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

	const dispatch = useDispatch();
	const username = props.personalids.username;
	const id = props.personalids.userID;

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
					const formData = {
						Username: username,
						userID: id,
					};
					
					const requestOptions = {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(formData),
					};

					try {
						const response = await fetch(
							"https://100097.pythonanywhere.com/getprofile",
							requestOptions
						);
						const responseData = await response.json();

						if (response.ok) {
							dispatch(getprofiledetails(responseData));
							setUpdating(false);
							toast.success("Image uploaded successfully!");
							setSelectedFile(null);
						} else {
							// alert('Form submission failed');
						}
					} catch (error) {
						console.error("Error submitting form:", error);
					}
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
	const url = props.personalids.IDcard1;
	// Find the index of "media"
	const index = url.indexOf("/media");

	// Remove everything before "media"
	const modifiedUrl = url.substring(index);


	return (
		<div>
			<div className="text-center">
				<ToastContainer position="top-right" />

				<Image
					className="img-fluid mb-4"
					src={
						props.personalids.IDcard1 !== ""
							? modifiedUrl
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
					{updating ? (
						<Spinner animation="border" size="sm" variant="light" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						"Update Your ID Card 1"
					)}
				</Button>
			</Form>
		</div>
	);
};

export default IdCard1;
