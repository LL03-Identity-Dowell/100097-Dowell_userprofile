import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';


const BehaviouralProfile = (userData) => {
    const behavioural_profile = userData._behavioural
    const [formInputs, setFormInputs] = useState({
        benefits: behavioural_profile.benefits || "",
        buying:behavioural_profile.role || "",
        brand:behavioural_profile.brand_loyalty || "",
        others: behavioural_profile.others_behaviour || ""
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
            benefits:formInputs.benefits,
            buying:formInputs.buying,
            brand:formInputs.brand,
            others:formInputs.others
        };
      
        try {
          const response = await fetch("https://100097.pythonanywhere.com/Behaviour_form", {
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
    <div>
        <ToastContainer position="top-right"/>

     <p className="myProfile text-white fw-bold text-center">11. Behavioural Profile</p>

      <Form>

                <Form.Group className="mb-3" controlId="benefits">
                    <Form.Label className='labelsStyle'>Benefits you are looking while buying any product or service</Form.Label>
                    <Form.Select aria-label="benefits" className='inputStyle' onChange={handleOnChange} value={formInputs.benefits}>
                        <option value="Convenience">Convenience</option>
                        <option value="longLasting">Long Lasting</option>
                        <option value="economy">Economy</option>
                        <option value="valueForMoney">Value For Money</option>
                        <option value="mobility">Mobility</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="buying">
                    <Form.Label className='labelsStyle'>Your role while buying any product or service</Form.Label>
                    <Form.Select aria-label="buying" className='inputStyle' onChange={handleOnChange} value={formInputs.buying}>
                        <option value="initiator">Initiator</option>
                        <option value="influencer">Influencer</option>
                        <option value="decider">Decider</option>
                        <option value="gatekeeper">Gatekeeper</option>
                        <option value="buyer">Buyer</option>
                        <option value="user">User</option>

                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="brand">
                    <Form.Label className='labelsStyle'>Brand loyalty level you will consider while buying any product or service</Form.Label>
                    <Form.Select aria-label="brand" className='inputStyle' onChange={handleOnChange} value={formInputs.brand}>
                        <option value="Convenience">1 (Low)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (High)</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="others">
                    <Form.Label className='labelsStyle'>Others</Form.Label>
                    <Form.Control className='inputStyle' type="text" placeholder="other details" onChange={handleOnChange} value={formInputs.others}/>
                </Form.Group>
                <Button variant="dark" className='w-100' onClick={handleSubmit}>{loading ? "Updating..." : "Update Behavioural Profile"}</Button>

                </Form>
                   </div>
  )
}

export default BehaviouralProfile
