import { makeObservable, observable, computed, action,flow } from "mobx"
type User = {
  username?: string | null
  avatar?:string | null
}
export class UserStore {
  userInfo : User
  constructor(userInfo: User) {
    makeObservable(this, {
      userInfo: observable,
      // double: computed,
      // revUser: action,
      // fetch: flow
    })
    this.userInfo = userInfo
  }

    get user():User {
      return this.userInfo
    }

    // revUser() {
    //     this.value++
    // }
    // action(){}
    // *fetch() {
    //     const response = yield fetch("/api/value")
    //     this.value = response.json()
    // }
}