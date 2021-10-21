import '../uitls/database'
import UserModel from './cms_user.model'
import RoleModel from './role.model'
import MenuModel from './menu.model'
import PowerModel from './power.model'
//初始创建表
UserModel.belongsToMany(RoleModel, { through: 'user_role' })
RoleModel.belongsToMany(PowerModel, { through: 'role_power' })
MenuModel.hasMany(PowerModel)
PowerModel.belongsTo(MenuModel)

// const user = UserModel.build({ username: 'vaechy', password: 'chy965162422', email: '76763229@qq.com', mobile: '18565256868', desc: '普通用户', conditions: 1 })
// user.save()

export {
  UserModel,
  RoleModel,
  MenuModel,
  PowerModel
}