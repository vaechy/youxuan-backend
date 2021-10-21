import { ApiCall } from "tsrpc";
import { ReqLogin, ResLogin } from "../shared/protocols/PtlLogin";
import { findCmsUserByName } from '../services/UserService'
export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
  const user = await findCmsUserByName(call.req.username)
  if (user) {
    if (user.password === call.req.password) {
      call.succ({
        code: 1,
        message: '登录成功',
        data: user
      })
      return
    }
    call.error('密码错误', { code: -1 })
    return
  }
  call.error('用户名不存在',{code: -2})
  return
}