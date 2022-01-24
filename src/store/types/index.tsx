import IUser from '@/shared/interface/User'
export interface IUserStore  {
  user: IUser[],
  getUser: IUser[]
  setUser: (user:IUser) => any
}