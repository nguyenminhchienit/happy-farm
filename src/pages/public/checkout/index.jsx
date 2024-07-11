/* eslint-disable no-unused-vars */
import { Button, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useEffect, useState } from "react";
import { apiCheckOut, getCartUser } from "../../../api/User";
import { formatPrice } from "../../../utils/formatPrice";
import { apiCheckCode } from "../../../api/Voucher";
import { apiGetPaymentMethod } from "../../../api/Cart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formFields, setformFields] = useState({
    address: "",
    phoneNumber: "",
    code: {},
    paymentMethod: "",
    idUserOrder: "",
    idVoucher: "",
  });
  const [discount, setDiscount] = useState(1);
  const navigate = useNavigate();

  const placeOrder = () => {
    if (
      formFields.address == "" ||
      formFields.paymentMethod == "" ||
      formFields.phoneNumber == ""
    ) {
      alert("All fields Required");
      return false;
    }

    if (dataObject?.idUser) {
      formFields.idUserOrder = dataObject?.idUser;
    }

    const formData = new FormData();

    for (const key in formFields) {
      formData.append(key, formFields[key]);
    }

    apiCheckOut(dataObject?.idUser, formData).then((response) => {
      if (response.status) {
        navigate("/thanks");
      }
    });
  };

  const changeInput = (e) => {
    const { name, value } = e.target;

    setformFields(() => ({
      ...formFields,
      [name]: value,
    }));
  };

  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);

  const storedData = localStorage.getItem("user");
  const dataObject = storedData ? JSON.parse(storedData) : null;

  useEffect(() => {
    getCartUser(dataObject?.idUser).then((response) => {
      setCartItems(response.data);
    });
    apiGetPaymentMethod().then((response) => {
      setPaymentMethod(response.data);
    });
  }, []);

  const handleSales = () => {
    apiCheckCode(formFields.code)
      .then((response) => {
        setDiscount(response?.data?.discountPercent);
        formFields.idVoucher = response?.data?.idVoucher;
      })
      .catch((error) => {
        console.error("Error fetching all fertilizers:", error);
      });
  };

  return (
    <section className="cartSection mb-5 checkoutPage mt-[200px]">
      <div className="mx-5">
        <form>
          <div className="row">
            <div className="col-md-8">
              <div className="form w-75 mt-4 shadow">
                <h3>Shopping Address</h3>
                <div className="form-group mb-3 mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Enter Full Name"
                    variant="outlined"
                    className="w-100"
                    value={formFields.name}
                    onChange={changeInput}
                    name="name"
                  />
                </div>

                <div className="form-group mb-3">
                  <TextField
                    id="outlined-basic"
                    label="Enter Phone Number."
                    variant="outlined"
                    className="w-100"
                    value={formFields.phoneNumber}
                    onChange={changeInput}
                    name="phoneNumber"
                  />
                </div>
                <div className="form-group mb-3">
                  <TextField
                    id="outlined-basic"
                    label="Enter Full Address"
                    variant="outlined"
                    className="w-100"
                    multiline
                    rows={4}
                    value={formFields.address}
                    onChange={changeInput}
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <Select
                    id="outlined-basic"
                    value={formFields.paymentMethod}
                    label="Phương thức thanh toán"
                    onChange={changeInput}
                    name="paymentMethod"
                    variant="outlined"
                    className="w-100"
                  >
                    {paymentMethod?.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item?.idMethod}>
                          {item?.nameMethod}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
              </div>
            </div>

            <div className="col-md-4 cartRightBox pt-4">
              <div className="card p-4 ">
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Tổng tiền</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span className="text-g">
                      {cartItems.length !== 0 &&
                        formatPrice(
                          cartItems
                            .map(
                              (item) =>
                                parseInt(item?.idFertilizer?.price) *
                                item.quantity
                            )
                            .reduce((total, value) => total + value, 0)
                        ) + " VND"}
                    </span>
                  </h3>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Giao hàng</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span>Miễn phí</span>
                  </h3>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="w-60">
                    <TextField
                      id="outlined-basic"
                      label="Mã khuyến mãi"
                      variant="outlined"
                      className="w-100"
                      value={formFields.code}
                      onChange={changeInput}
                      name="code"
                    />
                  </div>
                  <div className="btn btn-success h-[50px] flex justify-center items-center">
                    <h5 className="font-bold" onClick={handleSales}>
                      Áp mã khuyến mãi
                    </h5>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Thành tiền</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span className="text-g">
                      {cartItems.length !== 0 &&
                        formatPrice(
                          discount > 1
                            ? cartItems
                                .map(
                                  (item) =>
                                    parseInt(item?.idFertilizer?.price) *
                                    item.quantity
                                )
                                .reduce((total, value) => total + value, 0) -
                                Math.round(
                                  (cartItems
                                    .map(
                                      (item) =>
                                        parseInt(item?.idFertilizer?.price) *
                                        item.quantity
                                    )
                                    .reduce(
                                      (total, value) => total + value,
                                      0
                                    ) *
                                    discount) /
                                    100
                                )
                            : cartItems
                                .map(
                                  (item) =>
                                    parseInt(item?.idFertilizer?.price) *
                                    item.quantity
                                )
                                .reduce((total, value) => total + value, 0)
                        ) + " VND"}
                    </span>
                  </h3>
                </div>

                <br />
                <Button className="btn-g btn-lg" onClick={placeOrder}>
                  Đặt hàng
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
