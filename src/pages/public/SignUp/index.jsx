/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./style.css";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button } from "@mui/material";
import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [showLoader, setShowLoader] = useState(false);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
    dob: "",
  });

  const signUp = () => {
    console.log("data: ", formFields);
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(date).toLocaleDateString("vi-VN", options);
  };

  const onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormFields(() => ({
      ...formFields,
      [name]: value,
    }));
  };

  return (
    <div style={{ marginTop: "76px" }}>
      <section className="signIn mb-5">
        <div className="breadcrumbWrapper res-hide">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link to="/">Trang chủ</Link>{" "}
              </li>
              <li>Đăng ký</li>
            </ul>
          </div>
        </div>

        <div className="loginWrapper">
          <div className="card shadow">
            <Backdrop
              sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showLoader}
              className="formLoader"
            >
              <CircularProgress color="inherit" />
            </Backdrop>

            <h3>SignUp</h3>
            <form className="mt-4">
              <div className="form-group mb-4 w-100">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  className="w-100"
                  onChange={onChangeField}
                  value={formFields.email}
                />
              </div>
              <div className="form-group mb-4 w-100">
                <TextField
                  id="username"
                  type="text"
                  name="username"
                  label="Tài khoản"
                  className="w-100"
                  onChange={onChangeField}
                  value={formFields.username}
                />
              </div>
              <div className="form-group mb-4 w-100">
                <TextField
                  id="fullname"
                  type="text"
                  name="fullname"
                  label="Tên đầy đủ"
                  className="w-100"
                  onChange={onChangeField}
                  value={formFields.fullname}
                />
              </div>

              <div className="form-group mb-4 w-100">
                <TextField
                  id="dob"
                  type="date"
                  name="dob"
                  className="w-100"
                  onChange={onChangeField}
                  value={formFields.dob}
                />
              </div>

              <div className="form-group mb-4 w-100">
                <div className="position-relative">
                  <TextField
                    id="password"
                    type={showPassword === false ? "password" : "text"}
                    name="password"
                    label="Password"
                    className="w-100"
                    onChange={onChangeField}
                    value={formFields.password}
                  />
                  <Button
                    className="icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword === false ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </Button>
                </div>
              </div>

              {/* <div className="form-group mb-4 w-100">
                <div className="position-relative">
                  <TextField
                    id="conformPassword"
                    type={showPassword1 === false ? "password" : "text"}
                    name="conformPassword"
                    label="Confirm Password"
                    className="w-100"
                    onChange={onChangeField}
                    value={formFields.conformPassword}
                  />
                  <Button
                    className="icon"
                    onClick={() => setShowPassword1(!showPassword1)}
                  >
                    {showPassword1 === false ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </Button>
                </div>
              </div> */}

              <div className="form-group mt-5 mb-4 w-100">
                <Button className="btn btn-g btn-lg w-100" onClick={signUp}>
                  Đăng ký
                </Button>
              </div>

              <p className="text-center">
                Bạn đã có tài khoản?
                <b>
                  {" "}
                  <Link to="/signIn">Đăng nhập</Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
