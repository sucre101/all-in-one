import axios, { AxiosInstance } from 'axios'

const RequestClient: AxiosInstance = axios.create({
  baseURL: `http://auth.current.localhost`,
  headers: {
    'Content-type': 'application/json'
  }
})

export default RequestClient
