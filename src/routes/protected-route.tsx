import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (!isAuthenticated) {
    return <Navigate to={'/'} />;
  }
  return <>{children}</>;
}
