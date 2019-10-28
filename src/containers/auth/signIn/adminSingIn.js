import React from "react";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

const SIGN_IN_FORMS_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;
const AdminSignIn = ({ store }) => {
  const [validations, setValidations] = React.useState();
  let email, password;
  const [signIn] = useMutation(SIGN_IN_FORMS_MUTATION, {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  });

  const onSubmit = async e => {
    e.preventDefault();
    const { data, errors } = await signIn({
      variables: { email: email.value, password: password.value }
    });
    console.log("--== onSubmit ---== ", data, errors);
    if (data && data.signIn) {
      store.setToken(data.signIn.token);
    } else if (errors && errors.length > 0) {
      setValidations(errors);
    }
  };
  return (
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
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          ref={node => {
            email = node;
          }}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          ref={node => {
            password = node;
          }}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember Me!
        </label>
      </div>
      <div className="d-flex justify-content-between flex-wrap m-2">
        <a className="btn btn-secondary col-md-3" href="#/signUp">
          Sign Up
        </a>
        <button
          type="button"
          className="btn btn-primary col-md-3"
          onClick={event => onSubmit(event)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default AdminSignIn;
