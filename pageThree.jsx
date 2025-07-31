import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const ProfileImage = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (values, { setFieldValue }) => {
    setFieldValue("profileImage", selectedFile);
    props.next(values);
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {(values) => (
        <Form>
          <p>Profile picture:</p>
          <input
            id="profileImage"
            name="profileImage"
            type="file"
            onChange={handleImageChange}
          />
          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileImage;
