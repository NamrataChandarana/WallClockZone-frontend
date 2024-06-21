import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { resetPassword } from "../../redux/actions/user";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { message, error } = useSelector((state) => state.user);

  const params = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };
  return (
    <div>
      <div className="container py-5 h-100 login ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
            {/* <div className="section-title">
          <h2>Log In</h2>
        </div> */}
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center shadow-lg rounded">
                <div className="section-title">
                  <h2>Reset Password</h2>
                </div>
                <form action="" onSubmit={submitHandler}>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2 col-12 mx-auto">
                    <button className="btn btn-primary" type="submit">
                      ResetPassword
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
