import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../redux/actions/user";
function ForgetPassword() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="typeEmailX-2"
            className="form-control form-control-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          submit
        </button>
        {/* <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
          <h6>Or</h6>
          <a href="/register" className="btn btn-primary">
            Sign In
          </a>
        </div> */}
      </form>
    </div>
  );
}

export default ForgetPassword;
