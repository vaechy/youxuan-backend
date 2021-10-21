import { IUser } from "../interface"
export interface ReqCmsUserList {}
export interface ResCmsUserList {
  code: number,
  message: string
  data?: IUser[]
}