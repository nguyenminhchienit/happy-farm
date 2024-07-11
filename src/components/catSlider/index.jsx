/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState, useContext } from "react";
import Slider from "react-slick";
import "./style.css";
import { Link } from "react-router-dom";
import { getAllBrand } from "../../api/Brand";

const CatSlider = () => {
  const [allData, setAllData] = useState([]);

  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  const slider = useRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    autoplay: false,
    centerMode: false,
  };

  useEffect(() => {
    getAllBrand().then((response) => {
      setAllData(response.data);
    });
  }, []);

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid" ref={slider}>
          <h2 className="hd">Thương hiệu nổi bật</h2>
          <Slider
            {...settings}
            className="cat_slider_Main"
            id="cat_slider_Main"
          >
            {allData?.length !== 0 &&
              allData?.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <Link to={`/cat/${item.nameBrand}`}>
                      <div
                        className="info"
                        style={{ background: itemBg[index] }}
                      >
                        <img
                          src={
                            "https://cdn-icons-png.flaticon.com/128/3659/3659898.png"
                          }
                          width="80"
                          alt=""
                        />
                        <h5 className="text-capitalize mt-3">
                          {item.nameBrand}
                        </h5>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
