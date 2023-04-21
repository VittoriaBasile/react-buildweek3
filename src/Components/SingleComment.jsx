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
