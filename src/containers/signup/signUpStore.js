import { observable, action, decorate } from "mobx";

class SignUpStore {
  regOrgUnitName;
  displayOrgUnitName;
  orgUnitAddress;
  firstName;
  lastName;
  email;
  password;
  confirmPassword;
  mobileNumber;

  setSignUpFields = (key, value) => {
    this[key] = value;
  };
}

export default decorate(SignUpStore, {
  regOrgUnitName: observable,
  displayOrgUnitName: observable,
  orgUnitAddress: observable,
  firstName: observable,
  lastName: observable,
  email: observable,
  password: observable,
  confirmPassword: observable,
  mobileNumber: observable,
  setSignUpFields: action
});
