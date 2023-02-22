import { Formik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { contactSchema } from "./../validation/contactValidation";
import {Navbar} from "./Navbar";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="landing-layer">
        <Navbar />
      </div>
      <main className="client-page">
        <div className="container-content container">
          <div style={{ display: "flex" }}>
            <img
              src={require("../assets/castumer7.png")}
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                width: "550px",
                top: "130px",
                left: "100px",
              }}
            />
            <div>
              <div className="row login">
                <div className="col">
                  <p
                    className="h4 fw-bold "
                    style={{
                      color: "rgb(112, 131, 245)",
                      fontSize: "40px",
                      paddingBottom: "20px",
                    }}
                  >
                    ورود به سایت{" "}
                  </p>
                </div>
              </div>

              <div className="form-layer ">
                <Formik
                  initialValues={{
                    password: "",
                    email: "",
                  }}
                  validationSchema={contactSchema}
                >
                  {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                      <div className=" mb-2">
                        <span className="input-group-addon" id="email-address">
                          <i className="zmdi zmdi-email"></i>
                        </span>
                        <input
                          type="text"
                          name="email"
                          className="form-control form-control-reg"
                          placeholder="ایمیل"
                          aria-describedby="email-address"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        {formik.errors.email && (
                          <p className="text-danger">{formik.errors.email}</p>
                        )}
                      </div>

                      <div className=" form-input mb-3">
                        <span className="input-group-addon" id="password">
                          <i className="zmdi zmdi-lock"></i>
                        </span>
                        <input
                          type="password"
                          name="password"
                          className="form-control form-control-reg"
                          placeholder="رمز عبور "
                          aria-describedby="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        {formik.errors.password && (
                          <p className="text-danger">
                            {formik.errors.password}
                          </p>
                        )}
                      </div>

                      <div className="remember-me mb-2">
                        <label>
                          <input type="checkbox" name="" /> مرا بخاطر بسپار{" "}
                        </label>
                      </div>

                      <div className="link mb-3">
                        <a href="">
                          {" "}
                          <i className="zmdi zmdi-lock"></i> رمز عبور خود را
                          فراموش کرده ام !
                        </a>
                        <br />
                        <a href="">
                          {" "}
                          <i className="zmdi zmdi-account"></i> عضویت در سایت{" "}
                        </a>
                      </div>

                      <button
                        className="btn  sub-login mb-2"
                        style={{ backgroundColor: "#50fa7b" }}
                      >
                        {" "}
                        ورود به سایت{" "}
                      </button>
                      <br />

                      <NavLink
                        to={"/"}
                        className="btn  sub-login"
                        style={{ backgroundColor: "#ff5555" }}
                        value=" انصراف"
                      >
                        بازگشت به صفحه اصلی
                      </NavLink>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


