'use client';

import { usePathname } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavLink from 'react-bootstrap/NavLink';

const navLinks = [
  { href: '/',              label: 'Home',          exact: true },
  { href: '/user-research', label: 'User Research'              },
  { href: '/academic',      label: 'Academic'                   },
  { href: '/resume',        label: 'Resume'                     },
  { href: '/contact',       label: 'Contact'                    },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <Container fluid>
      <Navbar collapseOnSelect expand='lg' bg='light' data-bs-theme='light'>
        <Container>
          <NavbarBrand href='/'>Daniela Napoli</NavbarBrand>
          <NavbarToggle aria-controls='basic-navbar-nav' />
          <NavbarCollapse id='basic-navbar-nav'>
            <Nav>
              {navLinks.map(({ href, label, exact }) => (
                <NavLink
                  key={href}
                  href={href}
                  active={exact ? pathname === href : pathname.startsWith(href)}
                >
                  {label}
                </NavLink>
              ))}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <br />
    </Container>
  );
}

export default NavBar;
