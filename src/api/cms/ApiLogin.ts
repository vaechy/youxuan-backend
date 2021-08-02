import { ApiCall } from "tsrpc";
import { ReqLogin, ResLogin } from "../../shared/protocols/cms/PtlLogin";

export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
    console.log(call.req);
    // call.succ({})
}