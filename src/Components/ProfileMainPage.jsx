import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProfileFetchAction, profileFetchAction } from "../redux/actions";

const ProfileMainPage = () => {
    
    const dispatch = useDispatch()
    const profile = useSelector((state)=> state.profile.content)
    const allProfile = useSelector((state)=> state.allProfile.content)
    console.log(allProfile)
    console.log(profile)

    useEffect(()=>{
        dispatch(profileFetchAction())
        dispatch(allProfileFetchAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
        return(
                profile && (
                    <>
                    {/* inserire qui navbar */}
                            <Container fluid className="text-center bg-warning mb-4">
                                    ciao
                            </Container>
                            <Container fluid className="bg-mainpage">
                                    <Row className="bg-mainpage px-5 gx-2 justify-content-center">
                                    <Col md={6} className="bg-danger mx-2">
                    {/* sezione principale con profile header, inserire qui a cascata i vari componenti */}
                                    componenti principali profilo <br/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                                    Natus, laboriosam facilis error sed, amet tenetur labore est deleniti, 
                                    eius provident vitae illo ratione velit maxime perferendis? 
                                    Tenetur voluptatum nobis vitae! Card con {profile.name}
                                    </Col>
                                    <Col md={2} className="bg-success mx-2 d-none d-md-block">
                    {/* sezione secondaria, notizie e suggerimenti su sidebar, inserire qui a cascata i vari componenti */}
                                    sidebar profilo <br/>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, 
                                    inventore fuga optio tempore illo blanditiis itaque accusamus nostrum? 
                                    Voluptatibus consequuntur maiores porro odit repudiandae culpa vel enim beatae minus earum!
                                    {/* qui sotto il map che pesca tutti i profili */}
                                    {/* {allProfile &&(
                                        allProfile.map((profile) => {
                                            return(
                                                <p>{profile.name}</p>
                                            )
                                            
                                        }))
                                    } */}
                                    </Col>
                                </Row>
                            </Container>
                    </>
                )
            )
};
export default ProfileMainPage;
