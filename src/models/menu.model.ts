
import { Table, Column, Model ,DataType} from 'sequelize-typescript'
import { IMenu } from '../shared/interface'

@Table({underscored: true})
export default class Menu<T extends IMenu> extends Model<T> implements IMenu{
  @Column({type:DataType.INTEGER,comment:'this is menu id',primaryKey:true})
  id: number
  @Column({comment:'菜单名'})
  menuName: string;
  @Column({comment:'菜单图标'})
  icon: string;
  @Column({comment:'菜单路由地址'})
  url: string;
  @Column({comment:'父级菜单id'})
  parentMid: number;
  @Column({comment:'菜单描述'})
  desc: string;
  @Column({comment:'菜单排序'})
  sorts: number;
  @Column({comment:'菜单状态'})
  conditions: number;
}
