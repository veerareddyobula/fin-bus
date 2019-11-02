import React from "react";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import { Formik, Field, Form } from "formik";

import SiteLogo from "./../../../components/common/siteLogo";

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

const SignUpContainer = ({ history }) => {
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
      setValidations([]);
      const { signup } = data;
      localStorage.setItem("token", signup.token);
      history.push("/app/default/home");
    } else if (errors && errors.length > 0) {
      setValidations(errors);
    }
  };

  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <div className="login-brand">
                <SiteLogo height="34rem" /> Fin-Bus
              </div>

              <div className="card card-primary">
                <div className="card-header">
                  <h4>Register</h4>
                </div>
                <div className="card-body">
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
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
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
                      if (validations && validations.length === 0) {
                        history.push("/app/default/home");
                      }
                    }}
                  >
                    {({ errors, touched, handleSubmit }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="form-group col-12">
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
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-6">
                            <label htmlFor="frist_name">
                              Registered Organization Name
                            </label>
                            <Field
                              id="regOrgUnitName"
                              type="text"
                              className="form-control"
                              name="regOrgUnitName"
                              autofocus
                            />
                            <div className="text-danger">
                              {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                            </div>
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="displayOrgUnitName">
                              Organization Display Name
                            </label>
                            <Field
                              name="displayOrgUnitName"
                              className="form-control"
                            />
                            <div className="text-danger">
                              {errors.displayOrgUnitName &&
                                touched.displayOrgUnitName &&
                                errors.displayOrgUnitName}
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="orgUnitAddress">
                            Organization Address
                          </label>
                          <Field
                            as="textarea"
                            name="orgUnitAddress"
                            className="form-control"
                          />
                          <div className="text-danger">
                            {errors.orgUnitAddress &&
                              touched.orgUnitAddress &&
                              errors.orgUnitAddress}
                          </div>
                        </div>

                        <div className="form-divider">Administrator Details</div>
                        <div className="row">
                          <div className="form-group col-6">
                            <label htmlFor="firstName">First Name</label>
                            <Field
                              name="firstName"
                              className="form-control"
                            />
                            <div className="text-danger">
                              {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                            </div>
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                              name="lastName"
                              className="form-control"
                            />
                            <div className="text-danger">
                              {errors.lastName &&
                                touched.lastName &&
                                errors.lastName}
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                          />
                          <div className="text-danger">
                            {errors.email && touched.email && errors.email}
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-6">
                            <label htmlFor="password">Password</label>
                            <Field
                              type="password"
                              name="password"
                              className="form-control"
                            />
                            <div className="text-danger">
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </div>
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="confirmPassword">
                              Confirm Password
                            </label>
                            <Field
                              type="password"
                              name="confirmPassword"
                              className="form-control"
                            />
                            <div className="text-danger">
                              {errors.confirmPassword &&
                                touched.confirmPassword &&
                                errors.confirmPassword}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-6">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <Field
                              type="number"
                              name="mobileNumber"
                              className="form-control"
                            />
                            <div className="text-danger">
                              {errors.mobileNumber &&
                                touched.mobileNumber &&
                                errors.mobileNumber}
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                          >
                            Register
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="simple-footer">Copyright &copy; Fin-Bus 2019</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpContainer;
