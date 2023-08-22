// src/store/userStore.js
import { create } from 'zustand';
import {  fetchCategory } from '../api/courseApi';

const useCategoryStore = create((set) => ({
  category:[],
  fetchCategory: async () => {
    try {
      const category = await fetchCategory();
      set({ category });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  },
}));

export default useCategoryStore;
