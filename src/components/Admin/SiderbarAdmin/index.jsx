/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import logo from "../../../assets/images/logo3.svg";

import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };





  return (
    <div className="max-w-2xl mx-auto">
      <aside className="w-96 h-full" aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto rounded h-[860px] bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 flex flex-col gap-4">
            <li className="border-b-2">
              <Link className="mx-8 mb-8 flex justify-content-between align-align-items-center">
                <img src={logo}></img>
              </Link>
            </li>
            <li>
              <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <Link to={"/admin/dash"}>
                  <span className="ml-3 text-gray-600 font-bold text-xl">
                    Dashboard
                  </span>
                </Link>
              </span>
            </li>

            {/* quản lý phân bón */}
            <li className="flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleDropdown}
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link>
                  <span className="ml-3 text-gray-600 font-bold text-xl">
                    Phân bón
                  </span>
                </Link>
              </button>
              {isOpen && (
                <ul className="pl-10 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/admin/manage-product"
                      className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-xl"
                    >
                      Quản lý sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/add-product"
                      className="flex items-center p-2 text-xl text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Thêm sản phẩm
                    </Link>
                  </li>
                </ul>
              )}
            </li>


            <li className="flex flex-col gap-3">
              <span
                onClick={toggleDropdown1}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <Link>
                  <span className="ml-3 text-gray-600 font-bold text-xl">
                    Người dùng
                  </span>
                </Link>
              </span>
              {isOpen1 && (
                <ul className="pl-10 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/admin/manage-users"
                      className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-xl"
                    >
                      Quản lý người dùng
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/add-user"
                      className="flex items-center p-2 text-xl text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Thêm người dùng
                    </Link>
                  </li>
                </ul>
              )}
            </li>



            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <Link to={"/admin/manage-brand"}>
                  <span className="ml-3 text-gray-600 font-bold text-xl">
                    Thương hiệu
                  </span>
                </Link>
              </a>
            </li>


              {/* quản lý nguồn gốc */}
            <li className="flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleDropdown3}
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                
                <Link>
                  <span className="ml-3 text-gray-600 font-bold text-xl">
                    Nguồn Gốc Xuất Xứ
                  </span>
                </Link>
              </button>
              {isOpen3 && (
                <ul className="pl-10 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/admin/manage-origin"
                      className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-xl"
                    >
                      Quản lý Nguồn Gốc Xuất Xứ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/add-origin"
                      className="flex items-center p-2 text-xl text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Thêm Nguồn Gốc Xuất Xứ
                    </Link>
                  </li>
                </ul>
              )}
            </li>




            <li className="flex flex-col gap-3">
              <span
                onClick={toggleDropdown2}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <span className="ml-3 text-gray-600 font-bold text-xl">
                    Khuyến mãi
                  </span>
                </div>
              </span>
              {isOpen2 && (
                <ul className="pl-10 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/admin/manage-voucher"
                      className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-xl"
                    >
                      Quản lý khuyến mãi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/add-voucher"
                      className="flex items-center p-2 text-xl text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Thêm khuyến mãi
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link to={"/admin/manage-order"}>
                  <span className="ml-3 text-gray-600 font-bold text-xl">
                    Đơn hàng
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
    </div>
  );
};

export default SidebarAdmin;
