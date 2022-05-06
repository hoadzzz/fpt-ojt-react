import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import productsData from "../../assets/fake-data/products";
import Button from "../../components/atoms/Button/Button";
import Helmet from "../../components/templates/Helmet/Helmet";
import { set } from "../../redux/product-modal/productModalSlice";

const Search = (props) => {
    const keyword = props.match.params.keyword;
    const products = productsData.getAllProducts().filter(product => {
        return product.title.toLowerCase().includes(keyword.toLowerCase());
    });
    const dispatch = useDispatch();

    return (
        <Helmet title="Tìm Kiếm">
            <h1 className="page-title">Tìm kiếm</h1>
            <div className="search-result">
                {products.map((product, key) => {
                    return (
                        <div key={key} className="search-item">
                            <div className="search-item-img">
                                <img src={product.image02} alt={product.title} />
                            </div>
                            <div className="search-item-info">
                                <Link to={`/catalog/${product.slug}`}>
                                    <div className="search-item-name">
                                        {product.title}
                                    </div>
                                </Link>
                                <div className="search-item-price">
                                    Giá: {product.price} đ
                                </div>
                                <div className="search-item-description" >
                                    {product.description}
                                </div>
                            </div>
                            <div className="search-item-btn">
                                <Button
                                    size="sm"
                                    icon="bx bx-cart"
                                    animate={true}
                                    onClick={() => dispatch(set(product.slug))}
                                >
                                    chọn mua
                                </Button>
                            </div>
                        </div>
                    )

                })}
            </div>

        </Helmet>

    )
}

export default Search