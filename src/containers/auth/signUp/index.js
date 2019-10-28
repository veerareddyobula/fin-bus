import React from "react";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import { observer } from "mobx-react";
import { Formik, Field, Form } from "formik";

import SiteLogo from "./../../../components/common/siteLogo";
import Store from "./../store";

const SignUpGridWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  align-items: center;
  @media only screen and (min-width: 1070px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .colSpan-2 {
      grid-column-start: 1;
      grid-column-end: 3;
      margin-bottom: 6px;
    }
  }
`;

const SIGN_UP_FORMS_MUTATION = gql`
  mutation signup(
    $regOrgUnitName: String!
    $displayOrgUnitName: String!
    $orgUnitAddress: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $mobileNumber: String!
  ) {
    signup(
      regOrgUnitName: $regOrgUnitName
      displayOrgUnitName: $displayOrgUnitName
      orgUnitAddress: $orgUnitAddress
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      mobileNumber: $mobileNumber
    ) {
      token
    }
  }
`;

const store = new Store();

const SignUpContainer = observer(({ history }) => {
  const [validations, setValidations] = React.useState();
  const [signup] = useMutation(SIGN_UP_FORMS_MUTATION, {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  });

  const onSignUpSubmit = async values => {
    const payload = {
      regOrgUnitName: values.regOrgUnitName,
      displayOrgUnitName: values.displayOrgUnitName,
      orgUnitAddress: values.orgUnitAddress,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      mobileNumber: "" + values.mobileNumber
    };
    const { data, errors } = await signup({
      variables: { ...payload }
    });
    console.log("--== onSubmit ---== ", data, errors);
    if (data && data.signIn) {
      store.setToken(data.signIn.token);
      setValidations([]);
    } else if (errors && errors.length > 0) {
      setValidations(errors);
    }
  };

  return (
    <div className="container-fluid">
      <div className="card m-3">
        <div className="card-header">
          <div className="card-title d-flex justify-content-between">
            <div>
              <SiteLogo height="32rem" />
              <span style={{ textDecoration: "none" }}>Fin-Bus</span>
            </div>
            <div>Sign Up</div>
          </div>
        </div>
        <div className="card-content">
          <div className="container-fluid">
            <Formik
              initialValues={{
                regOrgUnitName: "",
                displayOrgUnitName: "",
                orgUnitAddress: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                mobileNumber: ""
              }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.regOrgUnitName) {
                  errors.regOrgUnitName = "Required";
                }
                if (!values.displayOrgUnitName) {
                  errors.displayOrgUnitName = "Required";
                }
                if (!values.orgUnitAddress) {
                  errors.orgUnitAddress = "Required";
                }
                if (!values.firstName) {
                  errors.firstName = "Required";
                }
                if (!values.lastName) {
                  errors.lastName = "Required";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                if (!values.confirmPassword) {
                  errors.confirmPassword = "Required";
                }
                if (
                  values.password &&
                  values.confirmPassword &&
                  values.password !== values.confirmPassword
                ) {
                  errors.password =
                    "Password and Confirm password should be same";
                  errors.confirmPassword =
                    "Password and Confirm password should be same";
                }
                if (!values.mobileNumber) {
                  errors.mobileNumber = "Required";
                }
                return errors;
              }}
              onSubmit={values => {
                onSignUpSubmit(values);
                console.log("--== validations ", validations);
                if (validations && validations.length === 0) {
                  history.push("/signIn");
                }
              }}
            >
              {({ errors, touched, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <SignUpGridWrapper>
                    {validations &&
                      validations.map(item => {
                        return (
                          <div
                            className="alert alert-danger m-2 colSpan-2"
                            role="alert"
                            key={item.message.length}
                          >
                            {item.message}
                          </div>
                        );
                      })}
                    <div className="form-group">
                      <label htmlFor="regOrgUnitName">
                        Registered Organization Name
                      </label>
                      <Field
                        type="text"
                        name="regOrgUnitName"
                        placeholder="Registered Organization Name"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.regOrgUnitName &&
                          touched.regOrgUnitName &&
                          errors.regOrgUnitName}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="displayOrgUnitName">
                        Organization Display Name
                      </label>
                      <Field
                        name="displayOrgUnitName"
                        placeholder="Organization Display Name"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.displayOrgUnitName &&
                          touched.displayOrgUnitName &&
                          errors.displayOrgUnitName}
                      </div>
                    </div>
                    <div className="form-group colSpan-2">
                      <label htmlFor="orgUnitAddress">
                        Organization Address
                      </label>
                      <Field
                        as="textarea"
                        name="orgUnitAddress"
                        placeholder="Address"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.orgUnitAddress &&
                          touched.orgUnitAddress &&
                          errors.orgUnitAddress}
                      </div>
                    </div>
                    <h6 className="p-2 border-bottom text-secondary colSpan-2">
                      Register Administrator Details
                    </h6>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <Field
                        name="firstName"
                        placeholder="First Name"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <Field
                        name="lastName"
                        placeholder="Last Name"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.lastName && touched.lastName && errors.lastName}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobileNumber">Mobile Number</label>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        className="form-control"
                      />
                      <div className="text-danger">
                        {errors.mobileNumber &&
                          touched.mobileNumber &&
                          errors.mobileNumber}
                      </div>
                    </div>
                  </SignUpGridWrapper>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#/" className="btn btn-secondary">
                        Cancel
                      </a>
                    </div>
                    <div className="m-2 btn-group">
                      <button
                        className="btn btn-warning"
                        type="button"
                        onClick={() => history.push("/signIn")}
                      >
                        Reset
                      </button>
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SignUpContainer;
