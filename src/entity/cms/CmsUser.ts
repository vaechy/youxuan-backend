import { Entity, Column, PrimaryColumn ,PrimaryGeneratedColumn} from 'typeorm'
import { ReqLogin,ResLogin } from '../../shared/protocols/cms/PtlLogin'
@Entity()
export class CmsUser{
  constructor() {
    this.username = 'admin'
    this.password = '123456'
  }
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @PrimaryColumn()
  email: string = '';
  @PrimaryColumn()
  mobile: string = '';
  @Column()
  avatar: string = '';
  @Column()
  group_id: number = 0;
  @Column()
  is_del: number = 0;
  @Column('datetime')
  create_time: string = new Date().toISOString().slice(0, 19).replace('T', ' ');
  @Column('datetime')
  update_time: string = new Date().toISOString().slice(0, 19).replace('T', ' ');

  // userValidate({username,password }:ResLogin) : ReqLogin{
  //   if (this.username === username) {
  //     this.password
  //   }
  // }
}