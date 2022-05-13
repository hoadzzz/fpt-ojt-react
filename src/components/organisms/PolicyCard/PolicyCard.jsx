import PropTypes from "prop-types";
import React, { useContext } from "react";
import { themeContext } from "../../../context/ThemeContext";

const PolicyCard = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="policy-card" style={{
      color: darkMode ? "white" : "black",
    }}>
      <div className="policy-card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">{props.name}</div>
        <div className="policy-card__info__description">
          {props.description}
        </div>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PolicyCard;
