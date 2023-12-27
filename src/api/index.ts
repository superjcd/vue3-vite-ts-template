import axios from 'axios'
import globalSettings from '@/settings'

interface ResponseOriginal<T> {
  status?: number
  msg?: string
  data: T
}

export type Response<T> = ResponseOriginal<T> | undefined

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  timeout: globalSettings.api.timeout
})

api.interceptors.request.use((request) => {
  // TODO: deal with request
  return request
})

api.interceptors.response.use(
  (response) => {
    if (!globalSettings.api.successfullCodes.includes(response.status)) {
      return Promise.reject(response.data.msg || `unkown error, status: ${response.status}`)
    }

    return Promise.resolve(response.data)
  },
  (error) => {
    if (error.response?.status === 401) {
      // TODO: logout
      return
    }
    // TODO: more operations upon error
    return Promise.reject(error)
  }
)

export default api
