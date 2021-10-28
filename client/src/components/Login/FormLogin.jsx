import React, { useState } from "react";
import { Form, Field, ErrorMessage, Formik, validateYupSchema } from "formik";
import { userLogin } from "../../redux/users/userActions";
import { useHistory } from "react-router";
export default function FormLogin() {
  const [logeado, setLogeado] = useState({
    msg: "",
    state: false,
  });
  const history = useHistory();
  return (
    <div>
      <h1>Login</h1>
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
          }
          if (!values.password) {
            error.password = "Por favor ingrese una contraseña";
          }

          return error;
        }}
      >
        {({ errors }) => (
          <Form>
            <Field name="mail" type="text" placeHolder="Mail" />
            <ErrorMessage
              name="mail"
              component={() => <div>{errors.mail}</div>}
            />
            <Field name="password" type="password" placeHolder="Password" />
            <ErrorMessage
              name="password"
              component={() => <div>{errors.password}</div>}
            />
            <button type="submit">Login</button>
            {logeado && <p>{logeado.msg}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
