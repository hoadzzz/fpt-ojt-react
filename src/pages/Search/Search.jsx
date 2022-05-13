import React, { useContext } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import productsData from "../../assets/fake-data/products";
import Button from "../../components/atoms/Button/Button";
import Helmet from "../../components/templates/Helmet/Helmet";
import { set } from "../../redux/productModal/productModalSlice";
import { themeContext } from '../../context/ThemeContext';

const Search = (props) => {
    const keyword = props.match.params.keyword;
    const products = productsData.getAllProducts().filter(product => {
        return product.title.toLowerCase().includes(keyword.toLowerCase());
    });
    const dispatch = useDispatch();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Helmet title="Tìm kiếm" style={{
            background: darkMode ? 'var(--gray)' : '',
            color: darkMode ? 'white' : 'black'
        }}>
            <h1 className="page-title">Tìm kiếm</h1>
            <div className="search-result">
                {products.length > 0 ? products.map((product, key) => {
                    return (
                        <div key={key} className="search-item">
                            <div className="search-item-img">
                                <img src={product.image02} alt={product.title} />
                            </div>
                            <div className="search-item-info">
                                <Link to={`/catalog/product/${product.slug}`}>
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

                }) :
                    <p className='search-result-text'>Không tìm thấy kết quả</p>
                }
            </div>

        </Helmet>

    )
}

export default Search