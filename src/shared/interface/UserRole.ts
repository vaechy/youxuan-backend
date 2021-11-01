export default interface User {
  id?: number
  user_id?: number,
  role_id?: number,
  condition?: number | null
  create_time?: Date | null
  update_time?: Date | null
}