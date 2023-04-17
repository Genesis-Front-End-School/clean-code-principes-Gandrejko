import { Course, CoursePreview } from '../types/course.type';

const fetchToken = async (): Promise<string> => {
  const res = await fetch('https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
  const data = await res.json();
  return data.token;
};

const fetchCourses = async (): Promise<CoursePreview[]> => {
  const token = localStorage.getItem('token');
  const res = await fetch('https://api.wisey.app/api/v1/core/preview-courses', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data.courses;
};

// @ts-ignore
const fetchCourse = async ({params}): Promise<Course> => {
  const token = localStorage.getItem('token');
  const res = await fetch(`https://api.wisey.app/api/v1/core/preview-courses/${params.courseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export { fetchToken, fetchCourses, fetchCourse };

