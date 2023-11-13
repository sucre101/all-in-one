import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: `http://${process.env.VUE_APP_BASIC_API_HOST}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'

  console.log(config)
  return config
})

export default api
