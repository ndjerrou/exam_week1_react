import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';

    const fetchPosts = async () => {
      try {
        const { data } = await axios(BASE_URL + '/posts');
        console.log(data);

        setPosts(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Blog posts</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        posts.map(({ id, title, body }) => (
          <div key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => navigate(`/posts/${id}`)}>Details</button>
          </div>
        ))
      )}
    </>
  );
}

export default HomePage;
