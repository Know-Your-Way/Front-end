const baseApi = 'http://localhost:1337';



const getLandmark = async () => {
    const response = await fetch('http://localhost:1337/api/landmark')
    const result = await response.json();
    const data = await result.data;
    return data;
};

export default getLandmark
