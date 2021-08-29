import User from '../../interface/User'

export interface ReqLogin {
  username: string,
  password: string,
}
export interface ResLogin  {
  code: number,
  msg: string,
  userInfo?: User,
  access_token ?:string
}