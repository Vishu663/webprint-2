// http.jsx
import axios from 'axios';

export const fetchData = async (url, options) => {
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const sendData = async (url, data, options) => {
    try {
        await axios.post(url, data, options);
    } catch (error) {
        console.error('Error sending data:', error);
    }
};
