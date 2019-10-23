import React from "react";
import styled from "styled-components";

import SiteLogo from "./../../components/common/siteLogo";
import SignUpStore from "./signUpStore";
import {OrgDetails, OrgPrimaryContactTblList} from "./signUpForms"

const SignInFlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  @media only screen and (min-width: 1070px) {
    grid-template-columns: 80%;
  }
`;

const SignInContainer = () => {

  const [signUpStore, setSignUpStore] = React.useState();
  React.useEffect(() => {
    const appStore = new SignUpStore();
    setSignUpStore(appStore);
  }, []);


  const onSignInSubmit = () => {
    console.log("--== I am onSignInSubmit ==-- ", JSON.stringify(signUpStore));
  };

  return (
    <SignInFlexWrapper>
      <div className="card col-12 p-0">
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
              <OrgDetails store={signUpStore} />
              <OrgPrimaryContactTblList store={signUpStore} />
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <div>
              <a href="#/" className="btn btn-secondary">
                Cancel
              </a>
            </div>
            <button className="btn btn-primary" onClick={onSignInSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </SignInFlexWrapper>
  );
};

export default SignInContainer;
