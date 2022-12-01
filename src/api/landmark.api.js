
const getLandmark = async () => {
    const response = await fetch('https://strapi-production-41f0.up.railway.app/api/landmarks?populate=*')
    const result = await response.json();
    const data = await result.data;
    return data;
};

export default getLandmark
