import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchCourses, getCoursesById } from '../services/api';
import { Course } from '../interfaces/course';

export function useFetchGet(url: string): UseQueryResult<Course[]> {
  return useQuery({ queryKey: ['courses'], queryFn: () => fetchCourses(url) });
}

export function useFetchById(url: string, id: string): UseQueryResult<Course> {
  return useQuery({
    queryKey: ['courses', id],
    queryFn: () => getCoursesById(url, id),
  });
}
