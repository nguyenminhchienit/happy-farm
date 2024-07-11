/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo3.svg";
import SearchIcon from "@mui/icons-material/Search";
// import Select from "../selectDrop/select";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconHeart from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";

import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import Nav from "./nav/nav";
import MenuIcon from "@mui/icons-material/Menu";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Select from "../selectDrop/select";
import axios from "axios";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getCartUser } from "../../api/User";

const Header = (props) => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenAccDropDown, setisOpenAccDropDown] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isopenSearch, setOpenSearch] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const headerRef = useRef();
  const searchInput = useRef();

  const [categories, setcategories] = useState([
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
  ]);

  const countryList = [];
  const [cart, setCart] = useState(0);

  useEffect(() => {
    getCountry("https://open.oapi.vn/location/provinces?page=0&size=30");
    getCartUser(dataObject?.idUser).then((res) => {
      setCart(res.data);
    });
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countryList.push(item.name);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

  const storedData = localStorage.getItem("user");
  const dataObject = storedData ? JSON.parse(storedData) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const [navMobile, setNavMobile] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setNavMobile(!navMobile);
  };

  const [open, setOpen] = useState(false);
  const handleDropdown = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <div className="headerWrapper" ref={headerRef}>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2 part1 d-flex align-items-center">
                <Link to="/">
                  <img src={Logo} className="logo" alt="" />
                </Link>
                {windowWidth < 992 && (
                  <div className="ml-auto flex items-center">
                    {/* <div className="navbarToggle mr-0">
                      <SearchIcon />
                    </div> */}
                    <ul className="list list-inline mb-0 headerTabs pl-0 mr-4">
                      <li className="list-inline-item">
                        <span>
                          <Link to={"/cart"}>
                            <img src={IconCart} alt="" />
                            <span className="badge bg-success rounded-circle">
                              {cart?.length}
                            </span>
                          </Link>
                        </span>
                      </li>
                    </ul>
                    <div className="navbarToggle mr-2 relative">
                      <div>
                        {navMobile ? (
                          <ul className="absolute top-[10px] right-[-50px] w-[250px] text-5xl bg-white justify-end">
                            <li>
                              <Button>
                                <Link to={"/"} className="text-gray-800">
                                  Trang chủ
                                </Link>
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <Link
                                  to={"/phan-bon"}
                                  className="text-gray-800"
                                >
                                  Phân bón
                                </Link>
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <Link
                                  to={"/bai-viet"}
                                  className="text-gray-800"
                                >
                                  Bài viết
                                </Link>
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <Link to={"/lien-he"} className="text-gray-800">
                                  Liên hệ
                                </Link>
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <Link
                                  to={"/gia-nong-san"}
                                  className="text-gray-800"
                                >
                                  Giá nông sản
                                </Link>
                              </Button>
                            </li>
                            <li className="text-gray-800 relative">
                              <Button>
                                <div
                                  className="text-gray-800 flex items-center gap-1"
                                  onClick={(e) => handleDropdown(e)}
                                >
                                  <span className="text-gray-800">
                                    Hướng dẫn
                                  </span>
                                  <div>
                                    <KeyboardArrowDownIcon
                                      style={{ fill: "#0072ea" }}
                                    />
                                  </div>
                                </div>
                              </Button>
                              {open && (
                                <ul className="absolute bg-white min-w-52">
                                  <li className="p-2">
                                    <Button>
                                      <Link to={"/"} className="text-gray-800">
                                        Hình thức mua hàng
                                      </Link>
                                    </Button>
                                  </li>
                                  <li className="p-2">
                                    <Button>
                                      <Link to={"/"} className="text-gray-800">
                                        Hình thức thanh toán
                                      </Link>
                                    </Button>
                                  </li>
                                  <li className="p-2">
                                    <Button>
                                      <Link to={"/"} className="text-gray-800">
                                        Hướng dẫn mua hàng
                                      </Link>
                                    </Button>
                                  </li>
                                  <li className="p-2">
                                    <Button>
                                      <Link to={"/"} className="text-gray-800">
                                        Quy trình vận chuyển
                                      </Link>
                                    </Button>
                                  </li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        ) : (
                          <MenuIcon onClick={(e) => handleToggle(e)} />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/*headerSearch start here */}
              <div className="col-sm-5 part2">
                <div
                  className={`headerSearch d-flex align-items-center ${
                    isopenSearch === true ? "open" : ""
                  }`}
                >
                  {windowWidth < 992 && (
                    <div className="closeSearch">
                      <ArrowBackIosIcon />
                    </div>
                  )}
                  <Select
                    data={categories}
                    placeholder={"Danh mục"}
                    icon={false}
                  />

                  <div className="search">
                    <input
                      type="text"
                      placeholder="Search for items..."
                      ref={searchInput}
                    />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/*headerSearch start here */}

              <div className="col-sm-5 d-flex align-items-center part3 res-hide">
                <div className="ml-auto d-flex align-items-center">
                  <div className="countryWrapper">
                    <Select
                      data={countryList}
                      placeholder={"Vị trí của bạn"}
                      icon={
                        <LocationOnOutlinedIcon style={{ opacity: "0.5" }} />
                      }
                    />
                  </div>
                  <ClickAwayListener
                    onClickAway={() => setisOpenDropDown(false)}
                  >
                    <ul className="list list-inline mb-0 headerTabs flex align-items-center">
                      <li className="list-inline-item">
                        <span>
                          <img src={IconCompare} alt="" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          {/* So sánh */}
                        </span>
                      </li>

                      <li className="list-inline-item">
                        <span>
                          <a href={"/cart"}>
                            {" "}
                            <img src={IconCart} alt="" />
                            <span className="badge bg-success rounded-circle">
                              {cart?.length}
                            </span>
                            {/* Giỏ hàng */}
                          </a>
                        </span>
                      </li>

                      {dataObject ? (
                        <li className="list-inline-item ">
                          <span
                            onClick={() => setisOpenDropDown(!isOpenDropDown)}
                          >
                            <img src={IconUser} alt="" />
                            {/* Tài khoản */}
                          </span>

                          {!isOpenDropDown === false && (
                            <ul className="dropdownMenu ">
                              <li>
                                <Button className="align-items-center">
                                  <Person2OutlinedIcon /> Tài khoản
                                </Button>
                              </li>
                              <li>
                                <Button>
                                  <LocationOnOutlinedIcon /> Đơn hàng
                                </Button>
                              </li>

                              <li onClick={handleLogout}>
                                <Button>
                                  <LogoutOutlinedIcon /> Đăng xuất
                                </Button>
                              </li>
                            </ul>
                          )}
                        </li>
                      ) : (
                        <li className="list-inline-item">
                          <a href={"/signIn"}>
                            <Button className="btn btn-g">Sign In</Button>
                          </a>
                        </li>
                      )}
                    </ul>
                  </ClickAwayListener>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Nav data={props.data} openNav={isOpenNav} />
      </div>
    </>
  );
};

export default Header;
