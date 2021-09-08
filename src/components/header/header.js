import React from 'react'
import { Button,Navbar, Nav, Container, NavDropdown,Image } from 'react-bootstrap'
import './header.scss';
import Logo from './assets/large_nutriyummy.png';

export const Header = () => {
    return (
        <>
        <div>
        <Navbar  className='color-nav' bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Button style={{margin:"2%",backgroundColor:"var(--bs-orange)"}} variant="primary">Go somewhere</Button>
          </Container>
        </Navbar>
         </div>
        <div>  
            <Navbar className='nav2' bg="light" expand="lg">
                <Container>
                <Navbar.Brand> 
                <Image src={Logo} style={{width:"120px",height:"62px"}} />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/complaint">Register a Complaint</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </>
    )
}

export default Header;
