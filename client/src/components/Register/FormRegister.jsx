import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userRegister } from "../../redux/users/userActions";
import { useHistory } from "react-router";
import "./formRegisterStyles.css";
export default function FormRegister() {
  const history = useHistory();
  const [user, setUser] = useState({
    validate: "",
    noValidate: "",
  });
  const [succes, setSucces] = useState(false);
  return (
    <div className="reg-Cont">
      <div className="reg-Box">
        <h1>Register</h1>
        <div className="border-dec"></div>
        <div className="img-log"></div>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            mail: "",
            password: "",
            phone: "+54 9 ",
            location: "",
          }}
          onSubmit={async (body, { resetForm }) => {
            const x = await userRegister(body);
            if (!x.token) {
              setUser({
                noValidate: x.msg,
              });
              setTimeout(() => {
                setUser({
                  noValidate: "",
                });
              }, 3000);
            } else if (x.user) {
              setSucces(true);
              setTimeout(() => {
                setSucces(false);
                history.push("/login");
              }, 3500);
              resetForm();
            }
          }}
          validate={(values) => {
            let error = {};

            //nombre
            if (!values.name) {
              error.name = "Por favor completar este campo";
            } else if (
              !/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(values.name)
            ) {
              error.name =
                "Debe comenzar con mayúscula, sin numeros ni espacios";
            }
            //apellido
            if (!values.surname) {
              error.surname = "Por favor ingrese un apellido";
            } else if (!/^[a-zA-Z]{3,30}/.test(values.surname)) {
              error.surname = "El apellido debe tener entre 3 y 30 carecteres";
            }
            //mail
            if (!values.mail) {
              error.mail = "Por favor ingrese un mail";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.mail
              )
            ) {
              error.mail = "Por favor ingrese una direccion de correo valida";
            }
            if (!values.password) {
              error.password = "Por favor ingrese una contraña";
            } else if (
              !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(values.password)
            ) {
              error.password =
                "La contraseña debe tener mínimo seis caracteres, al menos una letra y un número";
            }
            if (!values.location) {
              error.location = "Por favor ingrese una direccion de vivienda";
            }
            if (!values.phone) {
              error.phone = "Por favor ingrese un numero de telofono";
            } else if (!/^[+]?\d{2} \d{1} \d{2,4} \d{6}/gi.test(values.phone)) {
              error.phone = "El numero ingresado no es valido";
            }

            return error;
          }}
        >
          {({ errors }) => (
            <Form>
              <div className="form-box-reg">
                <div className="data-Field-reg">
                  <Field
                    className="Field-reg"
                    autoComplete="off"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div className="log-error-inp">{errors.name}</div>
                    )}
                  />
                </div>
                <div className="data-Field-reg">
                  <Field
                    className="Field-reg"
                    autoComplete="off"
                    type="text"
                    name="surname"
                    placeholder="Surname"
                  />
                  <ErrorMessage
                    name="surname"
                    component={() => (
                      <div className="log-error-inp">{errors.surname}</div>
                    )}
                  />
                </div>
                <div className="data-Field-reg">
                  <Field
                    className="Field-reg"
                    autoComplete="off"
                    type="text"
                    name="mail"
                    placeholder="Mail"
                  />
                  <ErrorMessage
                    name="mail"
                    component={() => (
                      <div className="log-error-inp">{errors.mail}</div>
                    )}
                  />
                </div>
                <div className="data-Field-reg">
                  <Field
                    className="Field-reg"
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="log-error-inp">{errors.password}</div>
                    )}
                  />
                </div>
                <div className="data-Field-reg">
                  <Field
                    className="Field-reg"
                    autoComplete="off"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component={() => (
                      <div className="log-error-inp">{errors.phone}</div>
                    )}
                  />
                </div>
                <div className="data-Field-reg">
                  <Field
                    className="Field-reg"
                    autoComplete="off"
                    type="text"
                    name="location"
                    placeholder="Adress"
                  />
                  <ErrorMessage
                    name="location"
                    component={() => (
                      <div className="log-error-inp">{errors.location}</div>
                    )}
                  />
                </div>
              </div>
              <div className="data-Field-reg">
                <button className="btn-reg" type="submit">
                  Create
                </button>
              </div>
              <div className="data-Field-reg">
                <div className = "data-log-box">
                  <p>
                    Do you already have an account?{" "}
                    <a href="/login">Login here</a>
                  </p>
                </div>
              </div>
              <div className="data-Field-red">
                {user && <p className="no-validate">{user.noValidate}</p>}
                {succes && <p className="validate">Usuario Creado</p>}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
