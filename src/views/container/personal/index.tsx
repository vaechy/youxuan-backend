import { UserStore } from "@/store/User"
import { UserList } from "./UserList"

const userIfon = new UserStore()
export const  Personal = ()=> {
 
    return (<div>
        <UserList userInfo={ }></UserList>

    </div>)
}

