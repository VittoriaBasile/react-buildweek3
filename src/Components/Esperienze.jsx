import { Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import ModalExp from "./ModalExp"; 
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import ChangeExp from "./ChangeExp";

const Esperienze = () => {
  const [modalShow, setModalShow] = useState(false);
  const [change, setChange] = useState(false);
  // const [expData, setExpData] = useState({});

  const dispatch = useDispatch()
  const user = useSelector((state) => state.profile.content)
  const experiences = useSelector((state) => state.allExp.content)

  useEffect(()=>{
    dispatch(getExperiencesAction(user._id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <Card className="EsperienzaCard mt-3">
      <Row className="mx-1 my-2 align-items-center">
        <Col xs={10}>
          <Card.Title className="fs-5">Esperienza</Card.Title>
        </Col>
        <Col xs={1}>
          <button className="btnModificaProfilo border-0 rounded-circle " onClick={() => setModalShow(true)}>
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
      {experiences.length > 0 && (
        experiences.map((experience) => (
          
            <>
            {/* {setExpData(experience._id)} */}
            <Row className="mx-1">
            <Col xs={1}>
              <img style={{ width: "40px" }} src="https://picsum.photos/40" alt="" />
            </Col>
            <Col xs={8} className="d-flex flex-column px-3 testoGray">
              <span className="fw-semibold">{experience.role}</span>
              <span className=" fw-light">{experience.company}</span>
              <span className=" fw-light">{experience.description}</span>
              <span className=" fw-light">{experience.startDate} / {experience.endDate}</span>
              <span className=" fw-light">{experience.area}</span>
            </Col>

            <Col xs={1}>
              <button className="btnModificaProfilo border-0 rounded-circle " onClick={() => setChange(true)}>
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
          <ChangeExp show={change} onHide={() => setChange(false)} />
        </>
        )
        )
      )}
    </Card>
    <ModalExp show={modalShow} onHide={() => setModalShow(false)}/>
    
    </>
    
  );
};
export default Esperienze;
