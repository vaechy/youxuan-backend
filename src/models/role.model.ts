// import {  DataTypes } from 'sequelize'
import { Table, Column, Model ,DataType} from 'sequelize-typescript'
import { IRole} from '../shared/interface'
@Table({underscored: true})
export default class Role<T extends IRole> extends Model<T> implements IRole{
  @Column({type:DataType.INTEGER,comment:'角色id',primaryKey:true})
  id: number;
  @Column({comment:'角色名'})
  roleName: string;
  @Column({comment:'角色描述'})
  desc: string;
  @Column({comment:'角色排序'})
  sorts: number;
  @Column({comment:'角色状态'})
  conditions: number;
}