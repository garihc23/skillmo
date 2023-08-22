// src/store/userStore.js
import { create } from 'zustand';
import { fetchCourse, fetchCategory } from '../api/courseApi';

const useCourseStore = create((set) => ({
  courses: [],
  category:[],
  fetchCourses: async () => {
    try {
      const courses = await fetchCourse();
      set({ courses });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  },
  fetchCategory: async () => {
    try {
      const category = await fetchCategory();
      set({ category });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  },
}));

export default useCourseStore;
