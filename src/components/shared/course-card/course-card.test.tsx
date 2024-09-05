import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import CourseCard from './course-card';
import { MemoryRouter } from 'react-router-dom';
describe('CourseCard', () => {
  test('display course title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CourseCard
          title="React"
          description="React is a JavaScript library for building user interfaces"
          price={100}
          duration="2 hours"
          imageUrl="https://www.programacion.com.py/wp-content/uploads/2016/11/react-logo-1024x576.png"
          id="1"
        />
        ,
      </MemoryRouter>,
    );
    expect(getByText('React')).toBeInTheDocument();
  });
});
