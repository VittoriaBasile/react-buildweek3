import { Container, Row } from "react-bootstrap";

const SearchJobs = () => {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Row className="mx-1">
            <Col xs={1}>
              <img style={{ width: "40px" }} src="https://picsum.photos/40" alt="" />
            </Col>
            <Col xs={9} className="d-flex flex-column px-3 testoGray">
              <span className="fw-semibold">RUOLO</span>
              <span className=" fw-light">AZIENDA</span>
              <span className=" fw-light">LUOGO</span>

              <span className=" fw-light">PROMOSSO IN SVG CANDIDATURA SEMPLICE</span>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <div></div>
        </Col>
      </Row>
    </Container>
  );
};
export default SearchJobs;
