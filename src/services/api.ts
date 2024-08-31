import { Course } from '../interfaces/course';

export async function fetchCourses(url: string): Promise<Course[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  const data = await response.json();
  return data.courses;
}
