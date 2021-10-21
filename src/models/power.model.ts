// import {  DataTypes } from 'sequelize'
import { Table, Column, Model ,DataType} from 'sequelize-typescript'
import { IPower } from '../shared/interface'
@Table({underscored: true})
export default class Power<T extends IPower> extends Model<T> implements IPower{
  @Column({type:DataType.INTEGER,comment:'权限id',primaryKey:true})
  id: number;
  @Column({comment:'权限名'})
  powerName: string;
  @Column({comment:'权限代码'})
  code: string;
  @Column({comment:'权限描述'})
  desc: string;
  @Column({comment:'权限排序'})
  sorts: number;
  @Column({comment:'权限状态'})
  conditions: number;
}