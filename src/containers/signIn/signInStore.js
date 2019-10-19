import { observable, action, decorate } from "mobx";

class SignInStore {
  email;
  password;

  setEmail = email => {
    this.email = email;
  };
  setPassword = password => {
    this.password = password;
  };
}

export default decorate(SignInStore, {
    email: observable,
    password: observable,
    setEmail: action,
    setPassword: action
} );
