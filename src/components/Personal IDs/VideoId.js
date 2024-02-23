
import { Button, Image, Form } from 'react-bootstrap';
import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";
import { ToastContainer, toast } from "react-toastify";
import { getprofiledetails } from '../../store/slice/profiledataSlice';
import { useDispatch } from 'react-redux';

import { Spinner } from "react-bootstrap";
const VideoId = (props) => {
	const [capturedVideo, setCapturedVideo] = useState(null);
	const [opencamera, setopencamera] = useState(false);
	  const [videofile, setvideofile] = useState(null);
	const [recording, setRecording] = useState(false);
	const [capturedata, setcapturedata] = useState(null);
	  const [updating, setUpdating] = useState(false);
const dispatch = useDispatch();
const username = props.userInfo.profileData.Username;
const id = props.userInfo.profileData._id;
	const webcamRef = useRef(null);
	const recordRTCRef = useRef(null);

	const opencamerahandle = () => {
		setopencamera(true);
		setUpdating(false)
	};
	const closecamerahandle = () => {
		const cleanup = () => {
			setRecording(false);

			// Stop recording if in progress
			if (recordRTCRef.current) {
				recordRTCRef.current.stopRecording(() => {
					// Clear the recorder instance
					recordRTCRef.current = null;
				});
			}

			// Stop the webcam stream
			const tracks = webcamRef.current?.video?.srcObject?.getTracks();
			if (tracks) {
				tracks.forEach((track) => track.stop());
			}

			// Clear the webcam stream
			if (webcamRef.current) {
				const videoSrcObject = webcamRef.current.video.srcObject;
				if (videoSrcObject) {
					const tracks = videoSrcObject.getTracks();
					tracks.forEach((track) => track.stop());
				}
				webcamRef.current.video.srcObject = null;
			}
		};

		cleanup();
		setopencamera(false);
		setCapturedVideo(null)
	};


	const handleStartCapture = () => {
		// Check if the browser supports getUserMedia
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			// Request access to the camera
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then(function (stream) {
					// User has granted access to the camera
					setCapturedVideo(null);
					setRecording(true);

					const mediaRecorderOptions = {
						mimeType: "video/mp4",
					};
					// video/x-matroska;codecs=avc1
					// video/webm;codecs=vp8;
					// video/webm;codecs=vp9;
					
					// Start recording the webcam feed
					const recorder = RecordRTC(
						webcamRef.current.video.srcObject,
						mediaRecorderOptions
					);
					recorder.startRecording();
					recordRTCRef.current = recorder;
				})
				.catch(function (error) {
					// User has denied access or there was an error
					toast.error("Camera Access Denied");
				});
		} else {
			// Browser doesn't support getUserMedia
			console.error("getUserMedia not supported in this browser");
		}
	};

	const handleStopRecording = () => {
		setRecording(false);

		// Stop recording and get the captured video blob
		if (recordRTCRef.current) {
			recordRTCRef.current.stopRecording(() => {
				const capturedBlob = recordRTCRef.current.getBlob();
				console.log(capturedBlob);
				setcapturedata(capturedBlob);
				const capturedDataURL = URL.createObjectURL(capturedBlob);
				setCapturedVideo(capturedDataURL);
			});
		}
	};

	const handleRetake = () => {
		setCapturedVideo(null);
		setcapturedata(null)
	};

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.hidden) {
				handleStopRecording();
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);

			// Release resources when component unmounts
			if (recordRTCRef.current) {
				recordRTCRef.current.stopRecording();
				recordRTCRef.current = null;
			}

			const tracks = webcamRef.current?.video?.srcObject?.getTracks();
			if (tracks) {
				tracks.forEach((track) => track.stop());
			}

			if (webcamRef.current) {
				const videoSrcObject = webcamRef.current.video.srcObject;
				if (videoSrcObject) {
					const tracks = videoSrcObject.getTracks();
					tracks.forEach((track) => track.stop());
				}
				webcamRef.current.video.srcObject = null;
			}
		};
	}, []);


	const handlesubmit = async (userchoice) => {
		setUpdating(true)
		const formData = new FormData();
		
		formData.append("Username", username);
		
		if (userchoice === "custom") {
			formData.append("videoID", capturedata, "capturedVideo.mp4");
			setvideofile(null);
			
		}
		if (userchoice === "browse"){
			formData.append("videoID", videofile);
			setcapturedata(null);
		}
		
		
		if (capturedata  !== null || videofile!=null) {
			console.log(formData.get("videoID"));
			try {
				// Use fetch to send the blob to the API
				const response = await fetch(
					"https://100097.pythonanywhere.com/getids",
					{
						method: "POST",
						body: formData,
					}
				);

				// Handle the response
				if (response.ok) {
					
					// The API call was successful, you can handle the response here
					
					


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
							console.log("Video successfully submitted", response);
							toast.success("Video successfully submitted");
							setvideofile(null);

							setUpdating(false);

							const fileInput = document.getElementById("videoIdFile");
							if (fileInput) {
								fileInput.value = null;
							}
							
						} else {
							// alert('Form submission failed');
						}
					} catch (error) {
						console.error("Error submitting form:", error);
					}
				} else {
					// The API call failed, handle the error
					setUpdating(false);
					toast.error("Failed to submit video");
					console.error(
						"Failed to submit video:",
						response.status,
						response.statusText
					);
				}
			} catch (error) {
				// Handle fetch error
				console.error("Error during fetch:", error);
				setUpdating(false);
			}
		} else {
			toast.error("Upload video or record video to update video id");
			setUpdating(false);
		}
	}
	

	 const handleFileChange = (event) => {
			const file = event.target.files[0];
			if (file) {
				// Check if the selected file is an image
				if (file.type.startsWith("video/")) {
					setvideofile(file);
					
				} else {
					toast.info("Please select a valid Video file (mp4).");
					event.target.value = null; // Clear the input field
				}
			}
		};
		const url =props.userInfo.formsData[0].personalids.videoID
		// Find the index of "media"
		const index = url.indexOf("/media");
		// Remove everything before "media"
		const modifiedUrl = url.substring(index);
	return (
		<>
			<ToastContainer position="top-right" />
			<div className="videoid-file-wrapper">
				{opencamera !== true ? (
					<>
						{props.userInfo.formsData[0].personalids.videoID != "" ? (
							<>
								<video controls className="videoid-wrapper mx-auto">
									<source src={modifiedUrl} type="video/webm" />
									Your browser does not support the video tag.
								</video>
							</>
						) : (
							<div className="text-center">
								<Image
									className="img-fluid mb-4"
									src="/images/samanta.webp"
									alt="samanta"
									width={300}
									height={300}
								/>
							</div>
						)}

						<Form>
							<Form.Group className="mb-3" controlId="videoIdFile">
								<Form.Label className="labelsStyle">Video Id</Form.Label>
								<Form.Control
									className="inputStyle"
									type="file"
									accept="video/*"
									onChange={handleFileChange}
								/>
							</Form.Group>

							<Button
								variant="dark"
								className="lg:w-50"
								onClick={() => handlesubmit("browse")}
							>
								{updating ? (
									<Spinner
										animation="border"
										size="sm"
										variant="light"
										role="status"
									>
										<span className="visually-hidden">Loading...</span>
									</Spinner>
								) : (
									"Update Your Video ID"
								)}
							</Button>
							<hr className="border-gray-300" />
							<p className="text-center">OR</p>
							<div className="divider-horizontal bg-gray-300"></div>
						</Form>
					</>
				) : (
					""
				)}
				{opencamera === false ? (
					<Button variant="dark" className="lg:w-50" onClick={opencamerahandle}>
						Open Camera
					</Button>
				) : (
					""
				)}
				{opencamera === true ? (
					<div>
						{!capturedVideo && (
							<div>
								<Webcam
									audio={false}
									height={300}
									ref={webcamRef}
									screenshotFormat="image/jpeg"
									width={400}
									videoConstraints={{ facingMode: "user" }}
									mirrored={true}
									onUserMedia={() => {
										if (recording) {
											handleStartCapture();
										}
									}}
								/>
								<br />
								{recording === false ? (
									<Button
										variant="dark"
										className="lg:w-50 me-2"
										onClick={handleStartCapture}
									>
										Start Capture
									</Button>
								) : (
									<Button
										variant="dark"
										className="lg:w-50 me-2 my-1"
										onClick={handleStopRecording}
									>
										Stop Recording
									</Button>
								)}
								{recording == false ? (
									<Button
										variant="dark"
										className="lg:w-50 my-1"
										onClick={closecamerahandle}
									>
										Close Camera
									</Button>
								) : (
									""
								)}
							</div>
						)}

						{capturedVideo && (
							<div>
								<video className="videoid-wrapper my-2" controls>
									<source src={capturedVideo} type="video/webm" />
									Your browser does not support the video tag.
								</video>
								<br />

								<Button
									variant="dark"
									className="lg:w-50 me-2 my-1"
									onClick={() => handlesubmit("custom")}
								>
									{updating ? (
										<Spinner
											animation="border"
											size="sm"
											variant="light"
											role="status"
										>
											<span className="visually-hidden">Loading...</span>
										</Spinner>
									) : (
										"Update Your Video ID"
									)}
								</Button>
								<Button
									variant="dark"
									className="lg:w-50 me-2 my-1"
									onClick={handleRetake}
								>
									Retake
								</Button>
								<Button
									variant="dark"
									className="lg:w-50 me-2 my-1"
									onClick={closecamerahandle}
								>
									Close
								</Button>
							</div>
						)}
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
}

export default VideoId
