import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchJobs = () => {
  const searchResults = useSelector((state) => state.searchJobs.content);
  return (
    <Container>
      <Row>
        <Col>
          <Row className="mx-1">

            {/* <Col xs={1}>
              <img style={{ width: "40px" }} src="https://picsum.photos/40" alt="" />
            </Col> */}
            <Col xs={9} className="d-flex flex-column px-3 testoGray">
              {searchResults.length > 0 && (searchResults.map((job)=> (
                <>
                <Card key={job._id} className="my-2">
                  <Card.Header>{job.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{job.company_name}</Card.Title>
                    <Card.Text>
                      {job.category}
                    </Card.Text>
                    <Link to={job.url} variant="primary">{job.url}</Link>
                  </Card.Body>
                </Card>
                </>
              )))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJobs;
