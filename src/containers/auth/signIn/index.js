import React from "react";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import { Formik, Field, Form } from "formik";

import SiteLogo from "./../../../components/common/siteLogo";

const SignInFlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  @media only screen and (min-width: 1070px) {
    grid-template-columns: 50%;
  }
`;

const SIGN_IN_FORMS_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const SignInContainer = ({ history }) => {
  const [validations, setValidations] = React.useState();
  const [signIn] = useMutation(SIGN_IN_FORMS_MUTATION, {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  });

  const onSubmit = async values => {
    console.log("--== onSubmit --== ", values);
    const { data, errors } = await signIn({
      variables: { email: values.email, password: values.password }
    });
    if (data && data.signIn) {
      console.log("--== onSubmit ---== ", data, errors);
      const {signIn} = data;
      localStorage.setItem('token', signIn.token);
      history.push("/app/default/home");
    } else if (errors && errors.length > 0) {
      setValidations(errors);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
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
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      onSubmit={values => {
        onSubmit(values);
        console.log("--== validations ", validations);
        if (validations && validations.length === 0) {
          history.push("/app/default/home");
        }
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <SignInFlexWrapper>
            <div className="card">
              <div className="card-header">
                <div className="card-title d-flex justify-content-between">
                  <div>
                    <SiteLogo height="32rem" />
                    <span style={{ textDecoration: "none" }}>Fin-Bus</span>
                  </div>
                  <div>Sign In</div>
                </div>
              </div>
              <div className="card-content">
                <div className="container">
                  {validations &&
                    validations.map(item => {
                      return (
                        <div
                          className="alert alert-danger m-2"
                          role="alert"
                          key={item.message.length}
                        >
                          {item.message}
                        </div>
                      );
                    })}
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
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between flex-wrap m-2">
                  <a className="btn btn-secondary col-md-3" href="#/signUp">
                    Sign Up
                  </a>
                  <button type="submit" className="btn btn-primary col-md-3">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </SignInFlexWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignInContainer;
