import axios from "axios";

const token = localStorage.getItem('token')

const api = axios.create({
    baseURL: "https://minhas-series-api.herokuapp.com",
    headers: { 'x-access-token': token }
});

export default api;