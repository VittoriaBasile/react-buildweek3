import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchJobs = () => {
  const searchResults = useSelector((state) => state.searchJobs.content);

  return (
    <Row>
      <Col>
        <h4 className="ps-3">Offerte di lavoro :</h4>
        <Row className="mx-1">
          {/* <Col xs={1}>
              <img style={{ width: "40px" }} src="https://picsum.photos/40" alt="" />
            </Col> */}
          <Col xs={12} className="d-flex flex-column  testoGray">
            {searchResults.length > 0 &&
              searchResults.map((job) => {
                const date = new Date(job.publication_date);
                const formattedDate = `${date.getDate()}-${
                  date.getMonth() + 1
                }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
                console.log(formattedDate);

                return (
                  <>
                    <Card key={job._id} className="my-2">
                      <Card.Header className="fw-bold">{job.title}</Card.Header>
                      <Card.Body>
                        <Card.Title className="fw-bolder d-flex justify-content-between align-items-center">
                          <div>{job.company_name}</div>
                          <div>
                            <Button
                              className="btn-blue-custom rounded-pill border-primary text-primary fw-bold"
                              variant="outlined"
                            >
                              Salva
                            </Button>
                          </div>
                        </Card.Title>

                        <Card.Text className="fw-semibold d-flex justify-content-between align-items-center">
                          <div>{job.category}</div>
                          <div>{job.job_type}</div>
                          <div>{job.candidate_required_location}</div>
                        </Card.Text>

                        <Link
                          to={job.url}
                          variant="primary"
                          className="fw-normal footer-icon-links"
                        >
                          <span>Visita il sito di {job.company_name}</span>
                        </Link>
                      </Card.Body>
                      <div className="text-end p-1">{formattedDate}</div>
                    </Card>
                  </>
                );
              })}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SearchJobs;
