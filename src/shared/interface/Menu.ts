export default interface Menu {
  id?: number
  title?: string | null
  icon?: string | null
  url?: string | null
  parent?: string | null
  desc?: string | null
  sorts?: number | null
  condition?: number | null
  create_time?: Date | null
  update_time?: Date | null
}