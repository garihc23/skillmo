// src/api/postApi.js
const API_BASE_URL = 'http://13.127.130.22:8000/api/v1'; // Replace with your API base URL

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/user/me`);
  const data = await response.json();
  return data;
};

export const createUser = async (postData) => {
  const response = await fetch(`${API_BASE_URL}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  return data;
};

export const loginUser = async (postData) => {
  const response = await fetch(`${API_BASE_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  return data;
};

export const forgotPassword = async (postData) => {
  const response = await fetch(`${API_BASE_URL}/user/forgot_password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  return data;
};
export const resetPassword = async (postData) => {
  const response = await fetch(`${API_BASE_URL}/user/reset_password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  return data;
};
export const newPassword = async (postData) => {
  const response = await fetch(`${API_BASE_URL}/user/resetPassword/:token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  return data;
};