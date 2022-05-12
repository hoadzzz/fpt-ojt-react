import { Box, Button as ButtonMUI, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Helmet from "../../components/templates/Helmet/Helmet";
import { auth, db } from "../../firebase/config";
import { signInWithGoogle } from "../../firebase/service";
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

  async function handleDispatch() {
    const querySnapshot = await getDocs(collection(db, "users"));
    let document, countDoc=0;
    querySnapshot.forEach((doc) => {
      countDoc++;
      if (doc.data().uid == user.uid) {
        document = doc.data();
        if (document != null) {
          dispatch(login({
            ...document,
            displayName: user.displayName,
            firstName: user.displayName.split(" ")[0],
            lastName: user.displayName.substring(user.displayName.indexOf(' '), user.displayName.length),
            photoURL: user.photoURL,
            city: user.city
          }
          ))
        }
      }
    });
    if (document == null) {
      const data = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        firstName: user.displayName.split(" ")[0],
        lastName: user.displayName.substring(user.displayName.indexOf(' '), user.displayName.length),
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        city: ''
      };
      
      setDoc(doc(db, 'users', 'user' + countDoc), data);
      dispatch(login(data))
    }
  }

  useEffect(() => {
    if (user) {
      handleDispatch();
      history.replace("/");
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: () => {
      handleSignIn();
    },
  });

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
