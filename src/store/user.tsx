import IUser from '@/shared/interface/User'
import { createContext, FC, useContext } from "react";
export const userStore: IUser = {
  username: '',
  password:''
}
const userContext = createContext<IUser>(userStore)
export const  UserProvider:FC = () =>{
  return <userContext.Provider value={ userStore }></userContext.Provider>
}
export function useStore (){
  return useContext(userContext)
}
