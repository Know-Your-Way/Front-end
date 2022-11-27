import getLocationInfo from '../api/location.api'

const GetLocationView = async (address) => {
    const location = await getLocationInfo(address);
    const res = await location
    return res;
}

export default GetLocationView