import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Header = () => (
  <Navbar style={{ background: 'var(--dark-pink)' }}>
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <NavLink to="/">
        <FaAngleLeft className="text-body-primary" size={26} color="white" />
      </NavLink>
      <h1 className="mb-0">Finance App</h1>
      <div />
    </Container>
  </Navbar>
);

export default Header;
