import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Layout from './Layout';
import BlogPost from './BlogPost';
import EditBlogPost from './EditBlogPost';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'blogpost',
        element: <BlogPost />,
      },
      {
        path: 'blogpost/editblogpost/:postId',
        element: <EditBlogPost />,
      },
    ],
  },
]);