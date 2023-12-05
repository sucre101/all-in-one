export type User = {
    id: number
    name: string
    email: string
}

export type AuthUserFieldOptions = {
  name: string
  type: string
  required: boolean
  placeholder: string
  class?: string
  rules?: string[]
}
