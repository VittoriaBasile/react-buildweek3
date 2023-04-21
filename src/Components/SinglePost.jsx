import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import ModalPost from "./ModalPost";
import { useSelector } from "react-redux";

const SinglePost = ({ post }) => {
  const [modalShow, setModalShow] = useState(false);
  const oldData = useSelector((state) => state.profile.content);
  const [commentsShow, setCommentsShow] = useState("d-none");
  const comments = useSelector((state) => state.comments.content);

  return (
    <>
      <Col>
        <Card className="border bg-white rounded-3 p-1 m-3">
          <Card.Body>
            <Row>
              <Col xs={2} className="pe-0">
                <img
                  className="img-fluid imgPostProfile rounded-circle text-center"
                  width="60px"
                  height="60px"
                  src={post.user && post.user.image ? post.user.image : ""}
                  alt="profilePostImage"
                />
              </Col>
              <Col xs={8} className="ps-0">
                <Card.Title className="mediumP">
                  {post.user && post.user.name ? post.user.name : ""}{" "}
                  {post.user && post.user.surname ? post.user.surname : ""}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {post.user && post.user.title ? post.user.title : ""}
                </Card.Subtitle>
              </Col>
              <Col xs={1}>
                <Button className="bg-transparent border-0 text-secondary" onClick={() => setModalShow(true)}>
                  ...
                </Button>
              </Col>
            </Row>
            <Card.Text className="my-3 ms-1">
              <p className="text-start textP">{post.text}</p>
            </Card.Text>
            <Button className="bg-transparent text-secondary border-0" onClick={() => setCommentsShow("")}>
              comments
            </Button>
            <div className={commentsShow}>
              {/* {comments.length > 0 &&
                comments.map((comment) => {
                  <p key={comment._id}>{comment.comment}</p>;
                })}
                */}
            </div>
          </Card.Body>
        </Card>
      </Col>
      {oldData.username === post.username && (
        <ModalPost show={modalShow} post={post} onHide={() => setModalShow(false)} />
      )}
    </>
  );
};

export default SinglePost;
