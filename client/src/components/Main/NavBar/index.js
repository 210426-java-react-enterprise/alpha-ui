import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import RegisterModal from "../Modal/Register";
import SignInModal from "../Modal/SignIn";

const NavBar = () => {
  
  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);

  const [showSignIn, setShowSignIn] = useState(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const toggleRegister = () => {
    handleShowRegister();
  };

  const toggleSignIn = () => {
    handleShowSignIn();
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-success">AlphaCast</Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-light" onClick={toggleRegister}>
            Register
          </Nav.Link>
          <Nav.Link className="text-light" onClick={toggleSignIn}>
            SignIn
          </Nav.Link>
          {/* <Nav.Link className="text-light" onClick={handleLogout}>
            Logout
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
      <RegisterModal showRegister={showRegister} setShowRegister={setShowRegister} />
      <SignInModal showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
    </Navbar>
  );
};
export default NavBar;
