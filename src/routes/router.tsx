import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/root/root';
import Hero from '../pages/home/hero';
import Courses from '../pages/courses/courses';
import Profile from '../pages/profile/profile';

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
        element: <Profile />,
      },
    ],
  },
]);
