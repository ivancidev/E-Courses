import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/root/root';
import Hero from '../pages/home/hero';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Hero />,
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
