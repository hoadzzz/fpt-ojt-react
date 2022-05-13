import React, { useState, useEffect } from 'react'
import productData from "../../../assets/fake-data/products";
import { Link, useHistory } from "react-router-dom";

const SearchBox = () => {
    const history = useHistory();
    const [filteredData, setFilteredData] = useState([]);
    const [open, setOpen] = useState(false);
    const handleFilter = (e) => {
        const searchWord = e.target.value;
        const newFilter = productData.getAllProducts().filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilteredData(newFilter);
        setOpen(true);
    }

    useEffect(() => {
        const closeDropDown = e => {
            setOpen(false);
        };
        document.addEventListener('click', closeDropDown);
        return () => document.removeEventListener('click', closeDropDown);
    }, []);

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search/${e.target.value}`);
            e.preventDefault();
        }

    }

    const handleRedirect = () => {
    }

    return (
        <div className="search-container">
            <div className="search-box">
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    onChange={handleFilter}
                    onKeyPress={handleEnter}
                    onKeyUp={handleRedirect}
                ></input>
                <button><i className="bx bx-search"></i></button>
            </div>
            {open && (
                <div className="data-result">
                    {filteredData.slice(0, 15).map((product, key) => {
                        return (
                            <Link to={`/catalog/product/${product.slug}`}>
                                <div className="item" key={key}>
                                    <div className="item-img"><img src={product.image02} alt={product.title}></img></div>
                                    <div className="item-title">{product.title}</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBox