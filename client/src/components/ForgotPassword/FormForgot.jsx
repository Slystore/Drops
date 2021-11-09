import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router";
import { userNewPass } from "../../redux/users/userActions";

export default function FormForgot() {
  const history = useHistory();
  return (
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
          <Form>
            <label>New Password</label>
            <Field type="password" name="password" placeHolder="New Password" />
            <ErrorMessage
              name="password"
              component={() => <div>{errors.password}</div>}
            />
            <label>Confirm Password</label>
            <Field  type="password" name="newPassword" placeHolder="New Password" />
            <ErrorMessage
              name="newPassword"
              component={() => <div>{errors.newPassword}</div>}
            />
            <button type="submit">Change</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
