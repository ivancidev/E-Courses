export default function Navbar() {
  return (
    <nav className="bg-secondary flex justify-between items-center h-20 p-6 text-white cursor-pointer">
      <div>
        <a className="text-2xl">Logo</a>
      </div>
      <div>
        <ul className="flex gap-12 items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Courses</li>
          <li className="cursor-pointer">Profile</li>
          <button className="bg-red-600 w-20 h-10 rounded-md">Logout</button>
        </ul>
      </div>
    </nav>
  );
}
