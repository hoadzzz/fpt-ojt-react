import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import { useFormik } from "formik";
import * as yup from "yup";

import { auth, logout, registerWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { login } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastNameNam: yup
    .string("Enter your last name")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minium 6 charaters length")
    .required("Password is required"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const dispatch = useDispatch();

  const [user] = useAuthState(auth);

  const history = useHistory();

  const handleSubmitForm = () => {
    const name = formik.values.firstName + " " + formik.values.lastName;

    registerWithEmailAndPassword(
      name,
      formik.values.email,
      formik.values.password
    );
  };

  useEffect(() => {
    if (user) {
      login({
        name: user.displayName,
        uid: user.uid,
        email: user.email,
        phone: user.phone,
        address: user.address,
      });
      history.replace("/login");
    }
  }, [user]);

  return (
    <div className="signup_frame">
      <div className="signup">
        <h3 className="title-signup">Sign Up</h3>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            className="form-control"
            placeholder="First name"
          />
          <p className="form-message form-message--error">
            {formik.touched.firstName && formik.errors.firstName}
          </p>
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            className="form-control"
            placeholder="Last name"
          />
          <p className="form-message form-message--error">
            {formik.touched.lastName && formik.errors.lastName}
          </p>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter email"
          />
          <p className="form-message form-message--error">
            {formik.touched.email && formik.errors.email}
          </p>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="form-control"
            placeholder="Enter password"
          />
          <p className="form-message form-message--error">
            {formik.touched.password && formik.errors.password}
          </p>
        </div>
        <Button size="sm" onClick={handleSubmitForm}>
          Đăng Kí
        </Button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
