import React,{useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Toast, ToastContainer } from 'react-bootstrap';


const SetPassword = (userData) => {
  const [updating, setUpdating] = useState(false);

  console.log("PAss",userData.userData)
  const userName=userData.userData.userData.userinfo.username
  const [formData, setFormData] = useState({
    username:userData.userData.userData.userinfo.username,
    old_password:"",
    new_password:"" 
  });

  const handleSubmitPassword = async (e) => {
    setUpdating(true);

    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch('https://100014.pythonanywhere.com/api/password_change/', requestOptions);
      const responseData = await response.json();
      console.log(responseData)
      console.log(JSON.stringify(requestOptions))
      if (response.ok) {
        setUpdating(false);

        alert(responseData.info);
      } else {
        setUpdating(false);
        alert(responseData.info);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
   
        <div>
      <Container fluid className='mb-5'>
        <Row>
            <Col sm={6}>
            <p className="myProfile text-white fw-bold text-center">02. Set Alphanumeric Password</p>
            <p className='fst-italic grayText'>Password Rules</p>
            <ol className='fst-italic grayText'>
              <li>Minimum 8 characters</li>
              <li>Alphanumeric</li>
            </ol>
            </Col>
            <Col sm={6}>
              <Form>
                <Form.Group className="mb-3" controlId="currentpassword">
                    <Form.Label className='labelsStyle'>Your current Password</Form.Label>
                    <Form.Control name="old_password"  value={formData.old_password} onChange={handleInputChange} className='inputStyle' type="password" placeholder="Current Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newPassword">
                    <Form.Label className='labelsStyle'>Your new Password</Form.Label>
                    <Form.Control name="new_password"  value={formData.new_password} onChange={handleInputChange} className='inputStyle' type="password" placeholder="New Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label className='labelsStyle'>Confirm new Password</Form.Label>
                    <Form.Control className='inputStyle' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button disabled={updating} onClick={handleSubmitPassword} variant="dark" className='w-100'>{updating ? 'Updating' : 'Update Password'}</Button>
              </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SetPassword
