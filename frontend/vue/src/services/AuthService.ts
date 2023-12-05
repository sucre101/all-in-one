// import { User } from '@/types/user'
import RequestClient from '@/services/RequestClient'
import { AxiosResponse } from 'axios'
import { SignInPayload, SignUpPayload, ResponseToken } from '@/types'

class AuthService {
  async signIn({ email, password }: SignInPayload): Promise<AxiosResponse> {
    const request = await RequestClient.post<{success: boolean, tokens: ResponseToken}>('/', {
      email, password
    })

    if (request.data.success) {
      console.log(request.data.tokens.access, request.data.tokens.refresh)
    }
    return request
  }

  async signUp ({ name, email, password }: SignUpPayload): Promise<AxiosResponse> {
    const request = await RequestClient.post<{success: boolean, tokens: ResponseToken}>('/', {
      name, email, password
    })

    if (request.data.success) {
      console.log(request.data.tokens.access, request.data.tokens.refresh)
    }
    return request
  }
}

export default new AuthService()
