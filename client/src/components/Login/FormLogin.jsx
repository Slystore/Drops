import React, { useState } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { userLogin } from "../../redux/users/userActions";
import {GoogleLogin} from 'react-google-login'
import { useHistory } from "react-router";
export default function FormLogin() {

   const responseGoogle = async (response)=>{
     try{
       console.log('a ver la response',response)

     }catch(err){
       console.log('rompo en response google',err)
     }
   }
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
            <GoogleLogin 
                      className="BtnFace"
                      clientId="867381968121-4njd3q5va0695tdivgirjl5tka5n7fqo.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
          </Form>
        )}
        
      </Formik>
    </div>
  );
}
