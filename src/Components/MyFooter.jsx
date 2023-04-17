import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => (
  <>
    <Container fluid className=" pt-5 d-flex ">
      <Container fluid className="d-flex ">
        <Row className="pb-5 ">
          <Col>
            <ul className="list-unstyled ">
              <Row className="d-flex pb-3 justify-content-between">
                <ul className="list-unstyled">
                  <Row className="d-flex pb-3 ">
                    <Col className="">
                      <a className="footer-links" href="#">
                        Informazioni
                      </a>
                    </Col>
                    <Col>
                      <a className="footer-links" href="#">
                        Accessibilità
                      </a>
                    </Col>
                    <Col>
                      <a className="footer-links" href="#">
                        Talent Solutions
                      </a>
                    </Col>
                  </Row>
                  <Row className="d-flex pb-3">
                    <Col>
                      <a className="footer-links" href="#">
                        Linee guida della community
                      </a>
                    </Col>
                    <Col>
                      <a className="footer-links" href="#">
                        Carriera
                      </a>
                    </Col>
                    <Col>
                      <a className="footer-links" href="#">
                        Soluzioni di marketing
                      </a>
                    </Col>
                  </Row>
                </ul>
                <ul className="list-unstyled">
                  <Row className="d-flex pb-3">
                    <Col>
                      <a className="footer-links" href="#">
                        Privacy e condizioni
                      </a>
                    </Col>
                    <Col>
                      <a className="footer-links" href="#">
                        Opzioni per gli annunci
                      </a>
                    </Col>
                    <Col>
                      <a className="footer-links" href="#">
                        pubblicità
                      </a>
                    </Col>
                  </Row>
                  <Row className="d-flex pb-3">
                    <Col>
                      <a className="footer-links" href="#">
                        Sales Solutions
                      </a>
                    </Col>
                    <Col>
                      <a className="footer-links" href="#">
                        Mobile
                      </a>
                    </Col>
                    <Col>
                      <a className="footer-links" href="#">
                        Piccole imprese
                      </a>
                    </Col>
                  </Row>
                </ul>
              </Row>
              <Col>
                <li>
                  <a className="footer-links" href="#">
                    Centro sicurezza
                  </a>
                </li>
              </Col>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container fluid className="d-flex justify-content-center">
        <Row>
          <ul className="">
            <Col className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-question-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
              </svg>
              <a className="footer-icon-links" href="#">
                Domande?
              </a>
              <p>Visita il nostro Centro assistenza</p>
            </Col>
            <Col>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-gear-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              <a className="footer-icon-links" href="#">
                Gestisci il tuo account e la tua privacy
              </a>
              <p>Vai alle impostazioni</p>
            </Col>
            <Col>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-shield-shaded"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
                />
              </svg>
              <a className="footer-icon-links" href="#">
                Trasparenza sui contenuti consigliati
              </a>
              <p>Scopri di più sui contenuti consigliati</p>
            </Col>
          </ul>
        </Row>
      </Container>

      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col className="form-floating">
            <p className="mb-2">Seleziona lingua</p>
            <select
              className="form py-1 ps-1 pe-5"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Italiano(Italiano)</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Col>
        </Row>
      </Container>
    </Container>

    <Container fluid>
      <footer>
        <p class="pt-3">LinkedIn Corporation © 2023</p>
      </footer>
    </Container>
  </>
);

export default MyFooter;