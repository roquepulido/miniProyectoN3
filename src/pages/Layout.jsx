import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";


function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"><i className="bi bi-map me-2"></i>Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex w-100 justify-content-around">
              <Nav.Link as={Link} to="/calculadora"><i className="bi bi-calculator me-2"></i>Calculadora</Nav.Link>
              <Nav.Link as={Link} to="/notas"><i className="bi bi-stickies me-2"></i>Notas</Nav.Link>
              <Nav.Link as={Link} to="/tareas"><i className="bi bi-card-checklist me-2"></i>Tareas</Nav.Link>
              <Nav.Link as={Link} to="/calendario"><i className="bi bi-calendar-event me-2"></i>Calendario</Nav.Link>
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
