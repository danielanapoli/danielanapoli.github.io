import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavLink from 'react-bootstrap/NavLink';

function navBar(){
    return(
        <Container fluid>
          <Navbar collapseOnSelect expand='lg' bg='light' data-bs-theme='light'>
          <Container>
          <NavbarBrand href='/'>Daniela Napoli</NavbarBrand>
          <NavbarToggle aria-controls='basic-navbar-nav' />
          <NavbarCollapse id='responsive-nav-bar'>
          <Nav>
            <NavLink href='/'>Home</NavLink>  
            <NavLink href='/user-research'>User Research</NavLink>
            <NavLink href='/academic'>Publications</NavLink>
            <NavLink href='/research-tools' disabled>Tools (coming soon)</NavLink>
            <NavLink href='/resume'>Resume</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
          </Nav>
          </NavbarCollapse>
        </Container>
        </Navbar>
        <br/>
        </Container>
    );
}

export default navBar;