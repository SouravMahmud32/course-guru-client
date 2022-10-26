import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .ctach(error => console.error(error))
    }

  return (
    <Navbar collapseOnSelect className="mb-4" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'>courseGuru</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Courses</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            {
                user?.uid ?
                <>
                <span>{user?.displayName}</span>
                <Button onClick={handleLogOut} variant="danger">Log Out</Button>
                </>
                :
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ?
              <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
              : <FaUser></FaUser>
              }
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
