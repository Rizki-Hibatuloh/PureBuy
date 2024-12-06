import axios from 'axios';

//BASE URL
const axiosInstance =  axios.create({
    baseURL: "https://fakestoreapi.com/",
});

export default axiosInstance;