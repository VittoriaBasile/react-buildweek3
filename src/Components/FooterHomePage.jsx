import React from "react";
import { Col, NavDropdown, Row } from "react-bootstrap";

const FooterHomePage = () => {
  return (
    <>
      <Row>
        <Col className="footer-links text-center py-2 pb-4 ">
          <Col>
            <a className="footer-links pe-3" href="#">
              Informazioni
            </a>
            <a className="footer-links" href="#">
              Accessibilità
            </a>
          </Col>
          <Col>
            <a className="footer-links" href="#">
              Centro Assistenza
            </a>
          </Col>
          <Col>
            <NavDropdown
              title="Privacy e Condizioni"
              className="footer-links"
            />
          </Col>
          <Col>
            <a className="footer-links" href="#">
              Opzioni per gli annunci pubblicitari
            </a>
          </Col>
          <Col>
            <a className="footer-links" href="#">
              Pubblicità
            </a>
            <NavDropdown
              title="Servizi alle aziende"
              className="footer-links "
            />
          </Col>
          <Col className="g-2">
            <a className="footer-links pe-3" href="#">
              Scarica l'app di Linkedin
            </a>
            <a className="footer-links" href="#">
              Altro
            </a>
          </Col>
        </Col>
      </Row>

      <Col className="footer-links d-flex text-center">
        <Col className="px-0" xs={3}>
          <img src="#" alt="..." />
        </Col>
        <Col className="px-0">
          <p className="footer-links mb-0 fw-bold">
            LinkedIn Corporation © 2023
          </p>
        </Col>
      </Col>
    </>
  );
};

export default FooterHomePage;
