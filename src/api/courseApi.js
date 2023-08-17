// src/api/postApi.js
const API_BASE_URL = 'http://13.127.130.22:8000/api/v1'; // Replace with your API base URL

export const fetchCourse = async () => {
  const response = await fetch(`http://13.127.130.22:8000/api/v1/course`);
  const data = await response.json();
  return data.data.data;
};
