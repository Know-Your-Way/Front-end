// const baseApi = 'http://localhost:1337';

const getLocationInfo = async () => {
  const response = await fetch('http://localhost:1337/api/locations');
  const result = await response.json();
  const data = await result.data;
  return data;
};

export default getLocationInfo;
