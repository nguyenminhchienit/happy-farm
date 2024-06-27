/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import { useState } from "react";

import { useEffect } from "react";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Product from "../../../components/product";
import { addToCart, getAll, getById } from "../../../api/Fertilizer";
import { formatPrice } from "../../../utils/formatPrice";
import lh from "../../../assets/images/lh.png";
import QuantityBox from "../../../components/quantityBox";

const DetailsPage = (props) => {
  const [activeSize, setActiveSize] = useState(0);

  const [activeTabs, setActiveTabs] = useState(0);

  const [currentProduct, setCurrentProduct] = useState({});

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [rating, setRating] = useState(0.0);

  const [reviewsArr, setReviewsArr] = useState([]);

  const [reviewFields, setReviewFields] = useState({
    review: "",
    userName: "",
    rating: 0.0,
    productId: 0,
    date: "",
  });

  const [quantity, setQuantity] = useState(1);

  let { id } = useParams();

  const storedData = localStorage.getItem("user");
  const dataObject = storedData ? JSON.parse(storedData) : null;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const isActive = (index) => {
    setActiveSize(index);
  };

  const handleQuantity = (data) => {
    setQuantity(data);
    console.log(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getById(id).then((response) => {
      setCurrentProduct(response.data);
    });
    getAll().then((response) => {
      setRelatedProducts(response.data);
    });
  }, [id]);

  const changeInput = (name, value) => {
    if (name === "rating") {
      setRating(value);
    }
    setReviewFields(() => ({
      ...reviewFields,
      [name]: value,
      productId: id,
      date: new Date().toLocaleString(),
    }));
  };

  const navigate = useNavigate();
  // add to cart
  const handleAddtoCart = async () => {
    if (dataObject) {
      const res = await addToCart(
        currentProduct?.idFertilizer,
        quantity,
        dataObject?.idUser
      );
      if (res.status) {
        window.location.reload();
      }
    } else {
      navigate("/signIn");
    }
  };

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      setReviewFields(() => ({
        review: "",
        userName: "",
        rating: 0.0,
        productId: 0,
        date: "",
      }));
    } catch (error) {
      console.log(error.message);
    }

    console.log("review: ", reviewFields);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <section className="detailsPage mb-5">
        {true && (
          <div className="breadcrumbWrapper mb-4">
            <div className="container-fluid">
              <ul className="breadcrumb breadcrumb2 mb-0">
                <li>
                  <Link to={"/"}>Home</Link>{" "}
                </li>
                <li>{currentProduct.nameFertilizer}</li>
              </ul>
            </div>
          </div>
        )}

        <div className="container detailsContainer pt-3 pb-3">
          <div className="row">
            {/* productZoom code start here */}
            <div className="col-md-5 relative ">
              <div
                className="productZoom d-flex justify-content-center align-items-center"
                style={{ height: "400px", objectFit: "cover" }}
              >
                <img
                  alt=""
                  src={currentProduct.imageRepresent}
                  className=""
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div
                className="absolute top-[-100px] right-[-60px]"
                style={{ height: "auto", objectFit: "cover" }}
              >
                <img
                  alt=""
                  src={lh}
                  className=""
                  style={{ objectFit: "cover", height: "260px" }}
                />
              </div>

              {/* <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                {currentProduct.imageOptional !== undefined &&
                  currentProduct.imageOptional.map((imgUrl, index) => {
                    return (
                      <div className="item" key={index}>
                        <img
                          alt=""
                          src={`${imgUrl}?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                          className="w-100"
                          onClick={() => goto(index)}
                        />
                      </div>
                    );
                  })}
              </Slider> */}
            </div>
            {/* productZoom code ends here */}

            {/* product info code start here */}
            <div className="col-md-7 productInfo">
              <h1>{currentProduct.nameFertilizer}</h1>
              <div className="d-flex align-items-center mb-4 mt-3">
                <Rating
                  name="half-rating-read"
                  value={parseFloat(currentProduct.rating)}
                  precision={0.5}
                  readOnly
                />
                <span className="text-light ml-2">(32 reviews)</span>
              </div>

              <div className="priceSec d-flex align-items-center mb-3">
                <span className="text-g priceLarge">
                  {formatPrice(currentProduct?.price) + " VND"}
                </span>
                <div className="ml-3 d-flex flex-column">
                  <span className="text-org">
                    {currentProduct?.discount}% Off
                  </span>
                  <span className="text-light oldPrice">
                    Rs {currentProduct?.oldPrice}
                  </span>
                </div>
              </div>

              <p className="mb-2">{currentProduct?.description}</p>

              <p className="mb-2">
                By{" "}
                <span className="text-success">
                  {currentProduct?.brandName?.nameBrand}
                </span>
              </p>

              {currentProduct.weight !== undefined &&
                currentProduct.weight.length !== 0 && (
                  <div className="productSize d-flex align-items-center">
                    <span>Size / Weight:</span>
                    <ul className="list list-inline mb-0 pl-4">
                      {currentProduct.weight.map((item, index) => {
                        return (
                          <li className="list-inline-item" key={index}>
                            <Link
                              className={`tag ${
                                activeSize === index ? "active" : ""
                              }`}
                              onClick={() => isActive(index)}
                            >
                              {item}g
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

              {currentProduct.RAM !== undefined &&
                currentProduct.RAM.length !== 0 && (
                  <div className="productSize d-flex align-items-center">
                    <span>RAM:</span>
                    <ul className="list list-inline mb-0 pl-4">
                      {currentProduct.RAM.map((RAM, index) => {
                        return (
                          <li className="list-inline-item" key={index}>
                            <Link
                              className={`tag ${
                                activeSize === index ? "active" : ""
                              }`}
                              onClick={() => isActive(index)}
                            >
                              {RAM} GB
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

              {currentProduct.SIZE !== undefined &&
                currentProduct.SIZE.length !== 0 && (
                  <div className="productSize d-flex align-items-center">
                    <span>SIZE:</span>
                    <ul className="list list-inline mb-0 pl-4">
                      {currentProduct.SIZE.map((SIZE, index) => {
                        return (
                          <li className="list-inline-item" key={index}>
                            <Link
                              className={`tag ${
                                activeSize === index ? "active" : ""
                              }`}
                              onClick={() => isActive(index)}
                            >
                              {SIZE}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center gap-3">
                  {true && (
                    <Button
                      className={`btn-g w-[200px] btn-lg addtocartbtn`}
                      onClick={handleAddtoCart}
                    >
                      <ShoppingCartOutlinedIcon />
                      Mua
                    </Button>
                  )}

                  <QuantityBox handleQuantity={handleQuantity} />
                </div>
              </div>
            </div>
            {/* product info code ends here */}
          </div>

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>

              <br />

              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>{currentProduct.description}</p>
                </div>
              )}

              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr className="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr className="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr className="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr className="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr className="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br />

                      {reviewsArr.length !== 0 &&
                        reviewsArr !== undefined &&
                        reviewsArr.map((item, index) => {
                          return (
                            <div
                              className="card p-4 reviewsCard flex-row"
                              key={index}
                            >
                              <div className="image">
                                <div className="rounded-circle">
                                  <img
                                    alt=""
                                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                                  />
                                </div>
                                <span className="text-g d-block text-center font-weight-bold">
                                  {item.userName}
                                </span>
                              </div>

                              <div className="info pl-5">
                                <div className="d-flex align-items-center w-100">
                                  <h5 className="text-light">{item.date}</h5>
                                  <div className="ml-auto">
                                    <Rating
                                      name="half-rating-read"
                                      value={parseFloat(item.rating)}
                                      precision={0.5}
                                      readOnly
                                    />
                                  </div>
                                </div>

                                <p>{item.review} </p>
                              </div>
                            </div>
                          );
                        })}

                      <br className="res-hide" />

                      <br className="res-hide" />

                      <form className="reviewForm" onSubmit={submitReview}>
                        <h4>Add a review</h4> <br />
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a Review"
                            name="review"
                            value={reviewFields.review}
                            onChange={(e) =>
                              changeInput(e.target.name, e.target.value)
                            }
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                value={reviewFields.userName}
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                                onChange={(e) =>
                                  changeInput(e.target.name, e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={rating}
                                precision={0.5}
                                onChange={(e) =>
                                  changeInput(e.target.name, e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button type="submit" className="btn-g btn-lg">
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-4 pl-5 reviewBox">
                      <h4>Customer reviews</h4>

                      <div className="d-flex align-items-center mt-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4.5}
                          precision={0.5}
                          readOnly
                        />
                        <strong className="ml-3">4.8 out of 5</strong>
                      </div>

                      <br />

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">5</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "75%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">4</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "50%", height: "20px" }}
                          >
                            50%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">3</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "55%", height: "20px" }}
                          >
                            55%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">2</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "35%", height: "20px" }}
                          >
                            35%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">1</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "25%", height: "20px" }}
                          >
                            25%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <br />

          <div className="relatedProducts homeProductsRow2 pt-5 pb-4">
            <h2 className="hd mb-0 mt-0">Related products</h2>
            <br className="res-hide" />
            <Slider {...settings} className="prodSlider w-full">
              {relatedProducts?.length !== 0 &&
                relatedProducts?.map((product, index) => {
                  return (
                    <div className="item" key={product}>
                      <Product item={product} />
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
