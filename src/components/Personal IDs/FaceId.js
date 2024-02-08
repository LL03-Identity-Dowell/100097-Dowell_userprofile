import React, { useState, useRef } from "react";
import { Button, Image, Form } from "react-bootstrap";
import Webcam from "react-webcam";
import { ToastContainer, toast } from "react-toastify";

const FaceId = (props) => {



  
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const [capturedImageSrc, setCapturedImageSrc] = useState(null); // Add state for captured image
  const [updating, setUpdating] = useState(false);
  const [selectedOption, setSelectedOption] = useState("file"); // 'file' or 'camera'
  const [uploadedFileName, setUploadedFileName] = useState(""); // Define setUploadedFileName
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const username = props.userInfo.profileData.Username;

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setUploadedFileName(""); // Reset the uploaded file name when changing options
  };

  const handleFileChange = () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      setUploadedFileName(fileInput.files[0]);
    }
  };
  const handlecameraInput = async () => {
    if (selectedOption === "camera") {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImageSrc(imageSrc); // Set the captured image source
        console.log("Captured image", imageSrc);
      }
    } else {
      toast.info("First open the camera and then capture image");
    }
  };
  const capturePhoto = async () => {
    if (fileInputRef.current.files.length > 0 || capturedImageSrc) {
      setUpdating(true);
      if (selectedOption === "camera") {
        const imageSrc = capturedImageSrc;
        console.log("submit image", imageSrc);
        if (imageSrc) {
          await uploadImage(imageSrc);
        }
      } 
      else {
        const fileInput = fileInputRef.current;
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
          const imageFile = fileInput.files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
            const imageSrc = reader.result;
            uploadImage(imageSrc);
          };
          reader.readAsDataURL(imageFile);
        }
      }
    } 
    else {
      toast.error("Please select an image from your device or capture from camera");
    }
  };

  const uploadImage = async (imageSrc) => {
    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append("username", username);
    formData.append("faceID", dataURLtoFile(imageSrc, "screenshot.jpg"));
  
    // console.log(formData.get("faceID"));
console.log(formData)
    try {
      // Make a POST request to the API endpoint
      const response = await fetch(
        "https://100014.pythonanywhere.com/api/face_id/",
        {
          method: "POST",
          body: formData,
        }
      );
     
      // Handle the response as needed
      if (response.ok) {
        setUpdating(false);
        toast.success("success");
        console.log(response)
      } else {
        setUpdating(false);
        const errorData = await response.json(); // Parse the error response
        toast.info(errorData.info, response.status);
      }
    } catch (error) {
      toast.error("An unknown error occurred");
      setUpdating(false);
    }
  };

  // Function to convert data URL to a File object
  const dataURLtoFile = (dataURL, filename) => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  return (
		<div>
			<ToastContainer position="top-right" />

			<div className="text-center">
				<Image
					className="img-fluid mb-4"
					src={
						props.userInfo.formsData[0].personalids.faceID !== ""
							? props.userInfo.formsData[0].personalids.faceID
							: "/images/samanta.webp"
					}
					alt="faceid"
					width={300}
					height={300}
				/>
			</div>
			<Form>
				<Form.Group className="mb-3" controlId="faceIdFile">
					<Form.Label className="labelsStyle">Face Id</Form.Label>
					<Form.Control
						className="inputStyle"
						type="file"
						onChange={() => {
							handleOptionChange("file");
							handleFileChange();
						}}
						ref={fileInputRef}
						disabled={selectedOption === "camera"}
					/>
					<small>{uploadedFileName.name}</small>
				</Form.Group>

				<Button
					variant="dark"
					className="lg:w-50"
					onClick={() => handleOptionChange("file")}
				>
					Upload from File
				</Button>
				<div className="my-4">
					<hr className="border-gray-300" />
					<p className="text-center">OR</p>
					<div className="divider-horizontal bg-gray-300"></div>
				</div>
				{selectedOption === "camera" && (
					<div>
						<Webcam
							audio={false}
							height={500}
							screenshotFormat="image/jpeg"
							width={500}
							videoConstraints={videoConstraints}
							ref={webcamRef}
						/>
						{capturedImageSrc && (
							<Image
								src={capturedImageSrc}
								alt="Captured Image"
								className="img-fluid mt-3" // Adjust styling as needed
							/>
						)}
					</div>
				)}

				<Button
					variant="dark"
					className="lg:w-50"
					onClick={() => handleOptionChange("camera")}
					disabled={selectedOption === "camera"}
				>
					Open Camera
				</Button>
				<Button
					variant="dark"
					className="lg:w-50"
					onClick={() => handlecameraInput("camera")}
					//  disabled={selectedOption === 'camera'}
				>
					{capturedImageSrc ? "Retake" : "Click"}
				</Button>
				<div className="my-4">
					<hr className="border-gray-300" />
					<div className="divider-horizontal bg-gray-300"></div>
				</div>
				<Button
					variant="dark"
					className="lg:w-50 text-center"
					onClick={capturePhoto}
				>
					{updating ? "Updating" : "Submit Face ID"}
				</Button>
			</Form>
		</div>
	);
};

export default FaceId;
