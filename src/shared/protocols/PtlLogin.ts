export interface ReqLogin {
  username: string,
  password: string,
}
export interface ResLogin {
  code: number,
  message: string
  token?:string
}