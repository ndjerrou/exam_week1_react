import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateBlogPost() {
  const { id } = useParams();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ title: '', body: '' });

  const navigate = useNavigate();

  async function updateBlogPost() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    try {
      axios.put(BASE_URL + `/posts/${id}`, formData);
      navigate('/');
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }

  const isUpdated = formData.title.length === 0 && formData.body.length === 0;
  console.log(isUpdated);

  return (
    <>
      {' '}
      {error && <h3>{error}</h3>}
      <form onSubmit={updateBlogPost}>
        <div>
          <label for=''>
            Title :
            <input
              name='title'
              value={formData.title}
              onChange={e =>
                setFormData(prevState => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <div>
          <label for=''>
            Body :
            <input
              name='body'
              value={formData.body}
              onChange={e =>
                setFormData(prevState => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <button disabled={isUpdated}>Update blog post</button>
      </form>
    </>
  );
}

export default UpdateBlogPost;

//  <div>{error ? { error } : <h5>Post supprimé confirmation!</h5>}</div>;
