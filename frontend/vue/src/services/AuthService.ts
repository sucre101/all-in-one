// import { User } from '@/types/user'
import RequestClient from '@/services/RequestClient'
import { AxiosResponse } from "axios"

// const API_URL = 'http://localhost:8080/api/auth/'

type payload = {
    email: string
    password: string
}
type ResponseToken = {
    access: string
    refresh: string
}

class AuthService {
  async signIn({ email, password }: payload): Promise<AxiosResponse> {
    const request = await RequestClient.post<{success: boolean, tokens: ResponseToken}>('/', {
      email, password
    })

    if (request.data.success) {
      console.log(request.data.tokens.access, request.data.tokens.refresh)
    }

    return request
  }

}

export default new AuthService()
