import React, { useState, useRef } from 'react';
import { Button, Image, Form } from 'react-bootstrap';
import Webcam from 'react-webcam';
import { ToastContainer, toast } from 'react-toastify';

const FaceId = (props) => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

  const [selectedOption, setSelectedOption] = useState('file'); // 'file' or 'camera'
  const [uploadedFileName, setUploadedFileName] = useState(''); // Define setUploadedFileName
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const username = props.userInfo.profileData.Username

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setUploadedFileName(''); // Reset the uploaded file name when changing options
  };

  const handleFileChange = () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      setUploadedFileName(fileInput.files[0].name);
    }
  };
  const capturePhoto = async () => {
    if (selectedOption === 'camera') {
      const imageSrc = webcamRef.current.getScreenshot();

      // Check if imageSrc is not null before proceeding
      if (imageSrc) {
        await uploadImage(imageSrc);
      }
    } else {
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
  };

  const uploadImage = async (imageSrc) => {
  

    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append('username', username);
    formData.append('image', dataURLtoFile(imageSrc, 'screenshot.jpg'));
    console.log('Upload Payload:', {
      username,
      image: formData.get('image'),
    });
    try {
      // Make a POST request to the API endpoint
      const response = await fetch('https://100014.pythonanywhere.com/api/face_id/', {
        method: 'POST',
        body: formData,
      });
      console.log(response)
      // Handle the response as needed
      if (response.ok) {
        console.log('Face ID updated successfully');
        toast.success("success");

      } else {
        console.error('Failed to update Face ID');
      toast.error("An unknown error occurred");

      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("An unknown error occurred");

    }

  };

  // Function to convert data URL to a File object
  const dataURLtoFile = (dataURL, filename) => {
    const arr = dataURL.split(',');
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
        <ToastContainer position="top-right"/>

      <div className="text-center">
        <Image className="img-fluid mb-4" src="/images/samanta.webp" alt="samanta" width={300} height={300} />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="faceIdFile">
          <Form.Label className='labelsStyle'>Face Id</Form.Label>
          <Form.Control
            className='inputStyle'
            type="file"
            onChange={() => {
              handleOptionChange('file');
              handleFileChange();
            }}
            ref={fileInputRef}
            disabled={selectedOption === 'camera'}
          />
                    <small>{uploadedFileName}</small>

        </Form.Group>

        <Button variant="dark" className="lg:w-50"  onClick={() => handleOptionChange('file')}>
          Upload from File
        </Button>

        <Button
          variant="dark"
          className="lg:w-50"
          onClick={() => handleOptionChange('camera')}
          disabled={selectedOption === 'camera'}
        >
          Capture from Camera
        </Button>

        <Button variant="dark" className="lg:w-50" onClick={capturePhoto}>
          Capture photo
        </Button>

        {selectedOption === 'camera' && (
          <Webcam
            audio={false}
            height={500}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
            ref={webcamRef}
          />
        )}
      </Form>
    </div>
  );
};

export default FaceId;
