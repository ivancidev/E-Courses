import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-secondary flex justify-between items-center h-20 p-6 text-white cursor-pointer">
      <div>
        <a className="text-2xl">Logo</a>
      </div>
      <div>
        <ul className="flex gap-12 items-center">
          <Link to={'/'} className="cursor-pointer">
            Home
          </Link>
          <Link to={'courses'} className="cursor-pointer">
            Courses
          </Link>
          <Link to={'profile'} className="cursor-pointer">
            Profile
          </Link>
          <button className="bg-red-600 w-20 h-10 rounded-md">Logout</button>
        </ul>
      </div>
    </nav>
  );
}
