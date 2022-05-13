import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productData from "../../assets/fake-data/products";
import Button from "../../components/atoms/Button/Button";
import CartItem from "../../components/molecules/CartItem/CartItem";
import Helmet from "../../components/templates/Helmet/Helmet";
import { cartItemsSelector } from "../../redux/selectors";
import numberWithCommas from "../../utils/numberWithCommas";


const Cart = () => {
  const cartItems = useSelector(cartItemsSelector);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems.products)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems.products));
    setTotalPrice(
      cartItems.products.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.products.reduce(
        (total, item) => total + Number(item.quantity),
        0
      )
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Link to="/checkout">
              <Button size="block">Đặt hàng</Button>
            </Link>

            <Link to="/catalog">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
