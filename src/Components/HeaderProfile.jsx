import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";

const HeaderProfile = () => {
  return (
    <>
      <Container className="containerCard">
        <Card style={{ width: "780px" }} className="border border-secondary">
          <Card.Img className="profile-background-image bg-secondary" variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Row>
              <Col>
                <img className="profileImg border border-secondary rounded-circle" src="holder.js/80px" alt="" />
                <Card.Title>NOME UTENTE</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <span className="text-secondary fs-6">luogo</span>
                <span>-</span>
                <span className="text-primary fs-6">informazioni di contatto</span>
              </Col>
              <Col className="ms-5">
                <Row className="">
                  <div className="d-flex justify-content-end">
                    <Button className="border-0 bg-transparent text-secondary" style={{ width: "50px" }}>
                      svg
                    </Button>
                  </div>
                </Row>

                <Row>
                  <img style={{ width: "32px" }} src="" alt="" />

                  <span className="text-dark">AZIENDA</span>
                </Row>
              </Col>
            </Row>
            <p className="text-primary fs-6">N collegamenti</p>
            <Row>
              <Col xs={3} className="text-center p-0">
                <Button variant="primary" className="rounded-pill">
                  Disponibile per
                </Button>
              </Col>
              <Col xs={4} className="text-start p-0">
                <Button variant="light" className="text-primary border border-primary rounded-pill">
                  Aggiungi sezione del profilo
                </Button>
              </Col>
              <Col xs={2} className="text-start p-0">
                <Button variant="light" className="text-secondary border border-secondary rounded-pill">
                  Altro
                </Button>
              </Col>
            </Row>
            <Carousel>
              <Row className="mt-3 flex-nowrap overflow-auto">
                <Card className="d-flex flex-row" style={{ width: "370px", backgroundColor: "#dce6f1" }}>
                  <Card.Body className="hl-1">
                    <Col xs={9} className="">
                      <h3 className="fs-6">Disponibile a lavorare</h3>
                      <p className="mb-2  fs-6">lavoro</p>
                      <Card.Link href="#">Mostra dettagli</Card.Link>
                    </Col>
                  </Card.Body>

                  <Col xs={3} style={{ width: "10px" }}>
                    <div className="d-flex justify-content-end">
                      <Button className="border-0 bg-transparent text-secondary">svg</Button>
                    </div>
                  </Col>
                </Card>

                <Card className="d-flex flex-row" style={{ width: "370px" }}>
                  <Card.Body className="hl-1">
                    <Col xs={9} className="">
                      <span className="fs-6 fw-bold">Metti in risalto i servizi </span>
                      <span className="mb-2  fs-6">
                        che offri, così tu e la tua azienda potrete apparire nei risultati di ricerca.
                      </span>
                      <Card.Link href="#">Inizia</Card.Link>
                    </Col>
                  </Card.Body>

                  <Col xs={3} style={{ width: "10px" }}>
                    <div className="d-flex justify-content-end">
                      <Button className="border-0 bg-transparent text-secondary">X</Button>
                    </div>
                  </Col>
                </Card>

                <Card className="d-flex flex-row" style={{ width: "370px" }}>
                  <Card.Body className="hl-1">
                    <Col xs={9} className="">
                      <span className="fs-6 fw-bold">Fai sapere che stai facendo selezione </span>
                      <span className="mb-2  fs-6">e attrai candidati qualificati. </span>
                      <Card.Link href="#">Inizia</Card.Link>
                    </Col>
                  </Card.Body>

                  <Col xs={3} style={{ width: "10px" }}>
                    <div className="d-flex justify-content-end">
                      <Button className="border-0 bg-transparent text-secondary">X</Button>
                    </div>
                  </Col>
                </Card>
              </Row>
            </Carousel>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default HeaderProfile;
