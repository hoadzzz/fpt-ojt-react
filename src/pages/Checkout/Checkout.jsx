import React, { useState, useEffect, useReducer } from "react";

import Helmet from "../../components/templates/Helmet/Helmet";

import Button from "../../components/atoms/Button/Button";

import productData from "../../assets/fake-data/products";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
}));

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Checkout">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="p" component="p" className="title">
            Thông tin đơn hàng
          </Typography>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Họ và tên"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Số điện thoại"
            />
          </div>
          <FormControl sx={{ m: "15px 0px" }} fullWidth>
            <InputLabel id="demo-simple-select-label">Tỉnh thành</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tỉnh thành"
              //   onChange={(option) => onCitySelect(option)}
              name="city"
              //   value={address.city}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* {cityOptions.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))} */}
            </Select>
          </FormControl>
          <FormControl sx={{ m: "15px 0px" }} fullWidth>
            <InputLabel id="address-district">Quận huyện</InputLabel>
            <Select
              //   value={address.district}
              name="district"
              labelId="address-district"
              id="address-district"
              //   defaultValue={selectedDistrict}
              // value={selectedDistrict}
              label="address-district"
              //   onChange={(option) => onDistrictSelect(option)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* {districtOptions.map((item) => (
                    <MenuItem key={item.Id} value={item.Id}>
                      {item.Name}
                    </MenuItem>
                  ))} */}
            </Select>
          </FormControl>
          <FormControl sx={{ m: "15px 0px" }} fullWidth>
            <InputLabel id="address-ward">Phường xã</InputLabel>
            <Select
              name="ward"
              labelId="address-ward"
              id="address-ward"
              //   value={address.ward}
              label="address-district"
              //   onChange={(option) => {
              //     console.log(option);
              //     onWardSelect(option);
              //   }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* {districtOptions.map((item) => (
                    <MenuItem key={item.Id} value={item.Id}>
                      {item.Name}
                    </MenuItem>
                  ))} */}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ padding: " 0 20px" }}>
            <Typography variant="p" component="p" className="title">
              Vận chuyển
            </Typography>
            <FormControl>
              <RadioGroup name="fee-delivery">
                <FormControlLabel
                  control={<Radio defaultChecked />}
                  label="Miễn phí vận chuyển"
                />
              </RadioGroup>
            </FormControl>
            <Typography variant="p" component="p" className="title">
              Thanh toán
            </Typography>
            <FormControl>
              <RadioGroup name="payment-method">
                <FormControlLabel
                  value="VNPAY-QR"
                  control={<Radio />}
                  label="Thanh toán qua VNPAY-QR"
                />
                <FormControlLabel
                  value="VNPAY"
                  control={<Radio />}
                  label="Thanh toán qua VNPAY"
                />
                <FormControlLabel
                  value="MoMo"
                  control={<Radio />}
                  label="Thanh toán qua Ví MoMo"
                />
                <FormControlLabel
                  value="COD"
                  control={<Radio />}
                  label="Thanh toán khi giao hàng (COD)"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="p" component="p" className="title">
            {`Đơn hàng ${cartProducts.length} sản phẩm`}
          </Typography>
          {cartProducts.map((item, index) => (
            <StyledCard>
              <Badge badgeContent={item.quantity} color="primary">
                <CardMedia
                  component="img"
                  image={item.product.image01}
                  alt={item.product.title}
                  className="card-item"
                  height={50}
                />
              </Badge>
              <Typography variant="p" component="p">
                {item.product.title}
              </Typography>
              <Typography variant="p" component="p">
                {item.product.price * item.quantity}
              </Typography>
            </StyledCard>
          ))}

          <Box mt={2}>
            <Button size="sm">Đặt hàng</Button>
          </Box>
        </Grid>
      </Grid>
    </Helmet>
  );
};

export default Checkout;
