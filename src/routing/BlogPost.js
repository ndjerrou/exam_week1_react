import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const baseURL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    axios(`${baseURL}/posts/${id}`)
      .then(({ data }) => {
        setPost(data);
        setError(null);
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <button>Update blog post</button>
    </div>
  );
}

export default BlogPost;
