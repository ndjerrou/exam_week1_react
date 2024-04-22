import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPost from './BlogPost';
import UpdateBlogPost from './UpdateBlogPost';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'posts/:id/',
        element: <BlogPost />,
        children: [{ path: 'edit', element: <UpdateBlogPost /> }],
      },
    ],
  },
]);
