import axios, { AxiosInstance } from 'axios'

// interface JsonRequestHeader extends AxiosRequestHeaders {
//   'Content-Type': string
// }

const api: AxiosInstance = axios.create({
  baseURL: `http://api.current.localhost/api`,
  headers: {
    Authorization: '321312',
  },
})
//
// api.interceptors.request.use((config) => {
//   config.headers = {
//     'Content-Type': 'application/json',
//   } as JsonRequestHeader
//
//   return config
// })

export default api
