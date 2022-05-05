import React from 'react';
<<<<<<< HEAD
//import productsData from "../../assets/fake-data/products";
//import SearchBox from "../../components/organisms/SearchBox/SearchBox";
=======
import Helmet from "../../components/templates/Helmet/Helmet";
import { Link } from "react-router-dom";
import productsData from "../../assets/fake-data/products";
>>>>>>> a0ea5ef9e5c3c3160299fce5c8d8524a7b6f6bb3

const Search = (props) => {
    const keyword = props.match.params.keyword;
    const products = productsData.getAllProducts().filter(product => {
        return product.title.toLowerCase().includes(keyword.toLowerCase());
    })

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
                                <div className="search-item-description">
                                    {product.description}
                                </div>
                            </div>
                            <div className="search-item-btn">
                                <button className="btn-buy">Mua ngay</button>
                            </div>
                        </div>
                    )

                })}
            </div>

        </Helmet>

    )
}

export default Search