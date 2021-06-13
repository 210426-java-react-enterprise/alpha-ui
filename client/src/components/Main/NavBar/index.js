import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import RegisterModal from "../Modal/Register";
import SignInModal from "../Modal/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { authState, loggedOut } from "../../../features/auth/authSlice";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authState);
  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);

  const [showSignIn, setShowSignIn] = useState(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const handleSignOut = () => dispatch(loggedOut());

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand style={{ color: "#0beeff" }}>AlphaCast</Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!auth.isAuthenticated && (
            <>
              <Nav.Link className="text-light" onClick={handleShowRegister}>
                Register
              </Nav.Link>

              <Nav.Link className="text-light" onClick={handleShowSignIn}>
                Sign in
              </Nav.Link>
            </>
          )}
          {auth.isShown && (
            <Nav.Link className="text-light">My Events</Nav.Link>
          )}
          {auth.isAuthenticated && (
            <>
              <Link className="text-light d-lg-flex justify-content-center align-items-center" to="/events">
                Search Events
              </Link>

              <Nav.Link className="text-light" onClick={handleSignOut}>
                SignOut
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      <RegisterModal
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
      <SignInModal showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
    </Navbar>
  );
};
export default NavBar;
