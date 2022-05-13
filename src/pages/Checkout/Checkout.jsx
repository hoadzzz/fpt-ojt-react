import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productData from "../../assets/fake-data/products";
import Button from "../../components/atoms/Button/Button";
import Helmet from "../../components/templates/Helmet/Helmet";
import {
  selectedCity,
  selectedDistrict,
  selectedWard,
} from "../../redux/location/locationSlice";
import { cartItemsSelector, locationSelector } from "../../redux/selectors.js";
import numberWithCommas from "../../utils/numberWithCommas";

const StyledCard = styled(Card)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  marginTop: "15px",
}));

const StyledMethodPayMent = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
}));

const styleInput = {
  color: "var(--blue)",
  backgroundColor: "white",
  borderRadius: "5px",
  fontSize: "16px",
  paddingLeft: "5px",
  paddingRight: "5px",
};
const paymentMethods = [
  {
    value: "VNPAY-QR",
    label: "Thanh toán qua VNPAY-QR",
    image: "https://bizweb.dktcdn.net/assets/themes_support/vnpayqr-icon.png",
  },
  {
    value: "VNPAY",
    label: "Thanh toán qua VNPAY",
    image:
      "https://bizweb.dktcdn.net/assets/themes_support/payment_icon_vnpay.png",
  },
  {
    value: "MoMo",
    label: "Thanh toán qua Ví MoMo",
    image: "https://bizweb.dktcdn.net/assets/admin/images/logomm1.png?v=1",
  },
];

const style = {
  backgroundColor: "white",
};

const Checkout = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);
  const location = useSelector(locationSelector);
  const cartProducts = productData.getCartItemsInfo(cartItems.products);

  const [paymentMethod, setPaymentMethod] = useState("VNPAY-QR");

  const handleChangePaymentMethod = (event) =>
    setPaymentMethod(event.target.value);

  const totalPrice = cartItems.products.reduce(
    (total, item) => total + Number(item.quantity) * Number(item.price),
    0
  );

  return (
    <Helmet title="Thanh toán">
      <Grid container spacing={2} marginTop={15}>
        <Grid item xs={4}>
          <Typography
            variant="p"
            component="p"
            marginBottom={2}
            fontSize={20}
            fontWeight={600}
          >
            Thông tin đơn hàng
          </Typography>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Họ và tên"
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Số điện thoại"
              style={{ fontSize: "16px" }}
            />
          </div>
          <FormControl sx={{ m: "15px 0px" }} fullWidth style={style}>
            <InputLabel
              id="demo-simple-select-label"
              className="c-inputLabel"
              style={styleInput}
            >
              Tỉnh thành
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tỉnh thành"
              onChange={(event) => {
                dispatch(selectedCity(event.target.value));
              }}
              value={location.address.city}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {location.cityOptions.map((item) => (
                <MenuItem key={item.Id} value={item.Name}>
                  {item.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: "15px 0px" }} fullWidth style={style}>
            <InputLabel id="address-district" style={styleInput}>
              Quận huyện
            </InputLabel>
            <Select
              value={location.address.district}
              name="district"
              labelId="address-district"
              id="address-district"
              label="address-district"
              onChange={(event) =>
                dispatch(selectedDistrict(event.target.value))
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {location.districtOptions.map((item) => (
                <MenuItem key={item.Id} value={item.Name}>
                  {item.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: "15px 0px" }} fullWidth style={style}>
            <InputLabel id="address-ward" style={styleInput}>
              Phường xã
            </InputLabel>
            <Select
              name="ward"
              labelId="address-ward"
              id="address-ward"
              label="address-district"
              value={location.address.ward}
              onChange={(event) => dispatch(selectedWard(event.target.value))}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {location.wardOptions.map((item) => (
                <MenuItem key={item.Id} value={item.Name}>
                  {item.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ padding: " 0 20px" }}>
            <Typography
              variant="p"
              component="p"
              marginBottom={2}
              fontSize={20}
              fontWeight={600}
            >
              Vận chuyển
            </Typography>
            <FormControl>
              <RadioGroup name="fee-delivery">
                <FormControlLabel
                  control={<Radio checked={true} />}
                  label="Miễn phí vận chuyển"
                />
              </RadioGroup>
            </FormControl>
            <Typography
              variant="p"
              component="p"
              marginBottom={2}
              marginTop={2}
              fontSize={20}
              fontWeight={600}
            >
              Thanh toán
            </Typography>
            <FormControl fullWidth>
              <RadioGroup
                name="payment-method"
                value={paymentMethod}
                onChange={handleChangePaymentMethod}
              >
                {paymentMethods.map((item, index) => (
                  <StyledMethodPayMent key={index}>
                    <FormControlLabel
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                      style={{ fontSize: "16px" }}
                    />
                    <img src={item.image} alt="" height="auto" width="52" />
                  </StyledMethodPayMent>
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Typography
            variant="p"
            component="p"
            marginBottom={2}
            fontSize={20}
            fontWeight={600}
          >
            {`Đơn hàng ${cartProducts.length} sản phẩm`}
          </Typography>
          {cartProducts.map((item, index) => (
            <StyledCard key={index}>
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
              <Typography variant="p" component="p" fontWeight={600}>
                {numberWithCommas(item.product.price * item.quantity)}
              </Typography>
            </StyledCard>
          ))}
          <Box
            mt={2}
            mb={2}
            fontSize={20}
            display="flex"
            justifyContent="space-between"
          >
            <Typography
              variant="p"
              component="p"
              fontWeight={600}
              align={"right"}
            >
              Thành tiền
            </Typography>
            <Typography
              variant="p"
              component="p"
              fontWeight={600}
              align={"right"}
              color="primary"
            >
              {numberWithCommas(totalPrice)}
            </Typography>
          </Box>
          <Button size="sm" mt>
            Đặt hàng
          </Button>
        </Grid>
      </Grid>
    </Helmet>
  );
};

export default Checkout;
