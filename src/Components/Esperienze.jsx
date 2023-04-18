import { Card, Col, Row } from "react-bootstrap";

const Esperienze = () => {
  return (
    <Card className="EsperienzaCard mt-3">
      <Row className="mx-1 my-2 align-items-center">
        <Col xs={10}>
          <Card.Title className="fs-5">Esperienza</Card.Title>
        </Col>
        <Col xs={1}>
          <button className="btnModificaProfilo border-0 rounded-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#666666"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </button>
        </Col>
      </Row>
      <Row className="mx-1">
        <Col xs={1}>
          <img style={{ width: "40px" }} src="https://picsum.photos/40" alt="" />
        </Col>
        <Col xs={8} className="d-flex flex-column px-3 testoGray">
          <span className="fw-semibold">lavoro</span>
          <span className=" fw-light">azienda-tipo contratto</span>
          <span className=" fw-light">durata esperienza-tempo passato dalla fine dell' esperienza</span>
          <span className=" fw-light">luogo</span>
        </Col>

        <Col xs={1}>
          <button className="btnModificaProfilo border-0 rounded-circle ">
            <svg
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </button>
        </Col>
      </Row>
      <div className="px-3">
        <hr className="testoGray" />
      </div>
    </Card>
  );
};
export default Esperienze;
