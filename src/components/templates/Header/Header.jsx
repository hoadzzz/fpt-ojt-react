import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useContext, useEffect, useRef } from "react";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/Logo-2.png";
import { themeContext } from "../../../context/ThemeContext";
import { logout as logoutFireBase  } from "../../../firebase/service";
import { userSelector } from '../../../redux/selectors';
import { logout } from "../../../redux/user/userSlice";
import Toggle from "../../atoms/Toggle/Toggle";
import SearchBox from "../../organisms/SearchBox/SearchBox";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ kiện",
    path: "/accessories",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const user = useSelector(userSelector);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logoutHandler = () => {
    logoutFireBase();
    dispatch(logout());
  };

  return (
    <div
      className="header"
      ref={headerRef}
      style={{
        background: darkMode ? "var(--purple)" : "white",
      }}
    >
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${index === activeNav ? "active" : ""
                  }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
            <div className="header__menu__item header__menu__left__item">
              <Toggle />
            </div>
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <form>
                <SearchBox />
              </form>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <div onClick={handleMenu} className="header__menu__item__icon">
                {!user ? (<i className="bx bx-user"></i>) : (<Avatar name={user.name} size="35" round={true} src={user.photoURL}/>)}
              </div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem><Link to="/user-profile">My account</Link></MenuItem>
                {user ? (
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                ) : (
                  <MenuItem >
                    <Link to="/login">Login</Link>
                  </MenuItem>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
