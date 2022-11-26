import getLandmark from '../api/landmark.api'

const GetLandmarkView = async () => {
    const location = await getLandmark();
    const res = await location
    return res;
}

export default GetLandmarkView