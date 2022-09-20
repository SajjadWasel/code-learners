import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { CodeBracketIcon, HomeIcon, PhoneIcon, UsersIcon } from '@heroicons/react/24/solid'


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navber">
      <Container>
        <Navbar.Brand href='/'>
          <h3 className="fw-bold"><span className="violet">Coding</span> Learners</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">

            <CustomLink to='/'>
              <HomeIcon className="nav-svg d-lg-none " />
              Home
            </CustomLink>
            <hr />
            <CustomLink to='about'>
              <UsersIcon className="nav-svg d-lg-none " />
              About
            </CustomLink>
            <hr />
            <CustomLink to='courses'>
              <CodeBracketIcon className="nav-svg d-lg-none ms-" />
              Courses
            </CustomLink>
            <hr />
            <CustomLink to='contact'>
              <PhoneIcon className="nav-svg d-lg-none" />
              Contact
            </CustomLink>
            <hr />

          </Nav>
          <Nav className='d-flex justify-content-center align-items-center'>
            <button className="btn-outline me-md-2">
              Sign In
            </button>
            <button className="btn-full ms-md-2">
              Sign Up
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;