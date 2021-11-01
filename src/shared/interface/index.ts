export interface IUser {
  id?: number,
  username: string,
  password: string,
  email?: string,
  mobile?: string;
  desc?: string
  conditions?:number,
}
export interface IRole {
  id: number,
  roleName: string,
  desc: string,
  sorts:number,
  conditions:number
}

export interface IPower {
  id: number,
  powerName: string,
  code: string
  desc: string,
  sorts:number,
  conditions:number
}

export interface IMenu   {
  id: number,
  menuName: string,
  icon: string,
  url: string,
  parentMid: number,
  desc: string,
  sorts: number,
  conditions?: number,
}