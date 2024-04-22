import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [posts, setPosts] = useState([]);

  const baseURL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios(baseURL)
      .then(({ data }) => setPosts(data))
      .catch(err => console.log(err));
  }, []);

  const deleteBlogPost = async id => {
    // pessismitic update

    // 1 - status of the http request ?

    // 2 - update the UI

    // optimistic update

    // 1 - update the UI

    const originalPosts = [...posts];

    const filteredPosts = posts.filter(post => post.id !== id);
    setPosts(filteredPosts);

    // 2 - status of the http request ?
    try {
      await axios.delete(`${baseURL}x/${id}`);
    } catch (err) {
      console.log(err.message);

      setPosts(originalPosts);
    }
  };

  return (
    <div>
      <h1>Mes articles de blog</h1>
      <div>
        {posts.map(({ title, id }, idx) => (
          <div>
            <h4>
              <Link to={`/posts/${idx + 1}`}>
                {idx + 1} - {title}
              </Link>
              <button onClick={() => deleteBlogPost(id)}>
                Delete blog post
              </button>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
