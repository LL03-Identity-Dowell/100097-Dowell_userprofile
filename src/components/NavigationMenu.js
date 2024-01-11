import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';


function NavigationMenu() {
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);

    const session_id = sessionStorage.getItem("session_id")
    console.log(session_id)
const showShop = (e)=>{
    setShow(!show);
}
const hideShop = e => {
    setShow(false);
}
const showLoginHandle = (e)=>{
    setShowLogin(!showLogin);
}
const hideLoginHandle = e => {
    setShowLogin(false);
}
const showLanguageHandle = (e)=>{
    setShowLanguage(!showLanguage);
}
const hideLanguageHandle = e => {
    setShowLanguage(false);
}
function handleSignOut() {
  // Remove session ID from session storage
  sessionStorage.removeItem('session_id');

  // Redirect to the sign-out URL
  // navigate('https://100014.pythonanywhere.com/sign-out');
  window.location.href = ('https://100014.pythonanywhere.com/sign-out');

}
  return (
    <Navbar expand="lg" className="bg-white navBar">
      <Container>
        <Navbar.Brand href="#home">
         <Image src="/images/logo.webp" width={100} height={60}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='menuLinks' href={`https://100093.pythonanywhere.com/?session_id=${session_id}`}>Home</Nav.Link>
            <Nav.Link className='menuLinks' href="#link">About Us</Nav.Link>
            <Nav.Link className='menuLinks' href="#link">FAQ</Nav.Link>
            <NavDropdown 
                title="Shop" 
                id="shop"  
                show={show}
                onMouseEnter={showShop} 
                onMouseLeave={hideShop} 
                className='menuLinks'
            >
              <NavDropdown.Item href="#action/3.1">Amazon</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shopify</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shopping Cart</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown 
                title="Login" 
                id="login"  
                show={showLogin}
                onMouseEnter={showLoginHandle} 
                onMouseLeave={hideLoginHandle}
                className='menuLinks'
            >

              <NavDropdown.Item href="#action/3.1">Weblogin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Extension</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Google Playstore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Apple Store</NavDropdown.Item>
              <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>

            </NavDropdown>
      
          </Nav>
        </Navbar.Collapse>
        <Nav>
        <NavDropdown 
                title={<div style={{display: "inline-block"}}><img src='/images/english.png' className='langIcons'/> English </div>}
                id="Language"  
                show={showLanguage}
                onMouseEnter={showLanguageHandle} 
                onMouseLeave={hideLanguageHandle}
                className='menuLinks'
            >

              <NavDropdown.Item href="#action/3.1"><img src='/images/yangfang.png' className='langIcons'/>简体中文"</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><img src='/images/espanol.png' className='langIcons'/>Español</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img src='/images/deutsh.png' className='langIcons'/>Deutsch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img src='/images/francais.png' className='langIcons'/>Français</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img src='/images/hi_IN.png' className='langIcons'/>हिन्दी</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img src='/images/Português.png' className='langIcons'/>Português</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img src='/images/ja.png' className='langIcons'/>日本語</NavDropdown.Item>


            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;