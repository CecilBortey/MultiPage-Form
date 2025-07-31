import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PersonalInfoValidationSchema = Yup.object({
  surName: Yup.string().required(),
  otherNames: Yup.string().required(),
  dob: Yup.date().required(),
  gender: Yup.string().required(),
});

const PersonalInfo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Formik
      validationSchema={PersonalInfoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <p>Surname:</p>
          <Field name="surName" />
          <ErrorMessage name="surName" />

          <p>Other Names:</p>
          <Field name="otherNames" />
          <ErrorMessage name="otherNames" />

          <p>Date of Birth:</p>
          <Field type="date" name="dob" />
          <ErrorMessage name="dob" />

          <div className="gender">
            <p>Gender:</p>
            <div className="radia">
              <div>
                <label>
                  <Field name="gender" type="radio" value="female" /> Female
                </label>
              </div>

              <div>
                <label>
                  <Field name="gender" type="radio" value="male" /> Male
                </label>
              </div>
            </div>
            <ErrorMessage name="gender" />
          </div>

          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfo;
