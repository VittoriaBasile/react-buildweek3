import React from "react";
import { Button, Col } from "react-bootstrap";

const HomeProfileSection = () => {
  return (
    <>
      <Col className="bg-white rounded-3 p-1 ">
        <Col className="border-bottom">{/* img-background */}img</Col>
        <Col>
          <Col>{/* img-profile */}img-profile </Col>
          <Col className="fw-bold text-center">
            {/* nome dinamico */}Andrea Barocchi
          </Col>
          <Col className="text-center">
            {/* bio */}Full Stack Web Developer Student presso Epicode
          </Col>
        </Col>
        <Col className="border-top border-bottom p-3">
          <Col className="d-flex justify-content-between">
            <p className="mb-0">Collegamenti</p>
            <p className="mb-0 text-primary fw-bold">60</p>
          </Col>
          <p className="fw-bold">Espandi la tua rete</p>
          <Col className="d-flex justify-content-between">
            <p className="mb-0">Chi ha visitato il tuo profilo?</p>
            <p className="mb-0 text-primary fw-bold">18</p>
          </Col>
        </Col>
        <Col className="p-3 opacity-75 border-bottom">
          <p className="mb-0">Accedi a strumenti e informazioni in esclusiva</p>
          ➕
          <a href="#" className="text-dark fw-bold">
            Prova Premium Gratis
          </a>
        </Col>
        <Col>
          <Button className="bg-transparent text-dark border-0 fw-bold py-3">
            ➕ I miei elementi
          </Button>
        </Col>
      </Col>
    </>
  );
};

export default HomeProfileSection;
