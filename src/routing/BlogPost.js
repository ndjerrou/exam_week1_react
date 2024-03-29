import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BlogPost() {
  const [post, setPost] = useState({});
  const [error, setError] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBlogPost() {
      const BASE_URL = 'https://jsonplaceholder.typicode.com';

      try {
        const { data } = await axios(BASE_URL + `/posts/${id}`);

        setPost(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    }

    fetchBlogPost();
  }, []);

  return (
    <div>
      {error ? (
        { error }
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => navigate(`/posts/delete/${id}`)}>
            Delete post
          </button>
          <button onClick={() => navigate(`/posts/update/${id}`)}>
            Update post
          </button>
        </>
      )}
    </div>
  );
}

export default BlogPost;
