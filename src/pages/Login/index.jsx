import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import AuthContext from "../../context/auth/authContext";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Login = () => {
  const { isAuth, isLogin, setIsLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const response = await fetch(
        "https://glamify-back.onrender.com/users/login",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("galmifytoken", data.token);
        toast("Successfully logged in");
        navigate("/products");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="login_register">
      <Helmet>
        <title> Glamify | Login </title>
      </Helmet>
      <div className="login_register_container">
        <h2>Login</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string()
              .max(15, "Must be 20 characters or less")
              .required("Required"),
            password: Yup.string()
              .max(20, "Must be 30 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleLogin(values);
              setSubmitting(false);
              setIsLogin(true);
            }, 400);
          }}
        >
          <Form>
            <Field name="username" type="text" placeholder="Username" />
            <div className="error_msg">
              <ErrorMessage name="username" />
            </div>

            <Field name="password" type="password" placeholder="Password" />
            <div className="error_msg">
              <ErrorMessage name="password" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <div className="navigator">
          <p>Don't have an account yet?</p>
          <Link to="/register">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
