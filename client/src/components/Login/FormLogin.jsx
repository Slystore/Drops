import React, { useState } from "react";
import "./loginStyles.css";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { userLogin, userLoginGoogle } from "../../redux/users/userActions";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";

export default function FormLogin() {

  const [logeado, setLogeado] = useState({
    msg: "",
    state: false,
  });

  const history = useHistory();

  const responseGoogle = async (response) => {
    try {
      console.log("a ver la response", response);
      if (response) {
        let x = await userLoginGoogle(response);
        if (x.user) {
          localStorage.setItem("token", response.tokenId);
          history.push("/");
        }
      }
    } catch (err) {
      console.log("rompo en response google", err);
    }
  };

  return (
    <div className="log-Cont">
      <div className="log-Box">
        <h1>LOGIN</h1>
        <div className="border-dec"></div>
        <div className="img-log"></div>
        <Formik
          initialValues={{
            mail: "",
            password: "",
          }}
          onSubmit={async (body) => {
            const x = await userLogin(body);
            console.log(x);
            if (x.msg) {
              setLogeado({
                state: false,
                msg: x.msg,
              });
              setTimeout(() => {
                setLogeado({
                  msg: "",
                });
              }, 4000);
            }
            if (x.auth === true) {
              history.push("/");
            }
          }}
          validate={(values) => {
            let error = {};
            if (!values.mail) {
              error.mail = "Por favor ingrese un mail";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.mail
              )
            ) {
              error.mail = "Por favor ingrese una dirección de correo válida";
            }
            if (!values.password) {
              error.password = "Por favor ingrese una contraseña";
            }

            return error;
          }}
        >
          {({ errors }) => (
            <Form>
              <div className="form-box-log">
                <div className="data-Field">
                  <Field
                    className="Field"
                    name="mail"
                    type="text"
                    placeHolder="Mail"
                  />

                  <ErrorMessage
                    name="mail"
                    component={() => (
                      <div className="log-error-inp">{errors.mail}</div>
                    )}
                  />
                </div>
                <div className="data-Field">
                  <Field
                    className="Field"
                    name="password"
                    type="password"
                    placeHolder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="log-error-inp">{errors.password}</div>
                    )}
                  />
                </div>
                <div className="data-Field">
                  <button className="btn-sub" type="submit">
                    Login
                  </button>
                </div>
                <div className="data-Field">
                  {logeado && <p className="log-error">{logeado.msg}</p>}
                </div>
                <div className="data-Field">
                  <p>
                    Don't you have an account yet?{" "}
                    <a href="/register">Register here</a> or Sign in with google
                  </p>
                </div>
                <div className="data-Field">
                  <GoogleLogin
                    className="BtnFace"
                    clientId="867381968121-k4jusja35hahfur6b0ionmv8mc9f8fgj.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
