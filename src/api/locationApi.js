export const fetchLocation = async () => {
  const response = await fetch(
    `https://devapi.chatcloudserver.co.in/api/v1/master/location`
  );
  const data = await response.json();
  return data.data.data;
};
