import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Slide1 from "../../../../assets/images/slider-1.png";
import Slide2 from "../../../../assets/images/slider-2.png";

import Newsletter from "../../../../components/newsletter/index";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={Slide1} className="w-100" alt="" />
            <div className="info">
              <h2 className="mb-4">
                Happy Farm
                <br />
                Phân bón tốt cho mọi nhà
              </h2>
              <p>Đăng ký để nhận được ưu đãi tốt nhất</p>
            </div>
          </div>
          <div className="item">
            <img src={Slide2} className="w-100" alt="" />
            <div className="info">
              <h2 className="mb-4">
                Happy Farm
                <br />
                Phân bón tốt cho mọi nhà
              </h2>
              <p>Đăng ký để nhận được ưu đãi tốt nhất</p>
            </div>
          </div>
        </Slider>

        {<Newsletter />}
      </div>
    </section>
  );
};

export default HomeSlider;
