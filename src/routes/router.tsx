import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/root/root';
import Hero from '../pages/home/hero';
import Courses from '../pages/courses/courses';

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
        element: <Courses />,
      },
      {
        path: '/profile',
        element: <div>profile</div>,
      },
    ],
  },
]);
