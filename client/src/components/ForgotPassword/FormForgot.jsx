import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router";
import { userNewPass } from "../../redux/users/userActions";
import "./forgot.css";
export default function FormForgot() {
  const history = useHistory();
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            password: "",
            newPassword: "",
          }}
          validate={(values) => {
            let errors = {};
            if (!values.password) {
              errors.password = "Por favor completar este campo";
            }
            if (values.newPassword !== values.password) {
              errors.newPassword = "Las contraseñas no coinciden.";
            }
            return errors;
          }}
          onSubmit={async (body, { resetForm }) => {
            let id = localStorage.getItem("userId");
            const x = await userNewPass(body, id);
            if (x.change) {
              localStorage.removeItem("userId");
              history.push("/login");
              resetForm();
            }
          }}
        >
          {({ errors }) => (
            <div className="recovery-content">
              <div className="recoverty-data">
                <Form>
                  <label className="label-recovery">Nueva contraseña</label>

                  <Field
                    className="field-recovery"
                    type="password"
                    name="password"
                    placeHolder="Nueva contraseña"
                  />
                  <ErrorMessage
                 
                    name="password"
                    component={() => <div className="error-recovery">{errors.password}</div>}
                  />
                  <label className="label-recovery">Repetir constraseña</label>
                  <Field
                    className="field-recovery"
                    type="password"
                    name="newPassword"
                    placeHolder="Confirma la contraseña"
                  />
                  <ErrorMessage
                    name="newPassword"
                    component={() => <div className="error-recovery">{errors.newPassword}</div>}
                  />
                  <button className="button-recovery" type="submit">
                    Cambiar
                  </button>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
