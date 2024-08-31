import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/root/root';
import Hero from '../pages/home/hero';
import Courses from '../pages/courses/courses';
import Profile from '../pages/profile/profile';
import SlotPropsSignIn from '../pages/login/login';
import ProtectedRoute from './protected-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SlotPropsSignIn />,
  },
  {
    path: '/app',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Hero />
          </ProtectedRoute>
        ),
      },
      {
        path: 'courses',
        element: (
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
