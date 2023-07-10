import axios from "axios"

const http = axios.create({
    baseURL : 'http://192.168.43.10:3000',
    timeout : 10000,
    headers: {'Authorization': '*'}
})

export default http
