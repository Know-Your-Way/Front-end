import getLandmark from '../api/landmark.api'

const GetLandmarkView = async () => {
    const landmark = await getLandmark();
    const img = await landmark
    return img
}

export default GetLandmarkView