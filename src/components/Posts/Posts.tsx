import { useState, useEffect } from "react";

import { postsApi } from "../../api";

import "./Posts.css";

import { PostsType } from "../../types/types";
import { Link } from "react-router-dom";

export const Posts = () => {

  const [posts, setPosts] = useState<PostsType[]>();

  useEffect(() => {
    fetchPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  if (!posts || posts.length === 0) {
    return <h2>No posts</h2>;
  }

  async function fetchPosts() {
    try {
      const response = await fetch(postsApi);
      return await response.json();
    } catch (error) {
      console.log("error is:", error)
    }
  }

  return (
    <ul className="posts-list">
      <Link to={'/'}>Back</Link>
      {posts.map((post) =>
        <Link className="posts-link" to={`/posts/${post.id}/comments`}>
          <li className="posts-item" key={post.id}>
            <h4>{post.id}. {post.title}</h4>
            <p>{post.body}</p>
          </li>
        </Link>
      )}
    </ul>
  )
}