import React from "react";
import styled from "styled-components";
import SignInStore from "../store";

import SiteLogo from "./../../../components/common/siteLogo";
import AdminSignIn from './adminSingIn';

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
const signInStore = new SignInStore();

export default class SignInContainer extends React.Component {
  

  render() {
    return (
      <SignInFlexWrapper>
        <div className="card col-12 p-0">
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
            <AdminSignIn store={signInStore} />
          </div>
        </div>
      </SignInFlexWrapper>
    );
  }
}
