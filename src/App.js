import React, { useEffect, useState } from "react";
import Loader from './components/Loader';
import { useNavigate } from "react-router-dom";
import Home from './components/Home'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const searchParams = new URLSearchParams(window.location.search);
  let [userData, setUserData] = useState(null)
  let [profileView, setProfileView] = useState(null)

  const navigate = useNavigate();

  const sessionID = searchParams.get("session_id");
  console.log(sessionID)
  useEffect(() => {
    const apiUrl = "https://100014.pythonanywhere.com/api/userinfo/";
    if (!sessionID) {
      const redirectUrl =
        "https://100014.pythonanywhere.com/?redirect_url=http://127.0.0.1:3000";
      if (typeof window !== "undefined") {
        window.location.href = redirectUrl;
      }
    } else {
      async function fetchUserInfo() {
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ session_id: sessionID }),
            
          });

          const data = await response.json();
           setUserData(data)
    handleSubmitProfile(data.userinfo.username);

          console.log("User:", data);
          console.log("userData:", userData);

          if (data.message === "You are logged out, Please login and try again!!") {
            navigate(
              "https://100014.pythonanywhere.com/en/?redirect_url=" 
            );
          } else {
            // sessionStorage.setItem("User data", JSON.stringify(data));
            // sessionStorage.setItem("custId", dataObject.customerID);
            // sessionStorage.setItem("userId", dataObject.userID);
            navigate('/components/Home');
          }
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }

      fetchUserInfo();
    }
  }, []);
  //user profile info api
  const handleSubmitProfile = async (username) => {
    const formData={
      username:username   
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch('https://100014.pythonanywhere.com/api/profile_view/', requestOptions);
      const responseData = await response.json();
      setProfileView(responseData)
      console.log(responseData)
      console.log(JSON.stringify(requestOptions))
      if (response.ok) {

        // alert('Form submitted successfully');
      } else {
        // alert('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  return  profileView ? <Home userInfo={userData} profileView={profileView}/> : <Loader/>
  ;
};

export default App;
