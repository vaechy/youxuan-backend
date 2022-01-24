import jwt from "jsonwebtoken"
import { IUser } from "../shared/interface/index"
class JWT {
  expiresIn = '300000'
  token = ''
  secret = ''
  
  constructor(userInfo: IUser) {
    
    this.secret = userInfo.username
    this.token = jwt.sign(userInfo, this.secret, { expiresIn: this.expiresIn })
  }
  verifyToken(token:string){
    const res = jwt.verify(token, this.secret, (err, data) => {
      if (err) {
        return false
      } else {
        return data
      }
    })
    return res
  }
  tostring() {
    return '--'
   }
}
export default JWT