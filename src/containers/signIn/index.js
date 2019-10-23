import React from "react";
import styled from "styled-components";

import SiteLogo from "./../../components/common/siteLogo";
import SignInStore from "./signInStore";
import { AdminSignInView } from "./adminSignInView";
import { TokenSignInView } from "./tokenSignInView";

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

const SignInContainer = () => {
  const [signInStore, setSignInStore] = React.useState();
  React.useEffect(() => {
    const appStore = new SignInStore();
    setSignInStore(appStore);
  }, []);
  const onSignInSubmit = () => {
    console.log("--== I am onSignInSubmit ==-- ", signInStore);
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
            <div>Sign In</div>
          </div>
        </div>
        <nav className="mt-2">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Token
            </a>
            <a
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Admin Login
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <TokenSignInView />
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <AdminSignInView
              SignInStore={signInStore}
              onSubmit={onSignInSubmit}
            />
          </div>
        </div>
      </div>
    </SignInFlexWrapper>
  );
};

export default SignInContainer;
