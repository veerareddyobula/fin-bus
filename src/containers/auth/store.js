import { observable, action, decorate } from "mobx";

class SignInStore {
  token;

  setToken = (token) => {
    this.token = token;
  }
}

export default decorate(SignInStore, {
    token: observable,
    setToken: action,
} );
