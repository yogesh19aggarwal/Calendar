import axios from 'axios'

const myBaseurl = 'http://127.0.0.1:8000/';

const AxiosInstance = axios.create({
    baseURL: myBaseurl,
    timeout: 5000,
    headers:{
        "Content-Type" : "application/json",
        accept : "application/json"
    }
});

export default AxiosInstance