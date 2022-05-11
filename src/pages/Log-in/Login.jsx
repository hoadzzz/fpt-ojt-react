import { Box, Button as ButtonMUI, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Helmet from "../../components/templates/Helmet/Helmet";
import { auth, signInWithGoogle } from "../../firebase";
import { login } from "../../redux/user/userSlice";

const StyledButtonMUI = styled(ButtonMUI)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: "12px",
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minium 6 charaters length")
    .required("Password is required"),
});

const Login = () => {
  const history = useHistory();
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSignIn();
    },
  });
  useEffect(() => {
    if (user) {
      console.log(user.phoneNumber);
      dispatch(
        login({
          name: user.displayName,
          uid: user.uid,
          email: user.email,
          phone: user.phoneNumber,
          address: user.address,
          photoURL: user.photoURL
        })
      );
      history.replace("/");
    }
  }, [user]);

  const handleSignIn = () => {
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    );
  };

  return (
    <Helmet title="Đăng nhập">
      <div className="login_frame">
        <div className="login">
          <form>
            <h3 className="title-signup">Sign In</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="form-control"
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
              <p className="form-message--error">
                {formik.touched.password && formik.errors.password}
              </p>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marinBottom="20px"
                >
                  <Typography variant="span" component="p">
                    Remember me
                  </Typography>
                  <Typography variant="span" component="p">
                    Forgot your password
                  </Typography>
                </Box>
              </div>
            </div>

            <StyledButtonMUI
              variant="contained"
              fullWidth
              onClick={formik.handleSubmit}
            >
              Đăng nhập
            </StyledButtonMUI>
            <Box textAlign="center">
              <Typography variant="h6" component="p" marginTop={1}>
                or
              </Typography>
              <StyledButtonMUI
                variant="contained"
                fullWidth
                onClick={signInWithGoogle}
              >
                Login with Google
              </StyledButtonMUI>
              <Typography marginY={2}>
                Bạn chưa có tài khoản? <Link to="/signup">Đăng kí</Link>
              </Typography>
            </Box>
          </form>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
