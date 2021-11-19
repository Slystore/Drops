import React, { useState } from "react";
import "./loginStyles.css";
import { useDispatch } from "react-redux";
import { Form, Field, ErrorMessage, Formik } from "formik";
import {
  getUserId,
  userForgotPass,
  userLogin,
  userLoginGoogle,
} from "../../redux/users/userActions";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";

export default function FormLogin() {
  const dispatch = useDispatch();
  const [logeado, setLogeado] = useState({
    msg: "",
    state: false,
  });
  const [user, setUser] = useState();
  const [mail, setMail] = useState({ mail: "" });
  const [forgot, setForgot] = useState({
    msg: "",
    auth: false,
  });
  const [acc, setAcc] = useState(0);
  const history = useHistory();

  const responseGoogle = async (response) => {
    try {
      console.log("a ver la response", response);
      if (response) {
        let x = await userLoginGoogle(response);

        console.log("esta es la x de google ", x);
        if (x.user) {
          dispatch(getUserId(x.user.id));
          localStorage.setItem('gId',x.user.id)
          localStorage.setItem("token", response.tokenId);
          setTimeout(() => {
            history.push("/");
          }, 1500);
        }
      }
    } catch (err) {
      console.log("rompo en response google", err);
    }
  };
  console.log("este es el mail", mail.mail);
  const forgotClick = async () => {
    await userForgotPass(mail);
    console.log("esta es la data del user ", user);
    dispatch(getUserId(user));
    localStorage.setItem("userId", user);
    setForgot({
      msg: "Se ha enviado un correo electrónico para seguir con la recuperación. Por favor revisa la casilla de spam ",
      auth: true,
    });
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
            setUser(x.id);
            setMail({ mail: body.mail });
            if (x.msg) {
              setLogeado({
                state: false,
                msg: x.msg,
              });
              // setTimeout(() => {
              //   setLogeado({
              //     msg: "",
              //   });
              // }, 4000);
              setAcc(acc + 1);
            }
            console.log(acc);
            if (acc >= 3) {
              return setLogeado({
                state: false,
                msg: "a ver probando",
              });
            }
            if (x.auth === true) {
              history.push("/");
            }
          }}
          validate={(values) => {
            let error = {};
            if (!values.mail) {
              error.mail = "Por favor ingrese un email";
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
                  {logeado && acc >= 3 ? (
                    <div>
                      No recuerdas tu contraseña haz{" "}
                      <span className="forgot-log" onClick={forgotClick}>
                        Click aqui
                      </span>
                    </div>
                  ) : (
                    <p className="log-error">{logeado.msg}</p>
                  )}
                  {forgot.auth ? <div className ="forgot-msg">{forgot.msg}</div> : ""}
                </div>
                <div className="data-Field">
                  <p>
                    Aún no tienes una cuenta? <br />
                    <a href="/register">Registrate aquí</a> <br />o entra con Google
                  </p>
                </div>
                <div className="data-Field">
                  <GoogleLogin
                    className="BtnFace"
                    //vercel
                    // clientId="867381968121-k4jusja35hahfur6b0ionmv8mc9f8fgj.apps.googleusercontent.com"
                    //local
                    clientId="867381968121-4njd3q5va0695tdivgirjl5tka5n7fqo.apps.googleusercontent.com"
                    buttonText="Loguear con Google"
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
