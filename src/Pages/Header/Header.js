import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Aircraft Injiniaring</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {/* eikhane href er vitor /home keno deya lge  */}
                        <Nav.Link as={HashLink} className="text-white" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/home#experts">Experts</Nav.Link>
                        {user?.email ?
                            <div onClick={logOut} className="btn btn-secondary">Logout</div> :
                            <Nav.Link as={HashLink} className="text-white" to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;