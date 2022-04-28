import React from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { toggle } from "../../../redux/theme/themeSlice";

import { useSelector, useDispatch } from "react-redux";

const Toggle = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);
  // console.log(a);
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // theme.dispatch({ type: "toggle" });
    dispatch(toggle());
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
