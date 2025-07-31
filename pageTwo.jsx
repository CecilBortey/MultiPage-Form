import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AccountInfo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  const accountInfoValidationSchema = Yup.object({
    userName: Yup.string()
      .matches(
        /^[a-zA-Z0-9_]*$/,
        "Username can only contain letters, numbers and underscores"
      )
      .required("Please enter username"),
    email: Yup.string()
      .email("Invalid e-mail format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&#]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });
  return (
    <div>
      <Formik
        validationSchema={accountInfoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form>
            <p>Username:</p>
            <Field name="userName" />
            <ErrorMessage name="userName" />

            <p>E-mail:</p>
            <Field name="email" />
            <ErrorMessage name="email" />

            <p>password:</p>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />

            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
            <button type="submit">Create account</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountInfo;
