const baseApi = 'http://localhost:1337';



const getLocationInfo = async (address) => {
    const response = await fetch(`${baseApi}/api/locations/`)
    const result = await response.json();
    const data = await result.data;
    return data;
};

export default getLocationInfo
