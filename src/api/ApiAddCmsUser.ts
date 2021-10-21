import { ApiCall } from "tsrpc";
import { ReqAddCmsUser, ResAddCmsUser } from "../shared/protocols/PtlAddCmsUser";

export async function ApiAddCmsUser(call: ApiCall<ReqAddCmsUser, ResAddCmsUser>) {
    // TODO
    call.error('API Not Implemented');
}