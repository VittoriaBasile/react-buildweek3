import React from "react";
import { Col, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="px-5 ">
        <Container className="d-flex px-5">
          <Navbar.Brand href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              class="bi bi-linkedin text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Col xs={2}>
              <Form className="d-flex bg-light">
                <span className="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-search mt-2 ms-2 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <Form.Control
                  type="search"
                  placeholder="    Search"
                  className="input-search me-2 border-0 rounded"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1" className="link-nav ">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="link-nav ">
                Rete
              </Nav.Link>
              <Nav.Link href="#action2" className="link-nav ">
                Lavoro
              </Nav.Link>
              <Nav.Link href="#action2" className="link-nav ">
                Messaggistica
              </Nav.Link>
              <Nav.Link href="#action2" className="link-nav ">
                Notifiche
              </Nav.Link>
              <NavDropdown title="Tu" className="border-end link-nav ">
                <NavDropdown.Item href="#action3">Lavoro</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Messaggistica</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Notifiche</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Lavoro" className="link-nav ">
                <NavDropdown.Item href="#action3">Lavoro</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Messaggistica</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Notifiche</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-gratis text-decoration-underline">Prova Premium gratis</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Topbar;
