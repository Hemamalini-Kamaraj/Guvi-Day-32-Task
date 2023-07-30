import React from 'react'
import {  useNavigate } from 'react-router-dom';

function Login() {
    let navigate= useNavigate();
    let username ="abc";
    let pass = "123";
    let handleSignIn =()=>{
        if(username ==="abc" && pass==="123"){
            navigate("/portal/bookscorner");
        }else{
            alert("Worng data");
        }
    }
    return (

        <>
      <form onSubmit={handleSignIn}>
        <div className="heading">
          <h1 className="text-center text-white fw-bold" style={{ color: "#1436cc" }}>
            <i className="fas fa-link fa-spin" aria-hidden="true"></i>&nbsp; URL
            Shortener Application
          </h1>
        </div>
        <div className="d-flex justify-content-center h-100 register">
          <div className="card signin">
            <div className="card-header">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <label className="labels">Email</label>
              <div className="input-group form-group">
                <input
                  type="text"
                  className="form-control"
                />
              </div>
              <br />
              <label className="labels">Password</label>
              <div className="input-group form-group">
                <input
                  type="password"
                  className="form-control"
                />
              </div>
              <br />
              <div className="form-group text-center">
                <input
                  type="submit"
                  value="Login"
                  className="btn login_btn btn-block"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <div className="container justify-content-center text-white d-flex">
        <div className="card">
          <div className="card-body text-center">
            <p className="fw-bold">Sample Credentials</p>
            <p>Credentials : abc - 123</p>
          </div>
        </div>
      </div>
    </>
    )
}

export default Login;