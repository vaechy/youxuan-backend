import { ApiCall } from "tsrpc";
import { ReqCmsUserList, ResCmsUserList } from "../shared/protocols/PtlCmsUserList";
import { findAllCmsUsers } from '../services/UserService'
export async function ApiCmsUserList(call: ApiCall<ReqCmsUserList, ResCmsUserList>) {
    // TODO
    const users = await findAllCmsUsers()
    call.succ({
        code: 1,
        message:'',
        data:users
    })
}