import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'http://localhost:3007/affluent-api/v1',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

const getUsers = async () => (await apiInstance.get('/users')).data.data.users
const getDates = async () => (await apiInstance.get('/dates')).data.data.dates

export { getUsers, getDates}