import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SearchJobs = () => {
  const searchResults = useSelector((state) => state.searchJobs.content);
  return (
    <Container>
      <Row>
        <Col>
          <Row className="mx-1">
            <Col xs={1}>
              <img
                style={{ width: "40px" }}
                src="https://picsum.photos/40"
                alt=""
              />
            </Col>
            <Col xs={9} className="d-flex flex-column px-3 testoGray">
              <span className="fw-semibold">RUOLO</span>
              <span className=" fw-light">AZIENDA</span>
              <span className=" fw-light">LUOGO</span>

              <span className=" fw-light">
                PROMOSSO IN SVG CANDIDATURA SEMPLICE
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJobs;
