import { useEffect, useState } from 'react';
import { Course } from '../interfaces/course';
import { fetchCourses } from '../services/api';

export default function useFetchGet(url: string) {
  const [data, setData] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchCourses(url);
        setData(responseData.courses);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
    isLoading,
    error,
  };
}
