import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const InputPostHome = () => {
  return (
    <>
      <Col className="bg-white rounded-3 pt-3 px-3">
        <Row className="align-items-center px-3">
          <Col className="px-0" xs={2}>
            <img src="#" alt="." />
          </Col>
          <Col className="px-0">
            <Form.Control
              type="search"
              placeholder="    Avvia un post"
              className=" me-2 border-dark rounded-pill"
            />
          </Col>
        </Row>
        <Row className="py-3 ">
          <Col xs={12} className="d-flex px-0 text-center">
            <Col>
              <Button className="bg-transparent border-0 text-dark">
                📸 Foto
              </Button>
            </Col>
            <Col>
              <Button className="bg-transparent border-0 text-dark">
                📽️ Video
              </Button>
            </Col>
            <Col>
              <Button className="bg-transparent border-0 text-dark">
                📆 Evento
              </Button>
            </Col>
            <Col xs={4}>
              <Button className="bg-transparent border-0 text-dark ">
                🖊️ Scrivi un articolo
              </Button>
            </Col>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default InputPostHome;
