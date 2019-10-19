import React from 'react';

export const AdminSignInView = (props) => {
    const {SignInStore, onSubmit} = props;
    console.log('--== AdminSignInView   :: SignInStore --== ', SignInStore)
    const {email, password, setEmail, setPassword} = SignInStore || {};
    return (
        <form>
          <div className="card-content m-3">
            <div className="container">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event)=>setEmail(event.target.value)}
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
                  value={password}
                  onChange={(event)=>setPassword(event.target.value)}
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
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between flex-wrap">
            <a className="nav-link my-1 col-md-4" href="#item-1-2">
              Sign Up... now!!
            </a>
            <button type="submit" className="btn btn-primary col-md-3" onClick={(event)=> onSubmit()}>
              Sign In
            </button>
          </div>
        </form>
    )
}