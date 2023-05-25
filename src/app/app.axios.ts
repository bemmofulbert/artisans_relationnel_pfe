import axios from "axios"

const http = axios.create({
    baseURL : 'http://localhost:3000',
    timeout : 10000,
    headers: {'Authorization': 'Bearer'}
})

export default http
