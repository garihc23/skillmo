export const fetchCourseByLocation = async (id) => {
  const response = await fetch(
    `https://devapi.chatcloudserver.co.in/api/v1/course/location/location_6b85b0a211e4`
  );
  const data = await response.json();
  return data.data.data;
};