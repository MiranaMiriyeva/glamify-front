import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Login/index.scss";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      const response = await fetch(
        "https://glamify-back.onrender.com/users/register",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(values),
        }
      );

      const data = await response.json(); // Response'u JSON'a çevir
      if (response.ok) {
        toast("Successfully registered");
        navigate("/login"); // Login sayfasına yönlendir
      } else {
        toast.error(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An error occurred during registration");
    }
  };

  return (
    <div className="login_register">
      <Helmet>
        <title> Glamify | Register </title>
      </Helmet>
      <div className="login_register_container">
        <h2>Register</h2>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string()
              .max(15, "Must be 20 characters or less")
              .required("Required"),
            password: Yup.string()
              .max(20, "Must be 30 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleRegister(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <Field name="username" type="text" placeholder="Username" />
            <div className="error_msg">
              <ErrorMessage name="username" />
            </div>

            <Field name="email" type="email" placeholder="Email" />
            <div className="error_msg">
              <ErrorMessage name="email" />
            </div>

            <Field name="password" type="password" placeholder="Password" />
            <div className="error_msg">
              <ErrorMessage name="password" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <div className="navigator">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
