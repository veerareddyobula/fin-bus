import React from "react";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import { Formik, Field, Form } from "formik";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SIGN_IN_FORMS_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const LoginPage = ({ history }) => {
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
      const { signIn } = data;
      localStorage.setItem("token", signIn.token);
      history.push("/app/default/home");
    } else if (errors && errors.length > 0) {
      setValidations(errors);
    }
  };
  return (
    <div id="app">
      <section className="section">
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
              <div className="container mt-5">
                <div className="row">
                  <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                    <div className="card card-primary">
                      <div className="card-header d-flex justify-content-between">
                        <h4>Login</h4>
                        <div className="login-brand">
                          <FontAwesomeIcon icon={["fas", "bus-alt"]} /> Fin-Bus
                        </div>
                      </div>

                      <div className="card-body">
                        <form
                          method="POST"
                          action="#"
                          className="needs-validation"
                          noValidate=""
                        >
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
                              id="email"
                              type="email"
                              name="email"
                              className="form-control"
                              tabIndex="1"
                              required
                              autoFocus
                            />
                            <div className="invalid-feedback">
                              Please fill in your email
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="d-block">
                              <label
                                htmlFor="password"
                                className="control-label"
                              >
                                Password
                              </label>
                              <div className="float-right">
                                <a
                                  href="auth-forgot-password.html"
                                  className="text-small"
                                >
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                            <Field
                              id="password"
                              type="password"
                              name="password"
                              className="form-control"
                              tabIndex="2"
                              required
                            />
                            <div className="invalid-feedback">
                              please fill in your password
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                name="remember"
                                className="custom-control-input"
                                tabIndex="3"
                                id="remember-me"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="remember-me"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>

                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg btn-block"
                              tabIndex="4"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                        <div className="text-center mt-4 mb-3">
                          <div className="text-job text-muted">
                            Login With Secret Key
                          </div>
                        </div>
                        <div className="row sm-gutters d-flex justify-content-center">
                          <div className="col-6">
                            <a
                              href="#/"
                              className="btn btn-block btn-social btn-twitter"
                            >
                              <FontAwesomeIcon
                                icon={["fas", "key"]}
                                style={{ marginTop: "0.8rem" }}
                              />{" "}
                              Secret Key
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 text-muted text-center">
                      Don't have an account? <a href="#/signUp">Create One</a>
                    </div>
                    <div className="simple-footer">
                      Copyright &copy; Fin-Bus 2019
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default LoginPage;
