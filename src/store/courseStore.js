// src/store/userStore.js
import { create } from 'zustand';
import { fetchCourse } from '../api/courseApi';

const useCourseStore = create((set) => ({
  courses: [],
  fetchCourses: async () => {
    try {
      const courses = await fetchCourse();
      set({ courses });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  },
}));

export default useCourseStore;
