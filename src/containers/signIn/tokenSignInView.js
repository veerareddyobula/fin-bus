import React from "react";
import styled from "styled-components";

const TokenSignInStyledDiv = styled.div`
  min-height: 10rem;
  padding-top: 1rem;
`;

export const TokenSignInView = props => {
  const { onSubmit } = props;
  return (
    <form>
      <div className="card-content m-3">
        <div className="container">
          <TokenSignInStyledDiv>
            <label htmlFor="exampleInputPassword1">Enter Token</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the token"
                aria-label="Enter the token"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                  onClick={()=>onSubmit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </TokenSignInStyledDiv>
        </div>
      </div>
    </form>
  );
};
