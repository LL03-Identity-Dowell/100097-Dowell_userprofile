
import { Button, Image, Form } from 'react-bootstrap';
import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";

const VideoId = () => {

   const [capturedVideo, setCapturedVideo] = useState(null);
   const [opencamera, setopencamera] = useState(false);
		const [recording, setRecording] = useState(false);
		const webcamRef = useRef(null);
		const recordRTCRef = useRef(null);

  const opencamerahandle = () => {
    setopencamera(true)
  }
  const closecamerahandle = () => {
    setopencamera(false);
    setCapturedVideo(null)
	};
  
  
		const handleStartCapture = () => {
			setCapturedVideo(null);
			setRecording(true);

			const mediaRecorderOptions = {
				mimeType: "video/webm",
			};

			// Start recording the webcam feed
			const recorder = RecordRTC(
				webcamRef.current.video.srcObject,
				mediaRecorderOptions
			);
			recorder.startRecording();
			recordRTCRef.current = recorder;
		};

		const handleStopRecording = () => {
			setRecording(false);

			// Stop recording and get the captured video blob
			recordRTCRef.current.stopRecording(() => {
				const capturedBlob = recordRTCRef.current.getBlob();
				const capturedDataURL = URL.createObjectURL(capturedBlob);
				setCapturedVideo(capturedDataURL);
			});
		};

		const handleRetake = () => {
			setCapturedVideo(null);
		};

  
  
  
  
  return (
		<div className="videoid-file-wrapper">
			{opencamera !== true ? (
				<>
					<div className="text-center">
						<Image
							className="img-fluid mb-4"
							src="/images/samanta.webp"
							alt="samanta"
							width={300}
							height={300}
						/>
					</div>
					<Form>
						<Form.Group className="mb-3" controlId="videoIdFile">
							<Form.Label className="labelsStyle">Video Id</Form.Label>
							<Form.Control
								className="inputStyle"
								type="file"
								accept="video/*"
							/>
						</Form.Group>

						<Button variant="dark" className="lg:w-50">
							Update Your Video ID
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
									className="lg:w-50 me-2"
									onClick={handleStopRecording}
								>
									Stop Recording
								</Button>
							)}

							<Button
								variant="dark"
								className="lg:w-50"
								onClick={closecamerahandle}
							>
								Close Camera
							</Button>
						</div>
					)}

					{capturedVideo && (
						<div>
							<video width="400" height="300" controls>
								<source src={capturedVideo} type="video/webm" />
								Your browser does not support the video tag.
							</video>
							<br />

							<Button
								variant="dark"
								className="lg:w-50 me-2"
								
							>
								Submit
							</Button>
							<Button
								variant="dark"
								className="lg:w-50 me-2"
								onClick={handleRetake}
							>
								Retake
							</Button>
							<Button
								variant="dark"
								className="lg:w-50 me-2"
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
	);
}

export default VideoId
