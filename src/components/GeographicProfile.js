import React, {useState, useEffect} from 'react'
import {Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const GeographicProfile = (userData) => {
  const geographic_data = userData._geographic;
  const [formInputs, setFormInputs] = useState({
    residing: geographic_data.country || "",
    city: geographic_data.city || "",
    latitude: geographic_data.latitude || "",
    longitude: geographic_data.longitude || "",
    region: geographic_data.region || "",
    others: geographic_data.others || ""
  });
  const [loading, setLoading] = useState(false);

  const userName = userData.userData.userData.userinfo.username;
  const handleOnChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const data = {
      Username:userName,
      residing: formInputs.residing,
      city: formInputs.city,
      latitude: formInputs.latitude,
      longitude: formInputs.longitude,
      region: formInputs.region,
      others:formInputs.others
    };
  
    try {
      const response = await fetch("https://100097.pythonanywhere.com/Geographic_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
  
        toast.success("success");
      } else {
        throw new Error(`Failed to submit device IDs: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='mb-5'>
        <ToastContainer position="top-right"/>

      <p className="myProfile text-white fw-bold text-center">08. Geographic Profile</p>
      <Form>
        <Form.Group className="mb-3" controlId="residing">
          <Form.Label className='labelsStyle'>Country your residing for last 5 years</Form.Label>
          <Form.Select aria-label="residing" className='inputStyle' onChange={handleOnChange} value={formInputs.residing}>
            <option value="country1">Country 1</option>
            <option value="country2">Country 2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label className='labelsStyle'>City your residing for last 5 years</Form.Label>
          <Form.Control className='inputStyle' onChange={handleOnChange} type="text" placeholder="Enter your City" value={formInputs.city}/>
        </Form.Group> 
        <Form.Group className="mb-3" controlId="latitude">
          <Form.Label className='labelsStyle'>Latitude of your house</Form.Label>
          <Form.Control className='inputStyle' onChange={handleOnChange} type="text" placeholder="Latitude of the geo coordinates of your house" value={formInputs.latitude}/>
        </Form.Group> 
        <Form.Group className="mb-3" controlId="longititude">
          <Form.Label className='labelsStyle'>Longitude of your house</Form.Label>
          <Form.Control className='inputStyle' onChange={handleOnChange} type="text" placeholder="Longitude of the geo coordinates of your house" value={formInputs.longitude}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="region">
          <Form.Label className='labelsStyle'>Region inside location</Form.Label>
          <Form.Select aria-label="region" onChange={handleOnChange} className='inputStyle' value={formInputs.region}>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </Form.Select>
        </Form.Group> 
        <Form.Group className="mb-3" controlId="others">
          <Form.Label className='labelsStyle'>Others</Form.Label>
          <Form.Control className='inputStyle' onChange={handleOnChange} type="text" placeholder="other details" value={formInputs.others}/>
        </Form.Group> 
        <Button variant="dark" onClick={handleSubmit} className='w-100'>{loading ? "Updating..." : "Update Geographic Profile"}</Button>
      </Form>
    </div>
  )
}

export default GeographicProfile
