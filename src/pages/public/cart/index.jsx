/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { Button } from "@mui/material";
import QuantityBox from "../../../components/quantityBox";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { deleteCartUser, getCartUser } from "../../../api/User";
import { formatPrice } from "../../../utils/formatPrice";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [update, setUpdate] = useState(false);

  const storedData = localStorage.getItem("user");
  const dataObject = storedData ? JSON.parse(storedData) : null;

  useEffect(() => {
    getCartUser(dataObject?.idUser).then((response) => {
      setCartItems(response.data);
    });
  }, [update]);

  const handleDeleteCart = (item) => {
    if (dataObject) {
      deleteCartUser(dataObject?.idUser, item?.idFertilizer?.idFertilizer).then(
        (response) => {
          setUpdate(!update);
          console.log(response);
        }
      );
    }
  };

  return (
    <div style={{ marginTop: "200px" }}>
      {true && (
        <div className="breadcrumbWrapper mb-4">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Shop</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      )}

      <section className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0">Giỏ hàng của bạn</h1>
                  <p>
                    Có <span className="text-g">{cartItems?.length}</span> sản
                    phẩm trong giỏ hàng của bạn
                  </p>
                </div>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                        <th>Xóa</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartItems.length !== 0 &&
                        cartItems.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td width={"40%"}>
                                <div className="d-flex align-items-center">
                                  <div className="img">
                                    <Link
                                      to={`/product/${item?.idFertilizer?.idFertilizer}`}
                                    >
                                      <img
                                        alt=""
                                        src={
                                          item?.idFertilizer?.imageRepresent +
                                          "?im=Resize=(100,100)"
                                        }
                                        className="w-100"
                                      />
                                    </Link>
                                  </div>

                                  <div className="info pl-4">
                                    <Link to={`/product/${item.id}`}>
                                      <h4>
                                        {item?.idFertilizer?.nameFertilizer}
                                      </h4>
                                    </Link>
                                  </div>
                                </div>
                              </td>

                              <td width="20%">
                                <span>
                                  {formatPrice(item?.idFertilizer?.price) +
                                    " VND"}
                                </span>
                              </td>

                              <td>
                                <QuantityBox
                                  item={item}
                                  cartItems={cartItems}
                                  index={index}
                                  quantity={item?.quantity}
                                />
                              </td>

                              <td>
                                <span className="text-g text-sx">
                                  {formatPrice(
                                    parseInt(item?.idFertilizer?.price) *
                                      parseInt(item.quantity)
                                  ) + " VND"}
                                </span>
                              </td>

                              <td align="center">
                                <span
                                  className="cursor"
                                  onClick={() => handleDeleteCart(item)}
                                >
                                  <DeleteOutlineOutlinedIcon />
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>

              <br />

              <div className="d-flex align-items-center">
                <Link to="/">
                  <Button className="btn-g">
                    <KeyboardBackspaceIcon /> Tiếp tục mua sắp
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col-md-4 cartRightBox">
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

                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Địa chỉ</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    Dĩ An, Bình Dương
                  </h3>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Total</h5>
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

                <br />
                <Link to={"/checkout"}>
                  <Button
                    className="btn-g btn-lg"
                    // onClick={() => {
                    //   context.setCartTotalAmount(
                    //     cartItems.length !== 0 &&
                    //       cartItems
                    //         .map(
                    //           (item) =>
                    //             parseInt(item.price.split(",").join("")) *
                    //             item.quantity
                    //         )
                    //         .reduce((total, value) => total + value, 0)
                    //   );
                    // }}
                  >
                    Proceed To CheckOut
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
