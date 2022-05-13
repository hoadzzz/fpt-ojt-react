import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { themeContext } from "../../../context/ThemeContext";
import { set } from "../../../redux/productModal/productModalSlice";
import numberWithCommas from "../../../utils/numberWithCommas";
import Button from "../../atoms/Button/Button";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="product-card" >
      <Link to={`/catalog/${props.type}/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price" style={{
          color: darkMode ? "white" : "#242D49",
        }}>
          {numberWithCommas(props.price)}
          <span className="product-card__price__old">
            <del>{numberWithCommas(399000)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          onClick={() => dispatch(set(props.slug))}
        >
          chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
