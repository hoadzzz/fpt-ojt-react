import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productData from "../../../assets/fake-data/products";
import { themeContext } from "../../../context/ThemeContext";
import { remove } from "../../../redux/productModal/productModalSlice";
import { productSlugSelector } from '../../../redux/selectors';
import Button from "../../atoms/Button/Button";
import ProductView from "../ProductView/ProductView";

const ProductViewModal = () => {
  const productSlug = useSelector(productSlugSelector);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content"
        style={{
          background: darkMode ? 'var(--gray)' : 'white',
          color: darkMode ? 'white' : 'black'
        }}
      >
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
