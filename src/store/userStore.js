// src/store/userStore.js
import { create } from 'zustand';
import { fetchUsers } from '../api/userApi';
import { createUser } from '../api/userApi';
import { loginUser } from '../api/userApi';
import { forgotPassword } from '../api/userApi';
import { resetPassword } from '../api/userApi';
import { newPassword } from '../api/userApi';

const useUserStore = create((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const users = await fetchUsers();
      set({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
  addUser: async (userData) => {
    try {
      const newUser = await createUser(userData);
      set((state) => ({ users: [...state.users, newUser] }));
    } catch (error) {
      console.error('Error adding user:', error);
    }
  },
  loginUser: async (userData) => {
    try {
      const loginUsers = await loginUser(userData);
      localStorage.setItem('user', JSON.stringify(loginUsers));
    } catch (error) {
      console.error('Error login user:', error);
    }
  },
  forgotPassword: async (userData) => {
    try {
      const forgot = await forgotPassword(userData);
      set((state) => ({ users: [...state.users, forgot] }));
    } catch (error) {
      console.error('Error Password user:', error);
    }
  },
  resetPassword: async (userData) => {
    try {
      const reset = await resetPassword(userData);
      set((state) => ({ users: [...state.users, reset] }));
    } catch (error) {
      console.error('Error Password user:', error);
    }
  },
  newPassword: async (userData) => {
    try {
      const reset = await newPassword(userData);
      set((state) => ({ users: [...state.users, reset] }));
    } catch (error) {
      console.error('Error Password user:', error);
    }
  },
}));

export default useUserStore;
