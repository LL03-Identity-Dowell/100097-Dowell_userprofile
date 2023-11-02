import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const MyProfileForm = (userData) => {
  const formdata = userData.userData.profileData;
    const [updating, setUpdating] = useState(false);
    const [apiResponse, setApiResponse] = useState({});
    const [updateApiResponse, setUpdateApiResponse] = useState({});

    useEffect(() => {
      setApiResponse(formdata);
        }, [formdata]);
    const username=userData.userData.userData.userinfo.username
    const [formData, setFormData] = useState({
      username:username,
      first_name : apiResponse.Firstname || "",
      last_name: apiResponse.Lastname || "",
      phone: apiResponse.Phone || "",
      image: '',
      address:'',
      zip_code:'',
      location:'',
      city:'',
      country:'',
      native_langauage:'',
      nationality:'',
      language_preferences:'',
      vision:''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
     
    const handleSubmitProfile = async () => {
      const requestData = {
        username:username,
      first_name : formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
      image: formData.image,
      address: formData.address,
      zip_code:formData.zip_code,
      location:formData.city + formData.country,
      city:formData.city,
      country: formData.country,
      native_language: formData.native_langauage,
      nationality:formData.nationality,
      language_preferences:formData.language_preferences,
      vision:formData.vision
      };
      setUpdating(true);  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      };
      console.log(requestData)
  
      try {
        const response = await fetch('https://100014.pythonanywhere.com/api/profile_update/', requestOptions);
      const responseData = await response.json();
        console.log(responseData)
        setUpdateApiResponse(responseData)
        console.log(JSON.stringify(requestOptions))
        if (response.ok) {
          setUpdating(false);
          toast.success("success");
        } else {
          setUpdating(false);
          toast.error("An unknown error occurred");
        }
      } catch (error) {
        toast.error("An unknown error occurred");
        setUpdating(false);
      }
    };
  
   
  
  return (
    <div>
        <ToastContainer position="top-right"/>

      <Container fluid>
        {apiResponse?
            <Form>
        <Row>
            <Col sm={6}>
            <p className="myProfile text-white fw-bold text-center">01. My Profile</p>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label className='labelsStyle'>Your first name</Form.Label>
                    <Form.Control className='inputStyle' name="first_name" value={formData.first_name} onChange={handleInputChange} type="text" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label className='labelsStyle'>Your last name</Form.Label>
                    <Form.Control className='inputStyle' name="last_name" value={formData.last_name} type="text" onChange={handleInputChange} placeholder="Enter your last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label className='labelsStyle'>Your phone number</Form.Label>
                    <Form.Control className='inputStyle' name="phone" value={formData.phone} type="number" onChange={handleInputChange} placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourEmial">
                    <Form.Label className='labelsStyle'>Your email</Form.Label>
                    <Form.Control className='inputStyle' name="email" type="text" onChange={handleInputChange} placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourAddress">
                    <Form.Label className='labelsStyle'>Your Address</Form.Label>
                    <Form.Control className='inputStyle'name="address" as="textarea" onChange={handleInputChange} rows={3} placeholder="Enter your address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pin/zipcode">
                    <Form.Label className='labelsStyle'>Your PIN/ZIP code</Form.Label>
                    <Form.Control className='inputStyle' name="zip_code" type="text" onChange={handleInputChange} placeholder="Enter your PIN/ZIP Code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pin/zipcode">
                    <Form.Label className='labelsStyle'>Your City/Location</Form.Label>
                    <Form.Control className='inputStyle' name="city" type="text" onChange={handleInputChange} placeholder="Enter your City Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                    <Form.Label className='labelsStyle'>Your City/Location</Form.Label>
                    <Form.Select aria-label="Country 1" name="country" className='inputStyle' onChange={handleInputChange}>
                        <option value='country1'>Country 1</option>
                        <option value="country2">Country 2</option>
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col sm={6}>
                <Form.Group className="mb-3" controlId="yourDesignation">
                    <Form.Label className='labelsStyle'>Your Designation</Form.Label>
                    <Form.Control className='inputStyle' name="designation" type="text" onChange={handleInputChange} placeholder="Enter your designation" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourTeamCode">
                    <Form.Label className='labelsStyle'>Your Team Code</Form.Label>
                    <Form.Control className='inputStyle' name="teamCode" onChange={handleInputChange} type="text" placeholder="Enter your team code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nativeLanguage">
                    <Form.Label className='labelsStyle'>Your Native Language</Form.Label>
                    <Form.Select aria-label="native_language" name="native_langauage" className='inputStyle' onChange={handleInputChange}>
                        <option value="English">English</option>
                        <option value="chinese">Chinese</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nationality">
                    <Form.Label className='labelsStyle'>Your Nationality</Form.Label>
                    <Form.Select aria-label="nationality" name="nationality" className='inputStyle' onChange={handleInputChange}>
                        <option value="english">English</option>
                        <option value="chinese">Chinese</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourPhoto">
                    <Form.Label className='labelsStyle'>Your Photo</Form.Label>
                    <Form.Control name="photoDescription" onChange={handleInputChange} className='inputStyle' as="textarea" rows={3}/>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload new photo</Form.Label>
                    <Form.Control name="image" onChange={handleInputChange} className='inputStyle' type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourVision">
                    <Form.Label className='labelsStyle'>Your Vision</Form.Label>
                    <Form.Control name="vision" onChange={handleInputChange} className='inputStyle' as="textarea" rows={3}/>
                </Form.Group>
                <Button onClick={handleSubmitProfile} variant="dark" className='w-100'>{updating? "Updating" : "Update"}</Button>

            </Col>
        </Row>
        </Form>:"Loading"}
      </Container>
    </div>
  )
}

export default MyProfileForm
