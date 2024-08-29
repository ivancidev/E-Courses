import { useEffect, useState } from 'react';
import { Course } from '../../interfaces/course';
import CourseCard from '../../components/shared/course-card';

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourses(data.courses);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl mt-5 font-bold">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 g-6 overflow-hidden items-center justify-items-center">
        {isloading ? (
          <p className="text-center text-3xl mt-5">Loading courses...</p>
        ) : (
          courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              duration={course.duration}
            />
          ))
        )}
      </div>
    </div>
  );
}
