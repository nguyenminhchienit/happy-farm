/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useEffect, useState } from "react";
import { getCartUser } from "../../../api/user";
import { formatPrice } from "../../../utils/formatPrice";
import { Input } from "@material-tailwind/react";
import { apiCheckCode } from "../../../api/voucher";

const Checkout = () => {
  const [formFields, setformFields] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    code: "",
  });
  const [discount, setDiscount] = useState(1);

  const placeOrder = () => {
    if (
      formFields.name === "" ||
      formFields.address == "" ||
      formFields.phoneNumber == ""
    ) {
      alert("All fields Required");
      return false;
    }

    const addressInfo = {
      name: formFields.name,
      phoneNumber: formFields.phoneNumber,
      address: formFields.address,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
  };

  const changeInput = (e) => {
    const { name, value } = e.target;

    setformFields(() => ({
      ...formFields,
      [name]: value,
    }));
  };

  const [cartItems, setCartItems] = useState([]);

  const storedData = localStorage.getItem("user");
  const dataObject = storedData ? JSON.parse(storedData) : null;

  useEffect(() => {
    getCartUser(dataObject?.idUser).then((response) => {
      setCartItems(response.data);
    });
  }, []);

  const handleSales = () => {
    apiCheckCode(formFields.code)
      .then((response) => {
        setDiscount(response?.data?.discountPercent);
      })
      .catch((error) => {
        console.error("Error fetching all fertilizers:", error);
      });
  };

  console.log("discount: ", discount);

  return (
    <section className="cartSection mb-5 checkoutPage mt-[200px]">
      <div className="container">
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
                <div className="form-group">
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
                  <h5 className="btn btn-success" onClick={handleSales}>
                    Tính lại
                  </h5>
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
