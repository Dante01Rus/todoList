import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

import { postsApi } from "../../api";

import './Comments.css';

import { CommentsType } from "../../types/types";


export const Comments = () => {

  const { id } = useParams();
  const [comments, setComments] = useState<CommentsType[]>();

  useEffect(() => {
    fetchComments().then((comments) => {
      setComments(comments);
    });
  }, []);

  if (!comments || comments.length === 0) {
    return <h2>No posts</h2>;
  }

  async function fetchComments() {
    try {
      const response = await fetch(`${postsApi}/${id}/comments`);
      return await response.json();
    }
    catch (error) {
      console.log("error is:", error)
    }
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