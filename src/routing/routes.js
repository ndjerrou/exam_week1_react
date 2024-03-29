import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPost from './BlogPost';
import DeleteBlogPost from './DeleteBlogPost';
import LayoutBlogPost from './LayoutBlogPost';
import UpdateBlogPost from './UpdateBlogPost';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/posts/',
    element: <LayoutBlogPost />,
    children: [
      {
        path: 'delete/:id',
        element: <DeleteBlogPost />,
      },
      {
        path: 'update/:id',
        element: <UpdateBlogPost />,
      },
      {
        path: ':id',
        element: <BlogPost />,
      },
    ],
  },
]);
