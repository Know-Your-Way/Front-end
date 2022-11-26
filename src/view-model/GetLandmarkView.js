import getLandmark from '../api/landmark.api'

const GetLandmarkView = async () => {
    const landmark = await getLandmark();
    const res = await landmark
    return res;
}

export default GetLandmarkView