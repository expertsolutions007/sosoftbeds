import axios from "axios";

export const getLocation = async () => {
    const locationRequest = await axios({method:"get",url:"https://api.db-ip.com/v2/free/self"})
    console.log(locationRequest);
    return locationRequest;
}