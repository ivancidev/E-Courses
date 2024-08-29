export async function fetchCourses(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return await response.json();
}
