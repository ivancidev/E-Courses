import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchCourses } from '../services/api';
import { Course } from '../interfaces/course';

export default function useFetchGet(url: string): UseQueryResult<Course[]> {
  return useQuery( {queryKey:['courses'], queryFn: () => fetchCourses(url)});
}
