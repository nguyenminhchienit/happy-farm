/* eslint-disable react/no-unescaped-entities */

import "./footer.css";

import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon5 from "../../assets/images/icon-5.svg";
import Logo from "../../assets/images/logo3.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import paymentImage from "../../assets/images/payment-method.png";

import appStore from "../../assets/images/app-store.jpg";
import googlePlay from "../../assets/images/google-play.jpg";

const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img alt="" src={Icon1} />
                  </span>
                  <div className="info">
                    <h4>Giá tốt nhất</h4>
                    <p>Khi mua hơn 50 đơn hàng</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img alt="" src={Icon2} />
                  </span>
                  <div className="info">
                    <h4>Miễn phí vận chuyển</h4>
                    <p>Khi mua hơn 10 đơn hàng</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img alt="" src={Icon3} />
                  </span>
                  <div className="info">
                    <h4>Khuyễn mãi mỗi ngày</h4>
                    <p>Sản phẩm nổi bật</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img alt="" src={Icon5} />
                  </span>
                  <div className="info">
                    <h4>Chính sách hoàn trả</h4>
                    <p>Dễ dàng tiện lợi </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className=" py-10">
          <div className=" mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/12 mb-8 md:mb-0">
                <a href="/" className="block mb-4">
                  <img alt="" src={Logo} className="w-100" />
                </a>

                <p className="mt-4 flex items-start">
                  <LocationOnOutlinedIcon className="mr-2 mt-1" />
                  <span>
                    <strong>Địa chỉ:</strong> Trường đại học công nghệ TPHCM
                  </span>
                </p>
                <p className="mt-2 flex items-start">
                  <HeadphonesOutlinedIcon className="mr-2 mt-1" />
                  <span>
                    <strong>Số điện thoại:</strong> (+91) - 0392845906
                  </span>
                </p>
                <p className="mt-2 flex items-start">
                  <EmailOutlinedIcon className="mr-2 mt-1" />
                  <span>
                    <strong>Email:</strong> sale@happyfarm.com
                  </span>
                </p>
                <p className="mt-2 flex items-start">
                  <WatchLaterOutlinedIcon className="mr-2 mt-1" />
                  <span>
                    <strong>Hoạt động:</strong> 10:00 - 18:00, T2 - CN
                  </span>
                </p>
              </div>

              <div className="w-full md:w-6/12 mb-8 md:mb-0">
                <div className="flex flex-wrap">
                  <div className="w-1/2 md:w-3/12">
                    <h3 className="font-bold mb-4">Company</h3>
                    <ul className="space-y-2 text-black">
                      <li>
                        <a href="#" className="hover:underline text-black">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Delivery Information
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-1/2 md:w-3/12">
                    <h3 className="font-bold mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Account
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Delivery Information
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-1/2 md:w-3/12">
                    <h3 className="font-bold mb-4">Corporate</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="hover:underline text-black">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Delivery Information
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-1/2 md:w-3/12">
                    <h3 className="font-bold mb-4">Popular</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="hover:underline text-black">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Delivery Information
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline text-black">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/12">
                <h3 className="font-bold mb-4">Install App</h3>
                <p>From App Store or Google Play</p>
                <div className="flex mt-4">
                  <a href="#" className="block mr-2">
                    <img alt="" src={appStore} width={150} />
                  </a>
                  <a href="#" className="block">
                    <img alt="" src={googlePlay} width={150} />
                  </a>
                </div>
                <p className="mt-4">Secured Payment Gateways</p>
                <img alt="" src={paymentImage} className="mt-2" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
