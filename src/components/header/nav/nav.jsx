/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import GridViewIcon from "@mui/icons-material/GridView";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="mx-5">
      <div className="mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="">
            <nav
              className={`md:flex md:justify-end ${
                navOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex justify-center md:justify-end space-x-4">
                <li>
                  <Button onClick={toggleNav}>
                    <Link to={"/"} className="text-gray-800">
                      Trang chủ
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button onClick={toggleNav}>
                    <Link to={"/phan-bon"} className="text-gray-800">
                      Phân bón
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button onClick={toggleNav}>
                    <Link to={"/bai-viet"} className="text-gray-800">
                      Bài viết
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button onClick={toggleNav}>
                    <Link to={"/lien-he"} className="text-gray-800">
                      Liên hệ
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button onClick={toggleNav}>
                    <Link to={"/gia-nong-san"} className="text-gray-800">
                      Giá nông sản
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>

            <div className="md:hidden text-center mt-4">
              <Button onClick={toggleNav} className="bg-green-500 text-white">
                <GridViewIcon />
              </Button>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center ml-auto">
              <span className="mr-2">
                <HeadphonesOutlinedIcon />
              </span>
              <div className="info">
                <h3 className="text-green-500 mb-0">0392845906</h3>
                <p className="mb-0 text-sm">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
