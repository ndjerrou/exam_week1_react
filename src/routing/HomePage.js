import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

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
        posts.map(({ title, body }) => (
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))
      )}
    </>
  );
}

export default HomePage;
