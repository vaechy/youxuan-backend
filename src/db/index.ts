import "reflect-metadata";
import { createConnection } from "typeorm";
import { CmsUser } from "../entity/cms/CmsUser";
createConnection().then(async connection => {

  console.log("Inserting a new user into the database...");
  const cmsUser = new CmsUser();
  // cmsUser.firstName = "Timber"
  // cmsUser.id = 12
  // cmsUser.username = 's'
  // cmsUser.lastName = "Saw";
  // user.age = 25;
  // await connection.manager.save(cmsUser);
  let photoRepository =  connection.getRepository(CmsUser) 
  // let user = await connection.manager.find(CmsUser)
  let user = await photoRepository.find({username:'admin',password:'123456'})
  console.log(user);
  
  // let userList = await connection.manager.find()
  // console.log("Saved a new user with id: " + cmsUser.username);
  // const users = await connection.manager.find(CmsUser);
  // console.log("Loaded users: ", users);
}).catch(error => console.log(error));
