import { useParams } from 'react-router-dom';
import { useFetchById } from '../../hooks/use-fetch-get';

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const {
    data: course,
    error,
    isLoading,
  } = useFetchById('/api/courses', id ?? 'default');

  if (error)
    return (
      <p className="text-2xl font-bold">
        Failed fetching data: {error.message}
      </p>
    );
  if (isLoading) return <p className="text-2xl font-bold">Loading...</p>;
  return (
    <div className="w-screen">
      <div className="w-full">
        <img
          src={course?.imageUrl}
          alt={course?.title}
          className="h-[400px] w-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-5 mx-5 p-5 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800">{course?.title}</h1>
          <p className="text-gray-500 font-bold text-3xl">
            BOB {course?.price}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-gray-700 text-lg">
            Instructor:{' '}
            <span className="font-semibold">{course?.instructor}</span>
          </p>
          <p className="text-gray-700 text-lg">
            Level: <span className="font-semibold">{course?.level}</span>
          </p>
          <p className="text-gray-700 text-lg">
            Start Date:{' '}
            <span className="font-semibold">{course?.startDate}</span>
          </p>
        </div>
        <p className="text-gray-600 mt-2">{course?.description}</p>
        <p className="text-gray-600 mt-2">
          Duration: <span className="font-semibold">{course?.duration}</span>
        </p>
        <div className="mt-5 flex justify-center w-full">
          <button className="bg-blue-500 text-white py-3 px-48 rounded hover:bg-blue-600 transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
