export default interface Role{
  id?: number
  title?: string | null
  desc: string | null
  sorts?: number | null
  condition?: number | null
  create_time?: Date | null
  update_time?: Date | null
}