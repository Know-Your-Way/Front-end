import getLocationInfo from '../api/location.api'

const GetLocationView = async () => {
    const location = await getLocationInfo();
    const res = await location
    return res;
}

export default GetLocationView