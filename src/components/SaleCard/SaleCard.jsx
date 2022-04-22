import React from 'react'
import './SaleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const SaleCard = (props) => {
    return (
        <div class="product_card">
            <div class="image_product">
                <img src={props.img} />
            </div>
            <div className='detail'>
                <p class="offer">
                    <img src="https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png" alt="Giảm sốc" width="20"
                        height="20" />
                    <span class="span">Giảm sốc</span>
                </p>
                <h3 class="name">
                    {props.name}
                </h3>
                <p class="status">Online giá rẻ</p>
                <div>
                    <p class="price">{props.price + props.price * 0.4}</p>
                    <span class="percent"> -40%</span>
                </div>
                <strong class="sale">{props.price}</strong>
                <div>
                    <span><FontAwesomeIcon icon={faStar} style={{ color: '#ffa500' }} /></span>
                    <span><FontAwesomeIcon icon={faStar} style={{ color: '#ffa500' }} /></span>
                    <span><FontAwesomeIcon icon={faStar} style={{ color: '#ffa500' }} /></span>
                    <span><FontAwesomeIcon icon={faStar} style={{ color: '#ffa500' }} /></span>
                    <span><FontAwesomeIcon icon={faStarHalf} style={{ color: '#ffa500' }} /></span>
                    <p class="item-rating-total">75</p>
                </div>
            </div>
        </div>
    )
}

export default SaleCard