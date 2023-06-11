import axios from 'axios';

const axiosApiIntances = axios.create({
  baseURL: '', //link API
});

export default axiosApiIntances;
