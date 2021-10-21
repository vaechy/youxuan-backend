import { Sequelize } from 'sequelize-typescript'
import path from "path"
const sequelize = new Sequelize({
  database: 'youxuan',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  port:3306,
  models: [path.resolve(__dirname,'../models/*.model.ts'),path.resolve(__dirname,'../models/*.model.js')] // or [Player, Team],
})
try {
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

} catch (error) {
  console.log('data connect error'+error);
  
}
//创建表
// sequelize.sync({force:true})
export { sequelize }

