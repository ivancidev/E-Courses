import { useEffect, useState } from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
}

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
      <h1>Courses</h1>
      {isloading ? (
        <p>Loading!!</p>
      ) : (
        courses.map((course) => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>{course.duration}</p>
          </div>
        ))
      )}
    </div>
  );
}
