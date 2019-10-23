import React from "react";
import styled from "styled-components";

const AdministratorForm = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  @media only screen and (min-width: 1070px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const OrgPrimaryContactTblList = ({store}) => {
  const {firstName, lastName, email, password, confirmPassword, mobileNumber} = store || {};
  return (
    <>
      <h6 className="p-2 border-bottom text-secondary">Register Administrator Details</h6>
      <AdministratorForm>
        <div className="form-group">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="fName"
            aria-describedby="fNameHelp"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(event)=>store.setSignUpFields('firstName', event.target.value)}
          />
          <small id="fNameHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lName"
            aria-describedby="lNameHelp"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(event)=>store.setSignUpFields('lastName', event.target.value)}
          />
          <small id="lNameHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input
            type="text"
            className="form-control"
            id="userEmail"
            aria-describedby="emailHelp"
            placeholder="Enter Email For SignIn"
            value={email}
            onChange={(event)=>store.setSignUpFields('email', event.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">Email is used to signIn</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            aria-describedby="pwdHelp"
            placeholder="Enter Password"
            value={password}
            onChange={(event)=>store.setSignUpFields('password', event.target.value)}
          />
          <small id="pwdHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="text"
            className="form-control"
            id="confirmPassword"
            aria-describedby="confirmPasswordHelp"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={(event)=>store.setSignUpFields('confirmPassword', event.target.value)}
          />
          <small id="confirmPasswordHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            aria-describedby="mobileNumberHelp"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(event)=>store.setSignUpFields('mobileNumber', event.target.value)}
          />
          <small id="mobileNumberHelp" className="form-text text-muted"></small>
        </div>
      </AdministratorForm>
    </>
  );
};

export const OrgDetails = ({store}) => {
  const {regOrgUnitName, displayOrgUnitName, orgUnitAddress} = store || {};
  return (
    <AdministratorForm>
        <div className="form-group">
          <label htmlFor="regOrgUnitName">Organization Registered Name</label>
          <input
            type="text"
            className="form-control"
            id="regOrgUnitName"
            aria-describedby="regOrgUnitNameHelp"
            placeholder="Enter Registered Organization Name"
            value={regOrgUnitName}
            onChange={(event)=>store.setSignUpFields('regOrgUnitName', event.target.value)}
          />
          <small id="regOrgUnitNameHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="displayOrgUnitName">Organization Display Name</label>
          <input
            type="text"
            className="form-control"
            id="displayOrgUnitName"
            aria-describedby="displayOrgUnitNameHelp"
            placeholder="Enter Organization Display Name"
            value= {displayOrgUnitName}
            onChange={(event)=>store.setSignUpFields('displayOrgUnitName', event.target.value)}
          />
          <small id="displayOrgUnitNameHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="orgUnitAddress">Organization Address</label>
          <textarea
            type="text"
            className="form-control"
            id="orgUnitAddress"
            aria-describedby="orgUnitAddressHelp"
            placeholder="Enter Organization Address"
            value={orgUnitAddress}
            onChange={(event)=>store.setSignUpFields('orgUnitAddress', event.target.value)}
          />
          <small id="orgUnitAddressHelp" className="form-text text-muted"></small>
        </div>
    </AdministratorForm>
  );
};
