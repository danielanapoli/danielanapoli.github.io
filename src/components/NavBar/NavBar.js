import Container from 'react-bootstrap/Container';
import DropdownDivider from 'react-bootstrap/DropdownDivider';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                <NavDropdown title='Industry' id='industry-dropdown'>
                  <DropdownItem href='/industry'>Industry Overview</DropdownItem>
                    <DropdownDivider />
                  <DropdownItem href='/industry/requirements'>Requirements discovery</DropdownItem>
                  <DropdownItem href='/industry/automation'>Persona automation</DropdownItem>
                  <DropdownItem href='/industry/benchmarking'>Usability benchmarking</DropdownItem>
                  <DropdownItem href='/industry/workflows'>Workflow improvements</DropdownItem>
                </NavDropdown>
                <NavDropdown title='Academic' id='academic-dropdown'>
                  <DropdownItem href='/academic'>Academic Overview</DropdownItem>
                  <DropdownDivider />
                  <DropdownItem href='/academic/toolkit'>Design toolkit</DropdownItem>
                  <DropdownItem href='/academic/publications'>Paper publications</DropdownItem>
                  <DropdownItem href='/academic/talks'>Talks and workshops</DropdownItem>
                </NavDropdown>
                <NavLink href='/research-tools'>Tools</NavLink>
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