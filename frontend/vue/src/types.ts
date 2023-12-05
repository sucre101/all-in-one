export type SignInPayload = {
  email: string
  password: string
}

export type SignUpPayload = {
  name: string
} & SignInPayload

export type ResponseToken = {
  access: string
  refresh: string
}
