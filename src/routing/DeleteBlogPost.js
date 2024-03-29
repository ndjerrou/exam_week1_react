import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DeleteBlogPost() {
  const { id } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    async function deleteBlogPost() {
      const BASE_URL = 'https://jsonplaceholder.typicode.com';
      try {
        axios.delete(BASE_URL + `/posts/${id}`);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    }
    deleteBlogPost();
  }, []);

  return <div>{error ? { error } : <h5>Post supprimé confirmation!</h5>}</div>;
}

export default DeleteBlogPost;
