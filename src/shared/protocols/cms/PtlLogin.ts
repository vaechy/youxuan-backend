export interface ReqLogin {
  username: string,
  password: string,
}
export interface ResLogin {
  id: number,
  avatar: string,
  username: string,
  password: string,
  email: string,
  mobile: string,
  group_id: number,
  is_del:number,
  create_time: string,
  update_time: string
}