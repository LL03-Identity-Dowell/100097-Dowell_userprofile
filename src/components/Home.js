import React from 'react';
import NavigationMenu from './NavigationMenu';
import Main from './Main'
const Home = (data) => {

  const userData = data.userInfo
  const profile = data.profileView
  return (
    <div>
       <NavigationMenu/>
      <Main data={userData} profileData={profile}/>
    </div>
  )
}

export default Home
