<<<<<<< HEAD
import { Container } from "react-bootstrap"

const SingleComment =(props) => {

    return(
        <>
        <Container className="py-2 my-2 border bg-secondary bg-opacity-10 rounded">
            <p className="p-2">{props.comment.author}</p>
            <p className="px-1">{props.comment.comment}</p>
        </Container>
        
        </>
        
    )
}
export default SingleComment
=======
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentAction, singleProfileFetchAction } from "../redux/actions";

const SingleComment = (props) => {
  return (
    <>
      <p>{props.comment.author}</p>
      <p className="border rounded p-2 m-1">{props.comment.comment && props.comment.comment}</p>
    </>
  );
};
export default SingleComment;
>>>>>>> vittorias-branch
