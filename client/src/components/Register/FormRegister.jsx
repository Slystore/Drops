import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { getUserId, userRegister } from "../../redux/users/userActions";
import { useHistory } from "react-router";
import "./formRegisterStyles.css";
import { postNewsletter } from '../../redux/newsletter/newsletterActions';

export default function FormRegister() {
  const history = useHistory();
  const dispatch = useDispatch()
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
              dispatch(getUserId(x.user.id))
              setSucces(true);
              setTimeout(() => {
                dispatch(postNewsletter({email: body.mail}))
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
                "Debe comenzar con mayúscula, sin números ni espacios";
            }
            //apellido
            if (!values.surname) {
              error.surname = "Por favor ingrese un apellido";
            } else if (!/^[a-zA-Z]{3,30}/.test(values.surname)) {
              error.surname = "El apellido debe tener entre 3 y 30 caracteres";
            }
            //mail
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
            } else if (
              !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(values.password)
            ) {
              error.password =
                "La contraseña debe tener mínimo seis caracteres, al menos una letra y un número";
            }
            if (!values.location) {
              error.location = "Por favor ingrese una dirección de vivienda";
            }
            if (!values.phone) {
              error.phone = "Por favor ingrese un número de teléfono";
            } else if (!/^[+]?\d{2} \d{1} \d{2,4} \d{6}/gi.test(values.phone)) {
              error.phone = "El número ingresado no es válido";
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
                    placeholder="Nombre"
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
                    placeholder="Apellido"
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
                    placeholder="Contraseña"
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
                    placeholder="Telefono"
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
                    placeholder="Direccion"
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
                    Ya tienes una cuenta?{" "}<br />
                    <a href="/login">Entra aquí</a>
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
