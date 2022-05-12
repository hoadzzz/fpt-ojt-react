import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthProvider from "../../../context/AuthContext";
import Routes from "../../../routes/Routes";
import FloatButton from "../../atoms/FloatButton/FloatButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductViewModal from "../ProductViewModal/ProductViewModal";

const Layout = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route
          render={(props) => (
            <div>
              <Header {...props} />
              <div className="container">
                <div className="main">
                  <Routes />
                </div>
              </div>
              <FloatButton />
              <Footer />
              <ProductViewModal />
            </div>
          )}
        />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Layout;
