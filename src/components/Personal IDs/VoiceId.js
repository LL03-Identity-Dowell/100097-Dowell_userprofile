import React, { useState, useRef } from "react";
import { Button, Image, Form, Tab, Tabs,  } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { getprofiledetails } from "../../store/slice/profiledataSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
const VoiceId = (props) => {
	const [recording, setRecording] = useState(false);
	const [audioBlob, setAudioBlob] = useState(null);
	const [progress, setProgress] = useState(0);
	const [recordingTime, setRecordingTime] = useState(0);
	const [userChoice, setUserChoice] = useState("file"); // 'file' or 'record'
	const [updating, setUpdating] = useState(false);
	const [audioUrl, setAudioUrl] = useState(null); // New state to store audio URL
	const audioRef = useRef();
	const apiaudioRef = useRef();
	const mediaRecorderRef = useRef(null);


	const desiredFileName = "audiofile.mp3";
	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const mediaRecorder = new MediaRecorder(stream);
			const chunks = [];

			mediaRecorder.ondataavailable = (e) => {
				if (e.data.size > 0) {
					chunks.push(e.data);
				}
			};

			mediaRecorder.onstop = () => {
				const blob = new Blob(chunks, { type: "audio/wav" });

				setAudioBlob(blob);
				setAudioUrl(URL.createObjectURL(blob)); // Set audio URL using state
			};
			mediaRecorder.onstart = () => {
				setRecordingTime(0);
				const interval = setInterval(() => {
					setRecordingTime((prevTime) => prevTime + 1);
				}, 1000);

				mediaRecorderRef.current = mediaRecorder;

				mediaRecorderRef.current.onstop = () => {
					clearInterval(interval);
					const blob = new Blob(chunks, { type: "audio/mpeg" });
					const renamedFile = new File([blob], desiredFileName, {
						type: blob.type,
					});

					setAudioBlob(renamedFile);
					setAudioUrl(URL.createObjectURL(renamedFile)); // Set audio URL using state
				};
			};

			mediaRecorder.start();
			setRecording(true);
		} catch (error) {
			// console.error("Error accessing microphone:", error);
			toast.error("Microphone Access Denied ");
		}
	};

	const stopRecording = () => {
		if (mediaRecorderRef.current && recording) {
			mediaRecorderRef.current.stop();
			if (apiaudioRef.current != undefined) {
				apiaudioRef.current.pause();
			}
			setRecording(false);
		}

		console.log(audioBlob);
	};
	console.log(audioUrl);
	console.log(audioBlob);

	const handleReplay = () => {
		if (audioBlob) {
			audioRef.current.play();
		}
	};

	const handleReset = () => {
		setAudioBlob(null);
		setAudioUrl(null);
		setRecordingTime(0);
	};

	const handleUserChoiceChange = (choice) => {
		setUserChoice(choice);
	};
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			// Check if the selected file is an image
			if (file.type.startsWith("audio/")) {
				setAudioBlob(file);
				setProgress(100);
			} else {
				toast.info("Please select a valid audio file (WAV, MP3, or OGG).");
				event.target.value = null; // Clear the input field
			}
		}
	};
	const dispatch = useDispatch();
	const username = props.userInfo.profileData.Username;
	const id = props.userInfo.profileData._id;
	const handleRemove = () => {
		setAudioBlob(null);
		setProgress(0);
	};

	const handleUpload = async () => {
		setUpdating(true);
		if (audioBlob) {
			const formData = new FormData();
			formData.append("Username", username);
			formData.append("voiceID", audioBlob);

			console.log("Upload Payload:", [...formData]);
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
							toast.success("Voice id updated successfully");
							setAudioBlob(null);
						} else {
							// alert('Form submission failed');
						}
					} catch (error) {
						console.error("Error submitting form:", error);
					}
				} else {
					setUpdating(false);
					toast.error("Failed to upload voice id.");
					setAudioBlob(null);
				}
			} catch (error) {
				setUpdating(false);
				console.error("Error:", error);
				setAudioBlob(null);
				toast.error("An error occurred while uploading the Voice ID.");
			}
		} else {
			setUpdating(false);
			toast.error("Please select voice id first");
		}
	};
	const url = props.userInfo.formsData[0].personalids.voiceID;
	// Find the index of "media"
	const index = url.indexOf("/media");
	// Remove everything before "media"
	const modifiedUrl = url.substring(index);

	return (
		<div className="text-center mt-5">
			<ToastContainer position="top-right" />

			<div className="mb-2">
				{props.userInfo.formsData[0].personalids.voiceID !== "" ? (
					<audio
						className="audio-form-wrapper"
						ref={apiaudioRef}
						src={modifiedUrl}
						controls
						onPlay={() => {
							if (audioRef.current !== undefined) {
								audioRef.current.pause();
							}
						}}
					/>
				) : (
					<Image
						className="img-fluid mb-4 view-form-wrapper"
						src="/images/samanta.webp"
						alt="samanta"
						width={300}
						height={300}
					/>
				)}
			</div>

			<Tabs
				activeKey={userChoice}
				onSelect={(choice) => handleUserChoiceChange(choice)}
				className="mb-3"
			>
				<Tab eventKey="file" title="Upload File">
					<Form.Group className="mb-3" controlId="voiceIdFile">
						<Form.Label className="labelsStyle">Voice Id</Form.Label>
						<Form.Control
							className="inputStyle"
							onChange={handleFileChange}
							type="file"
						/>
					</Form.Group>
					{audioBlob && (
						<div>
							<p>File: {audioBlob.name}</p>
							<p>Format: {audioBlob.type}</p>

							<div className="file-upload-progress">
								<progress
									value={progress}
									max="100"
									className="upload-progress-audio"
								></progress>

								<Button
									variant="dark"
									className="lg:w-50"
									onClick={handleRemove}
								>
									<FaTimes />
								</Button>
							</div>
						</div>
					)}
				</Tab>
				<Tab eventKey="record" title="Record Audio">
					<div>
						<Button
							variant="success"
							onClick={startRecording}
							disabled={recording}
							className="me-2 my-1"
						>
							{recording ? "Recording..." : "Start Recording"}
						</Button>
						<Button
							variant="success"
							onClick={stopRecording}
							disabled={!recording}
							className="my-1"
						>
							Stop Recording
						</Button>
						<br />
						<br />
						<div>{recording && <p>Recording Time: {recordingTime}s</p>}</div>
						{audioBlob != null ? (
							<audio
								ref={audioRef}
								src={audioUrl}
								className="audio-form-wrapper"
								controls
								onPlay={() => {
									if (apiaudioRef.current != undefined) {
										apiaudioRef.current.pause();
									}
								}}
							/>
						) : (
							""
						)}
					</div>

					<Button
						variant="success"
						onClick={handleReplay}
						disabled={!audioBlob}
						className="me-2"
					>
						Replay
					</Button>
					<Button variant="success" onClick={handleReset} disabled={!audioBlob}>
						Reset
					</Button>
					<br />
					<br />
				</Tab>
			</Tabs>

			<Button variant="dark" className="lg:w-50" onClick={() => handleUpload()}>
				{updating ? (
					<Spinner animation="border" size="sm" variant="light" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				) : (
					"Update Your Voice ID"
				)}
			</Button>
		</div>
	);
};

export default VoiceId;
