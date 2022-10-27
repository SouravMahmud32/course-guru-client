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
import ReactTooltip from 'react-tooltip';
import { FaCuttlefish } from "react-icons/fa";
import ReactSwitch from "react-switch";

const Header = () => {
    const {user, toggleTheme, theme, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .ctach(error => console.error(error))
    }

  return (
    <Navbar collapseOnSelect className="mb-4 text-decoration-none" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link style={{textDecoration: 'none'}} to='/'><FaCuttlefish></FaCuttlefish>courseGuru</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-decoration-none">
            <Nav.Link><Link style={{textDecoration: 'none'}} to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration: 'none'}} to='/'>Courses</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration: 'none'}} to='/blog'>Blogs</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            {
                user?.uid ?
                <>
                <span></span>
                <Button onClick={handleLogOut} variant="danger">Log Out</Button>
                </>
                :
                <>
                    <Link style={{textDecoration: 'none'}} className='me-2' to='/login'>Login</Link>
                    <Link style={{textDecoration: 'none'}}  to='/register'>Register</Link>
                </>
            }
            </Nav.Link>
            <Nav.Link eventKey={2}>
              {user?.photoURL ?
              <Image data-tip={user?.displayName} style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
              : <FaUser data-tip="guest"></FaUser>
              }
            </Nav.Link>
            <div style={{width: '70px'}}>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}></ReactSwitch>
            </div>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
        <ReactTooltip />
      </Container>
    </Navbar>
  );
};

export default Header;
