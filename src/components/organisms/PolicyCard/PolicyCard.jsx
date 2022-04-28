import React from "react";
import PropTypes from "prop-types";

import "./PolicyCard.css";
import { useSelector } from "react-redux";

const PolicyCard = (props) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className="policy-card"
      style={{
        color: darkMode ? "white" : "black",
      }}
    >
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
