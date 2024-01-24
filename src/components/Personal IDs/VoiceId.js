import React, { useState, useRef } from 'react';
import { Button, Image, Form, Tab, Tabs } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const VoiceId = (props) => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [progress, setProgress] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const [userChoice, setUserChoice] = useState('file'); // 'file' or 'record'
  const [updating,setUpdating] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioRef = useRef();
  
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
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
      };

      mediaRecorder.onstart = () => {
        setRecordingTime(0);
        const interval = setInterval(() => {
          setRecordingTime((prevTime) => prevTime + 1);
        }, 1000);

        mediaRecorderRef.current = mediaRecorder;

        mediaRecorderRef.current.onstop = () => {
          clearInterval(interval);
          const blob = new Blob(chunks, { type: 'audio/wav' });
          setAudioBlob(blob);
        };
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const handleReplay = () => {
    if (audioBlob) {
      const audioURL = URL.createObjectURL(audioBlob);
      audioRef.current.src = audioURL;
      audioRef.current.play();
    }
  };

  const handleReset = () => {
    setAudioBlob(null);
    setRecordingTime(0);
  };

  const handleUserChoiceChange = (choice) => {
    setUserChoice(choice);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if the selected file is an image
      if (file.type.startsWith('audio/')) {
        setAudioBlob(file);
      } else {
        toast.info('Please select a valid audio file (WAV, MP3, or OGG).');
        event.target.value = null; // Clear the input field
      }
    }
  }
  const username = props.userInfo.profileData.Username;
  const handleRemove = () => {
    setAudioBlob(null);
    setProgress(0);
  };
  const handleUpload = async () => {
    // const interval = setInterval(() => {
    //   setProgress((prevProgress) => {
    //     const newProgress = prevProgress + 10;
    //     if (newProgress >= 100) {
    //       clearInterval(interval);
    //     }
    //     return newProgress;
    //   });
    // }, 1000);
    setUpdating(true)        
    if(audioBlob){
      const formData = new FormData();
      formData.append('Username', username);
      formData.append('voiceID', audioBlob);
  
      console.log("Upload Payload:", [...formData]);
      try {
        const response = await fetch("https://100097.pythonanywhere.com/getids", {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        console.log(data)
        if (response.ok) {
          setUpdating(false)        
          toast.success(response.message);
          setAudioBlob(null);
        } else {
          setUpdating(false)        
          toast.error('Failed to upload image.');
          setAudioBlob(null);

        }
      } catch (error) {
        setUpdating(false)
        console.error('Error:', error);
        setAudioBlob(null);
        toast.error('An error occurred while uploading the Voice ID.');
      }    
    } 
    else{
      setUpdating(false)
      toast.error("Please select voice id first")
    }
    // if (userChoice === 'file') {
    //   const fileInput = document.getElementById('voiceIdFile');
    //   const selectedFile = fileInput.files[0];
  
    //   if (selectedFile) {
    //     setUpdating(false)        

    //     console.log('Selected file:', selectedFile);
    //     // Implement file upload logic
    //   } else {
    //     setUpdating(false)        

    //     toast.error('Please select a file.');
    //   }
    // } else {
    //   if (audioBlob) {
    //     setUpdating(false)        

    //     console.log('Recorded audio blob:', audioBlob);
    //     // Implement recording upload logic
    //   } else {
    //     toast.error('No recorded audio to upload.');
    //   }
    // }
  };
  

  return (
    <div className='text-center'>
      <Image className='img-fluid mb-4' src="/images/samanta.webp" alt="samanta" width={300} height={300} />

      <Tabs
        activeKey={userChoice}
        onSelect={(choice) => handleUserChoiceChange(choice)}
        className="mb-3"
      >
        <Tab eventKey="file" title="Upload File">
          <Form.Group className="mb-3" controlId="voiceIdFile">
            <Form.Label className='labelsStyle'>Voice Id</Form.Label>
            <Form.Control className='inputStyle' onChange={handleFileChange} type="file" />
          </Form.Group>
          {audioBlob && (
        <div>
          <p>File: {audioBlob.name}</p>
          <p>Format: {audioBlob.type}</p>
          <progress value={progress} max="100"></progress>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
        </Tab>
        <Tab eventKey="record" title="Record Audio">
          <div>
            <Button variant="success" onClick={startRecording} disabled={recording}>
              {recording ? 'Recording...' : 'Start Recording'}
            </Button>
            <Button variant="success" onClick={stopRecording} disabled={!recording}>
              Stop Recording
            </Button>
            <br />
            <br />
            <br />
            <br />
            <Button variant="success" onClick={handleReplay} disabled={!audioBlob}>
              Replay
            </Button>
            <Button variant="success" onClick={handleReset} disabled={!audioBlob}>
              Reset
            </Button>
            <br />
            <br />
            <div>
              {recording && <p>Recording Time: {recordingTime}s</p>}
            </div>
            {audioBlob && <audio ref={audioRef} controls />}
          </div>
        </Tab>
      </Tabs>

    
      <Button variant="dark" className='lg:w-50' onClick={handleUpload} >
      {updating ? "Updating" : "Update Your Voice ID"}
      </Button>
    </div>
  );
};

export default VoiceId;
