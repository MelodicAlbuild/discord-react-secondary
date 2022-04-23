import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' ? "https://3001-melodicalbu-gitpodmysql-cs5vza2ukqv.ws-us41.gitpod.io" : "https://3001-melodicalbu-gitpodmysql-cs5vza2ukqv.ws-us41.gitpod.io";

export default axios.create({
  baseURL: baseUrl
});