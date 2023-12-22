import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const UsageProfile = (userData) => {
  const usage_data = userData._usage;
  console.log(usage_data)
  const [formInputs, setFormInputs] = useState({
    favoriteProduct: usage_data.awareness_level || "",
    awareness: usage_data.usage_rate || "",
    purpose: usage_data.purpose || "",
    others: usage_data.others || ""
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
      favoriteProduct:formInputs.favoriteProduct,
      awareness:formInputs.awareness,
      purpose:formInputs.purpose,
      others:formInputs.others
    };
  
    try {
      const response = await fetch("https://100097.pythonanywhere.com/usage_form", {
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
      <p className="myProfile text-white fw-bold text-center">12. Usage Profile</p>
      <Form>
        <Form.Group className="mb-3" controlId="favoriteProduct">
          <Form.Label className='labelsStyle'>Usage rate for your favourite product or service</Form.Label>
          <Form.Select aria-label="favoriteProduct" className='inputStyle' onChange={handleOnChange} value={formInputs.favoriteProduct}>
            <option value="heavy">Heavy</option>
            <option value="medium">Medium</option>
            <option value="light">Light</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="awareness">
          <Form.Label className='labelsStyle'>Awareness level while using the product or service</Form.Label>
          <Form.Select aria-label="awareness" className='inputStyle' onChange={handleOnChange} value={formInputs.awareness}>
            <option value="unaware">Unaware</option>
            <option value="aware">Aware</option>
            <option value="intrested">Intrested</option>
            <option value="enthsiastic">Enthusiastic</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="purpose">
          <Form.Label className='labelsStyle'>Purpose while using the product or service</Form.Label>
          <Form.Select aria-label="purpose" className='inputStyle' onChange={handleOnChange} value={formInputs.purpose}>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="leisure">Leisure</option>
            <option value="personal">Personal</option>
            <option value="gift">Gift</option>
          </Form.Select>
        </Form.Group> 
        <Form.Group className="mb-3" controlId="others">
          <Form.Label className='labelsStyle'>Others</Form.Label>
          <Form.Control className='inputStyle' type="text" placeholder="other details" onChange={handleOnChange} value={formInputs.others}/>
        </Form.Group> 
        <Button variant="dark" className='w-100' onClick={handleSubmit}>{loading ? "Updating..." : "Update Usage Profile"}</Button>
      </Form>
    </div>
  )
}

export default UsageProfile
