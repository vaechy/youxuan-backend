export default interface User {
  id?: number
  username?: string | null
  password?: string | null
  email?: string | null
  mobile?: string | null
  avatar?: string | null
  condition?: number | null
  create_time?: Date | null
  update_time?: Date | null
}