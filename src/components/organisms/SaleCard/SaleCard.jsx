import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from "../../../context/ThemeContext";
import numberWithCommas from "../../../utils/numberWithCommas";

const SaleCard = (props) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="product_card">
            <Link to={`/catalog/${props.type}/${props.slug}`}>
                <div className="product-card__image"
                    style={{
                        color: darkMode ? "white" : "#333333",
                    }}>
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
            </Link>
            <div className='detail'>
                <p className="offer">
                    <img src="https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png" alt="Giảm sốc" width="20"
                        height="20" />
                    <span className="span">Giảm sốc</span>
                </p>
                <h3 className="name">
                    {props.name}
                </h3>
                <p className="status">Online giá rẻ</p>
                <div style={{
                    color: darkMode ? "white" : "#666",
                }}>
                    <p className="price" >{numberWithCommas(props.price + props.price * 0.4)}</p>
                    <span className="percent"> -40%</span>
                </div>
                <strong className="sale">{numberWithCommas(props.price)}</strong>
                <div>
                    <span><FontAwesomeIcon icon={faStar} style={{ color: '#ffa500' }} /></span>
                    <span><FontAwesomeIcon icon={faStar} style={{ color: '#ffa500' }} /></span>
                    <span><FontAwesomeIcon icon={faStar} style={{ color: '#ffa500' }} /></span>
                    <span><FontAwesomeIcon icon={faStar} style={{ color: '#ffa500' }} /></span>
                    <span><FontAwesomeIcon icon={faStarHalf} style={{ color: '#ffa500' }} /></span>
                    <p className="item-rating-total">75</p>
                </div>
            </div>
        </div>
    )
}

export default SaleCard