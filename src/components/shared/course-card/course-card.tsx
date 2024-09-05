import { Link } from 'react-router-dom';
import HoverRating from '../../rating/rating';

interface CourseCardProps {
  id?: string;
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
  price: number;
}

export default function CourseCard({
  id,
  title,
  description,
  duration,
  imageUrl,
  price,
}: CourseCardProps) {
  return (
    <div className="mt-10">
      <div className="bg-slate-300 sm:w-[350px] sm:h-[450px] shadow-sm rounded-lg flex flex-col w-[400px] overflow-hidden">
        <div className="flex justify-center items-center h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-500 text-2xl">BOB{price}</p>
          </div>
          <HoverRating />
          <p className="mt-2 text-gray-600 flex-grow">{description}</p>
          <p className="mt-2 text-gray-500">{duration}</p>
        </div>
        <div className="flex justify-around mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Take Course
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 ">
            <Link to={`/app/courses/${id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
