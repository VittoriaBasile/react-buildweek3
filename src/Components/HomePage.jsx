import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  NavDropdown,
  Row,
} from "react-bootstrap";
import FooterHomePage from "./FooterHomePage";
import HomeProfileSection from "./HomeProfileSection";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, postPostAction } from "../redux/actions";

const HomePage = () => {
  const [newPost, setNewPost] = useState("");
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.content);

  useEffect(() => {
    dispatch(getPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPostAction(newPost));
    setNewPost("")
  };

  return (
    <Container fluid className="px-0">
      <Topbar />

      <Container>
        <Row className="pt-4 gap-2">
          {/* prima col principale*/}
          <Col xs={3} className="px-0">
            {/* container profile */}
            <HomeProfileSection />
            {/* container scopri di più */}
            <Col className="bg-white rounded-3 p-2 my-3 fw-bold ">
              <Col>
                <a href="#" className="text-decoration-none">
                  Gruppi
                </a>
              </Col>
              <Col className="py-3 d-flex justify-content-between">
                <a href="#" className="text-decoration-none">
                  Eventi
                </a>
                ➕
              </Col>
              <Col>
                <a href="#" className="text-decoration-none">
                  Hashtag seguiti
                </a>
              </Col>
              <Col className="text-center border-top py-2 mt-2 ">
                <a href="#" className="link-nav text-decoration-none">
                  Scopri di più
                </a>
              </Col>
            </Col>
          </Col>

          {/* seconda col principale*/}
          <Col xs={5}>
            {/* search */}
            <Col className="bg-white rounded-3 pt-3 px-3">
              <Row className="align-items-center px-3">
                <Col className="px-0" xs={2}>
                  <img src="#" alt="." />
                </Col>
                <Col className="px-0">
                  <Form onSubmit={handleSubmit}>
                  <FormControl 
                  placeholder="Avvia un post" 
                  className=" me-2 border-dark rounded-pill" 
                  type="text" 
                  value={newPost} 
                  onChange={(e) => setNewPost(e.target.value)} 
                  />
                  {/* <Button >post</Button> */}
                </Form>
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

            {/* separè dropdown */}
            <Col xs={12} className="">
              <Row className="pt-2 px-3">
                <Col xs={8}>
                  <hr className="flex-grow-50" />
                </Col>
                <Col className="d-flex ">
                  <p className=" opacity-75 pe-2 ">ordina per </p>
                  <NavDropdown
                    title="Principali"
                    className="link-nav fw-bold"
                  />
                </Col>
              </Row> 
            </Col>
            {/* posts */}
            
            {allPosts.length > 0 &&
                  allPosts.map((post) => (
                    <Col key={post._id}>
                      <Card className="border bg-white rounded-3 p-1 m-3">
                        <Card.Body>
                          <Row>
                            <Col xs={3} className="pe-0">
                            <img className="img-fluid rounded-circle text-center" width="60px" src={post.user && post.user.image ? post.user.image : ""} alt="profilePostImage" />
                            </Col>
                            <Col xs={9} className="ps-0">
                              <Card.Title className="">{post.user && post.user.name ? post.user.name : ""} {post.user && post.user.surname ? post.user.surname : ""}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{post.user && post.user.title ? post.user.title : ""}</Card.Subtitle>
                            </Col>
                          </Row>
                          <Card.Text className="my-3 ms-1">
                            <p className="text-start">{post.text}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
            
          </Col>

          {/* terza col principale*/}
          <Col xs={3} className="px-0">
            {/* linkedin notizie */}
            <Col className="bg-white rounded-3 p-1">
              <Col className="d-flex justify-content-between  px-2 py-2">
                <h6 className="fw-bold">Linkedin Notizie</h6>
                ℹ️
              </Col>
              <Col>{/* inserire qui il componente notizie */}</Col>
              <Col>
                <NavDropdown
                  title="Visualizza altro"
                  className="link-nav fw-bold px-4"
                />
              </Col>
            </Col>
            {/* container annuncio */}
            <Col className="bg-white rounded-3 p-1 my-3">
              <Col className="d-flex justify-content-end pe-2">
                <p className="fw-bold">Annuncio </p>
                <p>...</p>
              </Col>
              <p className="text-center px-3 opacity-50">
                Segui i nostri valori e partners seguendo la nostra pagina.
              </p>
              <img src="" alt="" />
              <img src="" alt="" />
              <p className="fw-bold text-center">Entra nel mondo Audi Italia</p>
              <Col className="justify-content-center d-flex pb-3">
                <Button
                  className="text-primary border-primary fw-bold rounded-pill"
                  variant="outlined "
                >
                  Segui
                </Button>
              </Col>
            </Col>
            {/* mini footer */}
            <FooterHomePage />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;
