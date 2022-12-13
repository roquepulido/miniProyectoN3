import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/calculadora">Calculadora</Nav.Link>
              <Nav.Link as={Link} to="/notas">Notas</Nav.Link>
              <Nav.Link as={Link} to="/tareas">Tareas</Nav.Link>
              <Nav.Link as={Link} to="/calendario">Calendario</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Layout;

{
  /* <div>
      <h1>Layout</h1>
      <nav>
        <ul>
           <li>
             <Link to="/">Inicio</Link>
           </li>
           <li>
             <Link to="/calculadora">Calculadora</Link>
           </li>
           <li>
             <Link to="/calendario">Calendario</Link>
           </li>
           <li>
             <Link to="/notas">Notas</Link>
           </li>
           <li>
             <Link to="/tareas">Tareas</Link>
           </li>
         </ul>
       </nav>
       <Outlet/>
    </div> */
}
