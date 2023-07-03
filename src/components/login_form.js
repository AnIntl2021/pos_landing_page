import { useState } from "react";
import logo from '../assets/loginpageimage.png';
import "../styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";


function LoginForm() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="row my-5">
      <div className="col-6 ">
        <img src={logo} className="img-responsive img-fluid" />
      </div>

      <div className="col-6 card p-5 container">
        <form onSubmit={handleSubmit}>
          <div className="fs-1 fw-bold " >{"Get In Touch"}</div>
          <div className="row justify-content-center align-items-center g-2">
            <div className="col">
              <div className="input-container form-label">
                <label>Username </label>
                <input type="email" className="form-control" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
            </div>
            <div className="col">
              <div className="input-container form-label">
                <label>Username </label>
                <input type="email" className="form-control" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center g-2">
            <div className="col">
              <div className="input-container form-label">
                <label>Password </label>
                <input type="password" className="form-control" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
            </div>
            <div className="col">
              <div className="input-container form-label">
                <label>Password </label>
                <input type="password" className="form-control" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center g-2">
            <div className="col">
              <div className="input-container form-label">
                <label>Password </label>
                <input type="password" className="form-control" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
            </div>
            <div className="col">
              <div className="input-container form-label">
                <label>Password </label>
                <input type="password" className="form-control" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="">textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

          <button className="btn btn-sumbit text-white btn-block w-100  fs-4">
            {"Sumbit Message"}
          </button>


        </form>
      </div>
    </div>


  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginForm;