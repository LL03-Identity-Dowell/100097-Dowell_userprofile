import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';



const PsychographicProfile = (userData) => {
  const [formInputs, setFormInputs] = useState({
    lifestyle:"",
    iqlevel:"",
    attitude:"",
    personality:"",
    others:""
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
      lifestyle:formInputs.lifestyle,
      iqlevel:formInputs.iqlevel,
      attitude:formInputs.attitude,
      personality:formInputs.personality,
      others:formInputs.others
    };
  
    try {
      const response = await fetch("https://100097.pythonanywhere.com/Psychographic_form", {
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

      <p className="myProfile text-white fw-bold text-center">10. Psychographic Profile</p>
      <Form>
        <Form.Group className="mb-3" controlId="lifestyle">
          <Form.Label className='labelsStyle'>Your Life Style</Form.Label>
          <Form.Select aria-label="lifestyle" className='inputStyle' onChange={handleOnChange}>
            <option value="modern">Modern</option>
            <option value="traditional">Traditional</option>
            <option value="trendsetter">Trendsetter</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="iqlevel">
          <Form.Label className='labelsStyle'>Your IQ Level</Form.Label>
          <Form.Select aria-label="iqlevel" className='inputStyle' onChange={handleOnChange}>
              <option>Above 140 - <sup>""</sup>Near<sup>""</sup> genius or genius</option>
              <option value="verSuperior">120 - 140 Very superior intelligence</option>
              <option value="Superior">110 - 110 Superior intelligence</option>
              <option value="Normal">90 - 110 - Normal, or average, intelligence</option>
              <option value="belowAverage">Below 90 - Below Average</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="attitude">
          <Form.Label className='labelsStyle'>Your Attitude</Form.Label>
          <Form.Select aria-label="attitude" className='inputStyle' onChange={handleOnChange}>
              <option value="innovators">Innovators</option>
              <option value="earlyAdopters">Early Adopters</option>
              <option value="earlyMajority">Early Majority</option>
              <option value="lateMajority">Late Majority</option>
              <option value="leggards">Leggards</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="personality">
          <Form.Label className='labelsStyle'>Your Personality (test using https://www.16personalities.com/)</Form.Label>
          <Form.Select aria-label="personality" className='inputStyle' onChange={handleOnChange}>
              <option value="architect">Architect</option>
              <option value="logician">Logician</option>
              <option value="commander">Commander</option>
              <option value="advocate">Advocate</option>
              <option value="mediator">Mediator</option>
              <option value="protaganist">Protagonist</option>
              <option value="compaigner">Compaigner</option>
              <option value="logistician">Logistician</option>
              <option value="defender">Defender</option>
              <option value="executive">Executive</option>
              <option value="consul">Consul</option>
              <option value="virtuoso">Virtuoso</option>
              <option value="Adventurer">Adventurer</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="virtuoso">Entertainer</option>

          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="others">
          <Form.Label className='labelsStyle'>Others</Form.Label>
          <Form.Control className='inputStyle' placeholder='Other details' onChange={handleOnChange}/>
        </Form.Group>
        <Button variant="dark" className='w-100' onClick={handleSubmit}>{loading ? "Updating..." : "Update Psychographic Profile"}</Button>

      </Form>
    </div>
  )
}

export default PsychographicProfile
