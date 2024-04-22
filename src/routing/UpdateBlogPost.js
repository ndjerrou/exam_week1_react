import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateBlogPost() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const baseURL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios(`${baseURL}/${id}`)
      .then(({ data }) => {
        setPost(data);
      })
      .catch(err => console.log(err.message));
  }, []);

  const updateBlogPost = () => {
    axios.put(`${baseURL}/${id}`);

    navigate('/posts/' + id);
  };

  return (
    <div>
      <h2>Update blog post</h2>
      <form onSubmit={updateBlogPost}>
        <input value={post?.title} onChange={e => setPost(e.target.value)} />
        <button>Update blog post</button>
      </form>
    </div>
  );
}

export default UpdateBlogPost;
