import { IUser } from '../shared/interface'
import { UserModel } from '../models'
//根据用户名查询用户
export async function findCmsUserByName(username: string): Promise<IUser>{
  const user = await UserModel.findOne({
    raw:true,
    where: {
      username
  }})
  return user
}

//查询所有使用户

export async function findAllCmsUsers(): Promise<IUser[]>{
  const users = await UserModel.findAll()
  return users
}
//插入用户
export async function addCmsUser(){

}
//删除用户
export async function delCmsUser(){

}
//修改用户
export async function updateCmsUser(){

}