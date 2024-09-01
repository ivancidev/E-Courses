import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

export default function Navbar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <nav className="bg-secondary flex justify-between items-center h-20 p-6 text-white cursor-pointer">
      <div>
        <a className="text-2xl">Logo</a>
      </div>
      <div>
        <ul className="flex gap-12 items-center">
          <Link to={'/app'} className="cursor-pointer">
            Home
          </Link>
          <Link to={'/app/courses'} className="cursor-pointer">
            Courses
          </Link>
          <Link to={'/app/profile'} className="cursor-pointer">
            Profile
          </Link>
          <button
            className="bg-red-600 w-20 h-10 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
}
