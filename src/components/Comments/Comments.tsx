import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

import { postsApi } from "../../api";

import './Comments.css';

import { CommentsType } from "../../types/types";

async function fetchComments(id: string) {
  try {
    const response = await fetch(`${postsApi}/${id}/comments`);
    return await response.json();
  }
  catch (error) {
    console.log("error is:", error)
  }
}

export const Comments = () => {

  const { id } = useParams();
  const [comments, setComments] = useState<CommentsType[]>([]);

  useEffect(() => {
    if (!id) return;
    fetchComments(id).then((comments) => {
      setComments(comments);
    });
  }, [id]);

  if (comments.length === 0) {
    return <h2>No comments</h2>;
  }

  return (
    <ul className="comments-list">
      <Link to={'/posts'}>Back</Link>
      {comments.map((comment) =>
        <li className="comments-item" key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </li>
      )}
    </ul>
  )
}