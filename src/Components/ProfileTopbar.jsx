import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileTopbar = () => {
  const profile = useSelector((state) => state.profile.content);

  return (
    <Container fluid className="px-2">
      <Col className="bg-white rounded-3 border">
        <Row className="d-flex">
          <Col xs={4} className="mt-2 ms-2">
            <img
              src={profile.image}
              alt="profile-img"
              className="img-profile-dropnav img-fluid rounded-circle  "
            />
          </Col>
          <Col className=" d-flex justify-content-start flex-column ps-0 pt-2">
            <Col className="fw-bold">
              {profile.name} {profile.surname}
            </Col>
            <Col className="pb-2 smallP"> {profile.bio}</Col>
          </Col>
        </Row>
        <Link className="text-decoration-none" to={"/profile/"}>
          <Row className="px-4">
            {" "}
            <Button
              variant="outlined"
              className="btn-blue-custom border-primary rounded-pill py-1 my-2"
            >
              <span className="text-primary fw-bold"> Visualizza profilo</span>
            </Button>
          </Row>
        </Link>
        <Col className="selected-hover p-3  border-bottom border-top">
          <p className="mb-0 fw-bold">Account</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            className="mercado-match me-2"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
              fill="#f8c77e"
            ></path>
            <path
              d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
              fill="#e7a33e"
            ></path>
          </svg>
          <a href="#" className=" link-nav text-decoration-none fw-bold">
            Prova Premium Gratis
          </a>
          <Col className="link-nav-profile">Impostazioni e Privacy</Col>
          <Col className="link-nav-profile">Guida</Col>
          <Col className="link-nav-profile">Lingua</Col>
        </Col>
        <Col className="p-3 ">
          <p className="fw-bold mb-0 ">Gestisci</p>
          <p className="mb-0 link-nav-profile">Post e attività</p>
          <p className="mb-0 text-truncate link-nav-profile">
            Account per la pubblicazione di offerte
          </p>
        </Col>
        <Col className="align-items-center d-flex px-3 smallP border-top link-nav-profile rounded-bottom">
          <Button className="bg-transparent text-dark border-0 fw-bold py-3 smallP ">
            Esci
          </Button>
        </Col>
      </Col>
    </Container>
  );
};

export default ProfileTopbar;
