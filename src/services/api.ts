import { Course } from '../interfaces/course';

export async function fetchCourses(url: string): Promise<Course[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  const data = await response.json();
  return data.courses;
}

export const getCoursesById = async (
  url: string,
  courseId: string,
): Promise<Course> => {
  const response = await fetch(`${url}/${courseId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch course');
  }
  const data = await response.json();
  return data.course;
};
