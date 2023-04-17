import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProfileFetchAction, profileFetchAction } from "../redux/actions";
import HeaderProfile from "./HeaderProfile";

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
                            <Container fluid className="bg-mainpage">
                                    <Row className="bg-mainpage px-5 gx-2 justify-content-center">
                                    <Col md={6} className="mx-2">
                    {/* sezione principale con profile header, inserire qui a cascata i vari componenti */}
                    <HeaderProfile profileData={profile}/>
                                    </Col>
                                    <Col md={2} className="mx-2 d-none d-md-block">
                    {/* sezione secondaria, notizie e suggerimenti su sidebar, inserire qui a cascata i vari componenti */}
                                    {/* qui sotto il map che pesca tutti i profili */}
                                    {allProfile &&(
                                        (allProfile.slice(0,5)).map((profile) => {
                                            return(
                                                <p>{profile.name}</p>
                                            )
                                            
                                        }))
                                    }
                                    </Col>
                                </Row>
                            </Container>
                    </>
                )
            )
};
export default ProfileMainPage;
