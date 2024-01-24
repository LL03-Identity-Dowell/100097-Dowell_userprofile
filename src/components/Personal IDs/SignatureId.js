// import React from 'react'
// import {Button, Image, Form} from 'react-bootstrap';

// const SignatureId = () => {
//   return (
//     <div>
//     <div className='text-center'>
//       <Image className='img-fluid mb-4' src="/images/samanta.webp" alt="samanta" width={300} height={300}/>
//       </div>
//       <Form>
//         <Form.Group className="mb-3" controlId="signatureFile">
//           <Form.Label className='labelsStyle'>Signature</Form.Label>
//           <Form.Control className='inputStyle' type="file"/>
//         </Form.Group> 
//         <Button  variant="dark" className='lg:w-50'>Update Your Signature</Button>
//         </Form>
//     </div>
//   )
// }

// export default SignatureId



import React, {useState} from 'react'
import {Button, Image, Form} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const SignatureId = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [updating,setUpdating] = useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if a file is selected
    if (file) {
      // Check if the selected file is an image
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
      } else {
        toast.info('Please select a valid image file (JPEG, PNG, GIF, or SVG).');
        event.target.value = null; // Clear the input field
      }
    }
  };
  const username = props.userInfo.profileData.Username;
console.log(selectedFile)
  const handleSubmit = async () => {
    setUpdating(true)
    // Use `selectedFile` for further processing (e.g., send it to the API)
    if (selectedFile) {
      // Your file handling logic here
      console.log('Selected file:', selectedFile);
      const formData = new FormData();
    formData.append('Username', username);
    formData.append('signature', selectedFile);

    console.log("Upload Payload:", {
      username,
      image: formData.get("signature"),
    });    try {
      const response = await fetch("https://100097.pythonanywhere.com/getids", {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setUpdating(false)        
        toast.success('Image uploaded successfully!');
        setSelectedFile(null);
      } else {
        setUpdating(false)        
        toast.error('Failed to upload image.');
      }
    } catch (error) {
      setUpdating(false)
      console.error('Error:', error);
      toast.error('An error occurred while uploading the image.');
    }
    } 
    else{
      setUpdating(false)
      toast.error("Please select signature ID first")
    }
    
  };
  return (
		<div>
			<div className="text-center">
				<ToastContainer position="top-right" />

				<Image
					className="img-fluid mb-4"
					src={
						props.userInfo.formsData[0].personalids.signature !== ""
							? props.userInfo.formsData[0].personalids.signature
							: "/images/samanta.webp"
					}
					alt="samanta"
					width={300}
					height={300}
				/>
			</div>
			<Form>
				<Form.Group className="mb-3" controlId="signature">
					<Form.Label className="labelsStyle">Signature ID</Form.Label>
					<Form.Control
						className="inputStyle"
						type="file"
						onChange={handleFileChange}
						accept="image/jpeg, image/png, image/gif, image/svg+xml"
					/>
				</Form.Group>
				<Button onClick={handleSubmit} variant="dark" className="lg:w-50">
					{updating ? "Updating" : "Update Your signature ID"}
				</Button>
			</Form>
		</div>
	);
}

export default SignatureId
