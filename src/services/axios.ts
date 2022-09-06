import axios from 'axios'

const http = axios.create({ baseURL: 'https://godevrel.herokuapp.com' })

export default http