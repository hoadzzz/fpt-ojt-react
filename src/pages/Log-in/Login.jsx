import { Box, Button as ButtonMUI, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Helmet from "../../components/templates/Helmet/Helmet";
import { auth, db } from "../../firebase/config";
import { getDocData, googleProvider } from "../../firebase/service";
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
  let [user] = useAuthState(auth);
  const dispatch = useDispatch();
  let data;

  if (user != null) {
    data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      firstName: user.displayName != null ? user.displayName.split(" ")[0] : '',
      lastName: user.displayName != null ? user.displayName.substring(user.displayName.indexOf(' '), user.displayName.length) : '',
      phoneNumber: user.phoneNumber != null ? user.phoneNumber : '',
      photoURL: user.photoURL != null ? user.photoURL : '',
      city: user.city != null ? user.city : '',
      coverURL: user.coverURL != null ? user.coverURL : ''
    };
  }

  async function handleGoogleSignIn() {
    if (user == null) {
      const res = await signInWithPopup(auth, googleProvider);
      user = res.user;
      data = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        firstName: user.displayName.split(" ")[0],
        lastName: user.displayName.substring(user.displayName.indexOf(' '), user.displayName.length),
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        city: '',
        coverURL: ''
      };
    }

    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), data);
      dispatch(login(data));
    }
    else {
      const querySnapshot = await getDocs(collection(db, "users"));
      let severData;
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === user.uid) {
          severData = doc.data();
          return;
        }
      });
      dispatch(login(severData));
    }

    history.replace("/");
  }

  useEffect(() => {
    if (user) {
      dispatch(login(data));
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

  async function handleSignIn() {
    console.log(formik.values.email);
    const res = await signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    );
    if (user == null) {
      user = res.user;
      const data = await getDocData(user);
      dispatch(login(data));
    }
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
                onClick={(e) => handleGoogleSignIn()}
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
