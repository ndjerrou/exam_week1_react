import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPost from './BlogPost';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/posts/:id', element: <BlogPost /> },
]);
