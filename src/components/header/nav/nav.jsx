/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useContext } from "react";
import "./nav.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setIsOpenNav(props.openNav);
  }, [props.openNav]);

  const closeNav = () => {
    props.closeNav();
    console.log("fdjalkfdaljfldsaj")
  };

  const callapi = ()=>{
    console.log("1231231231231")
  }

  return (
    <>
      {isOpenNav === true && (
        <div className="navbarOverlay" onClick={props.closeNav}></div>
      )}
      <div
        className={`nav d-flex align-items-center ${
          isOpenNav === true && "click"
        }`}
      >
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button className="bg-g text-white catTab res-hide">
                <GridViewIcon /> &nbsp;Danh mục <KeyboardArrowDownIcon />
              </Button>
            </div>

            <div className="col-sm-8 part2 position-static">
              <nav className={isOpenNav === true ? "open" : ""}>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <a onClick={props.closeNav}>Trang chủ</a>
                    </Button>
                  </li>

                  <li className="list-inline-item">
                    <Button onClick={props.closeNav}>
                      <a>Phân bón</a>
                    </Button>
                  </li>

                  <li className="list-inline-item">
                    <Button>
                      <a>Bài viết</a>
                    </Button>
                  </li>

                  <li className="list-inline-item">
                    <Button>
                      <a>Liên hệ</a>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/gia-nong-san"}>
                      <Button>
                        <a>Giá nông sản</a>
                      </Button>
                    </Link>
                  </li>
                </ul>

                {windowWidth < 992 && (
                  <>
                    {true !== "true" && (
                      <div className="pl-3 pr-3">
                        <br />
                        <div>
                          <Button
                            className="btn btn-g btn-lg w-100"
                            onClick={closeNav}
                          >
                            Sign In
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </nav>
            </div>

            <div className="col-sm-2 part3 d-flex align-items-center">
              <div className="phNo d-flex align-items-center ml-auto">
                <span>
                  <HeadphonesOutlinedIcon />
                </span>
                <div className="info ms-3">
                  <h3 className="text-g mb-0">0392845906</h3>
                  <p className="mb-0">24/7 Support Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
