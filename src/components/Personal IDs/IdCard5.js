import React ,{useState} from 'react'
import {Button, Image, Form} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { getprofiledetails } from '../../store/slice/profiledataSlice';
import { useDispatch } from 'react-redux';


const IdCard5 = (props) => {
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
const dispatch = useDispatch();
const username = props.userInfo.profileData.Username;
const id = props.userInfo.profileData._id;
  const handleSubmit = async () => {
    setUpdating(true)
    // Use `selectedFile` for further processing (e.g., send it to the API)
    if (selectedFile) {
      // Your file handling logic here
      console.log('Selected file:', selectedFile);
      const formData = new FormData();
    formData.append('Username', username);
    formData.append('IDcard5', selectedFile);

    console.log("Upload Payload:", {
      username,
      image: formData.get("IDcard5"),
    });    try {
      const response = await fetch("https://100097.pythonanywhere.com/getids", {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data)
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
      toast.error("Please select ID card first")
    }
    
  };
  const url =props.userInfo.formsData[0].personalids.IDcard5
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
						props.userInfo.formsData[0].personalids.IDcard5 !== ""
							? modifiedUrl
							: "/images/samanta.webp"
					}
					alt="samanta"
					width={300}
					height={300}
				/>
			</div>
			<Form>
				<Form.Group className="mb-3" controlId="IdCard2File">
					<Form.Label className="labelsStyle">ID Card5</Form.Label>
					<Form.Control
						className="inputStyle"
						type="file"
						onChange={handleFileChange}
						accept="image/jpeg, image/png, image/gif, image/svg+xml"
					/>
				</Form.Group>
				<Button onClick={handleSubmit} variant="dark" className="lg:w-50">
					{updating ? "Updating" : "Update Your ID Card 5"}
				</Button>
			</Form>
		</div>
	);
}

export default IdCard5
