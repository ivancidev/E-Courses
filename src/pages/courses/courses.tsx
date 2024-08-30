import CourseCard from '../../components/shared/course-card';
import useFetchGet from '../../hooks/use-fetch-get';
import { Course } from '../../interfaces/course';

export default function Courses() {
  const { data: courses, error, isLoading } = useFetchGet('/api/courses');

  if (error)
    return <p className="text-center text-3xl mt-5">Failed to fetch courses</p>;

  if (isLoading)
    return <p className="text-center text-3xl mt-5">Loading courses...</p>;

  return (
    <div>
      <h1 className="text-center text-4xl mt-5 font-bold">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 g-6 overflow-hidden items-center justify-items-center">
        {courses.map((course: Course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
}
