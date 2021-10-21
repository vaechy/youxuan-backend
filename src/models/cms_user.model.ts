import { Table, Column, Model ,DataType} from 'sequelize-typescript'
import { IUser } from '../shared/interface'
@Table({ underscored: true })
export default class CmsUser<T extends IUser > extends Model<T> implements IUser {
  @Column({type:DataType.INTEGER,comment:'用户id',primaryKey:true,autoIncrement:true})
  id?: number;
  @Column({comment:'用户名',unique: true})
  username: string;
  @Column({comment:'密码'})
  password: string;
  @Column({comment:'邮箱号'})
  email?: string;
  @Column({comment:'手机号'})
  mobile?: string;
  @Column({comment:'，描述'})
  desc?: string;
  @Column({comment:'状态'})
  conditions?: number;
}

