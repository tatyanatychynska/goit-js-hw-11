import axios from "axios";
export async function getImagesByQuery(query) {
    const baseURL = 'https://pixabay.com';
    const endPoint = '/api/';
    const url = baseURL + endPoint;

    const params = {
        key: '55157705-9f4ed22218599416e91cc1d5e',
        q: query,
    };

    const response = await axios.get(url, { params });    
    
    return response.data;

}
