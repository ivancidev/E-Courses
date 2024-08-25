import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/root/root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <div>home</div>,
      },
      {
        path: '/courses',
        element: <div>courses</div>,
      },
      {
        path: '/profile',
        element: <div>profile</div>,
      },
    ],
  },
]);
