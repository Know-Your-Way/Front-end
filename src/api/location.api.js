const getLocationInfo = async () => {
    const response = await fetch(`https://strapi-production-41f0.up.railway.app/api/locations?pagination[page]=1&pagination[pageSize]=1000`)
    const result = await response.json();
    const data = await result.data;
    return data;
};

export default getLocationInfo
