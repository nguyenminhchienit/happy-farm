/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CatSlider from "../../../components/catSlider";
import "./Home.css";
import SliderBanner from "./slider/index";
import Banners from "../../../components/banners";
import Product from "../../../components/product";
import TopProducts from "./TopProducts";



// call api 
import { getAll , getById } from "../../../api/Fertilizer";

const Home = (props) => {
  const [prodData, setProdData] = useState(props.data);

  useEffect( () => {
      // Gọi API để lấy dữ liệu khi component được mount
      getAll()
          .then((response) => {
              // Xử lý dữ liệu trả về từ API
              console.log("All fertilizers:", response.data);
              setProdData(response.data); // Cập nhật state với dữ liệu từ API
          })
          .catch((error) => {
              console.error("Error fetching all fertilizers:", error);
          });
  }, []); // Dependency array rỗng đảm bảo useEffect chỉ gọi một lần sau khi mount

 
  return (
    <div style={{ display: "block" }}>
      <SliderBanner />
      <CatSlider data={prodData} />

      <Banners />

      <section className="homeProducts homeProductWrapper">
        <div className="container-fluid">
          <div className="d-flex align-items-center homeProductsTitleWrap">
            <h2 className="hd mb-0 mt-0 res-full">Popular Products</h2>
          </div>

          <div className={`productRow`}>
            {prodData.map((item, index) => {
              console.log("item:", item);
              return (
                <div className="item" key={index}>
                  <Product item={item} brand={item.brandName?.nameBrand}/>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling" />
            </div>

            <div className="col">
              <TopProducts title="Trending Products" />
            </div>

            <div className="col">
              <TopProducts title="Recently added" />
            </div>

            <div className="col">
              <TopProducts title="Top Rated" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
