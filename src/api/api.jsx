// api.jsx
import axios from 'axios';

const baseURL = 'http://localhost:5001/'; // Base URL for the proxy server

export const fetchPrinterStatus = async (printerNumber) => {
    try {
        const response = await axios.get(`${baseURL}printer${printerNumber}`);
        return {
            printerStatus: response.data.state.text,
            jobState: response.data.job.state
        };
    } catch (error) {
        console.error('Error retrieving printer status:', error);
        return {
            printerStatus: '',
            jobState: ''
        };
    }
};

export const uploadFile = async (printerNumber, fileData) => {
    try {
        const formData = new FormData();
        formData.append('file', fileData);

        await axios.post(`${baseURL}printer${printerNumber}/files/local`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log('File uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};

export const getCurrentJobDetails = async (printerNumber) => {
    try {
        const response = await axios.get(`${baseURL}printer${printerNumber}/job`);
        
        if (response) {
            const { job } = response.data;
            return {
                jobName: job.file.name,
                jobId: job.file.origin,
                fileName: job.file.display,
                filamentUsed: job.filament.tool0.length,
                timeRequired: job.estimatedPrintTime
            };
        }
        return null;
    } catch (error) {
        console.error('Error getting current job details:', error);
        return null;
    }
};
