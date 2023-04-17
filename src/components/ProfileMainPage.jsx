import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const persProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me"

const ProfileMainPage = () => {
    const [profile, setProfile] = useState()

    const profileFetch = async () => {
        try {
            const response = await fetch(persProfileEndpoint, {
                headers: {
                    "Component-Type": "application/json",
                    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                    // 
                }
            })
            if(response.ok){
                const profileData = await response.json();
                setProfile(profileData);
                console.log(profileData)
            }
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(()=>{
        profileFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

        return(
                <>
            {/* inserire qui navbar */}
            <Container fluid className="text-center bg-warning mb-4">
                ciao
            </Container>
            <Row className="bg-secondary px-5 gx-2 justify-content-center">
                <Col md={7} className="bg-danger mx-2">
                {/* sezione principale con profile header, inserire qui a cascata i vari componenti */}
                componenti principali profilo <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laboriosam facilis error sed, amet tenetur labore est deleniti, eius provident vitae illo ratione velit maxime perferendis? Tenetur voluptatum nobis vitae!
                </Col>
                <Col md={3} className="bg-success mx-2 d-none d-md-block">
                {/* sezione secondaria, notizie e suggerimenti su sidebar, inserire qui a cascata i vari componenti */}
                sidebar profilo <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, inventore fuga optio tempore illo blanditiis itaque accusamus nostrum? Voluptatibus consequuntur maiores porro odit repudiandae culpa vel enim beatae minus earum!
                </Col>
            </Row>
            </>
            )
};
export default ProfileMainPage;
