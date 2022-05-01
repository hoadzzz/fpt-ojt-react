import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductView from "../ProductView/ProductView";
import Button from "../../atoms/Button/Button";
import { remove } from "../../../redux/product-modal/productModalSlice";
import productData from "../../../assets/fake-data/products";
import { useContext } from "react";
import { themeContext } from "../../../Context";

const ProductViewModal = () => {
  const productSlug = useSelector((state) => state.productModal.value);
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
