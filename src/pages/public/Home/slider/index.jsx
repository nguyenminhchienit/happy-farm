// import Slider from "react-slick";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

// import Slide1 from "../../../../assets/images/slider-1.png";
// import Slide2 from "../../../../assets/images/slider-2.png";

// import Newsletter from "../../../../components/newsletter/index";

// const HomeSlider = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     arrows: false,
//     autoplay: true,
//   };

//   return (
//     <section className="homeSlider">
//       <div className="container-fluid position-relative">
//         <Slider {...settings} className="home_slider_Main">
//           <div className="item">
//             <img src={Slide1} className="w-100" alt="" />
//             <div className="info">
//               <h2 className="mb-4">
//                 Happy Farm
//                 <br />
//                 Phân bón tốt cho mọi nhà
//               </h2>
//               <p>Đăng ký để nhận được ưu đãi tốt nhất</p>
//             </div>
//           </div>
//           <div className="item">
//             <img src={Slide2} className="w-100" alt="" />
//             <div className="info">
//               <h2 className="mb-4">
//                 Happy Farm
//                 <br />
//                 Phân bón tốt cho mọi nhà
//               </h2>
//               <p>Đăng ký để nhận được ưu đãi tốt nhất</p>
//             </div>
//           </div>
//         </Slider>

//         {<Newsletter />}
//       </div>
//     </section>
//   );
// };

// export default HomeSlider;

import Slider from "react-slick";

import Slide1 from "../../../../assets/images/slider-1.png";
import Slide2 from "../../../../assets/images/slider-2.png";

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
    dotsClass: "slick-dots flex justify-center mt-6 space-x-2",
    dotClassName:
      "w-3 h-3 rounded-full bg-gray-400 transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600",
    activeDotClassName: "bg-gray-600",
  };

  return (
    <section className="bg-gray-100 py-12 mt-[200px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={Slide1} className="w-full  object-cover" alt="" />
            {/* <div className="info bg-white p-6 md:p-8 lg:p-10 shadow-md rounded-lg mt-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Happy Farm
                <br />
                Phân bón tốt cho mọi nhà
              </h2>
              <p className="text-gray-600">
                Đăng ký để nhận được ưu đãi tốt nhất
              </p>
            </div> */}
          </div>
          <div className="item">
            <img src={Slide2} className="w-full object-cover" alt="" />
            {/* <div className="info bg-white p-6 md:p-8 lg:p-10 shadow-md rounded-lg mt-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Happy Farm
                <br />
                Phân bón tốt cho mọi nhà
              </h2>
              <p className="text-gray-600">
                Đăng ký để nhận được ưu đãi tốt nhất
              </p>
            </div> */}
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
