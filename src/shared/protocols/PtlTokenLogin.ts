import { IUser } from "../interface"
export interface ReqTokenLogin {
  token:string
}
export interface ResTokenLogin{
  userInfo: IUser
}    
              