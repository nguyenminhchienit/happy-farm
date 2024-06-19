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
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center"></div>
        </div>
      </section>

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
                    <h4>Best prices</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img alt="" src={Icon2} />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img alt="" src={Icon3} />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img alt="" src={Icon5} />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <a to="/">
                  <img alt="" src={Logo} />
                </a>
                <br />
                <br />
                <p>
                  Trụ sở chính: 475A (số cũ:144/24) Điện Biên Phủ, Phường 25,
                  Quận Bình Thạnh, TP. HCM.
                </p>
                <br />

                <p>
                  <LocationOnOutlinedIcon /> <strong>Address</strong>: Hutech
                  University
                </p>
                <p>
                  <HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) -
                  0392845906{" "}
                </p>
                <p>
                  <EmailOutlinedIcon /> <strong>Email:</strong>{" "}
                  sale@happyfarm.com
                </p>
                <p>
                  <WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 -
                  18:00, Mon - Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <a to="#">About Us</a>
                      </li>
                      <li>
                        <a to="#">Delivery Information</a>
                      </li>
                      <li>
                        <a to="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a to="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a to="#">Contact Us</a>
                      </li>
                      <li>
                        <a to="#">Support Center</a>
                      </li>
                      <li>
                        <a to="#">Careers</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Company</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <a to="#">Account</a>
                      </li>
                      <li>
                        <a to="#">Delivery Information</a>
                      </li>
                      <li>
                        <a to="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a to="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a to="#">Contact Us</a>
                      </li>
                      <li>
                        <a to="#">Support Center</a>
                      </li>
                      <li>
                        <a to="#">Careers</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Corporate</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <a to="#">About Us</a>
                      </li>
                      <li>
                        <a to="#">Delivery Information</a>
                      </li>
                      <li>
                        <a to="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a to="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a to="#">Contact Us</a>
                      </li>
                      <li>
                        <a to="#">Support Center</a>
                      </li>
                      <li>
                        <a to="#">Careers</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Popular</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <a to="#">About Us</a>
                      </li>
                      <li>
                        <a to="#">Delivery Information</a>
                      </li>
                      <li>
                        <a to="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a to="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a to="#">Contact Us</a>
                      </li>
                      <li>
                        <a to="#">Support Center</a>
                      </li>
                      <li>
                        <a to="#">Careers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <br className="res-hide" />
                <p>From App Store or Google Play</p>

                <div className="d-flex">
                  <a to={""}>
                    <img alt="" src={appStore} width={150} />
                  </a>
                  <a to={""}>
                    <img alt="" src={googlePlay} className="mx-2" width={150} />
                  </a>
                </div>

                <br />

                <p>Secured Payment Gateways</p>
                <img alt="" src={paymentImage} />
              </div>
            </div>

            <hr />

            <div className="row lastStrip">
              <div className="col-md-3 part_1">
                <p>© 2024, HappyFarm - Nguyen Minh Chien</p>
              </div>

              <div className="col-md-6 d-flex part_2">
                <div className="m-auto d-flex align-items-center phWrap">
                  <div className="phNo d-flex align-items-center mx-5">
                    <span>
                      <HeadphonesOutlinedIcon />
                    </span>
                    <div className="info ml-3">
                      <h3 className="text-g mb-0">1900 - 8888</h3>
                      <p className="mb-0">24/7 Support Center</p>
                    </div>
                  </div>

                  <div className="phNo d-flex align-items-center  mx-5">
                    <span>
                      <HeadphonesOutlinedIcon />
                    </span>
                    <div className="info ml-3">
                      <h3 className="text-g mb-0">0392845906</h3>
                      <p className="mb-0">24/7 Support Center</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3  part_3">
                <div className="d-flex align-items-center">
                  <h5>Follow Us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <a to={""}>
                        <FacebookOutlinedIcon />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a to={""}>
                        <TwitterIcon />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a to={""}>
                        <InstagramIcon />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a to={""}>
                        <YouTubeIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
