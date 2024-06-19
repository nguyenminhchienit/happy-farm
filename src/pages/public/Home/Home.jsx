/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import CatSlider from "../../../components/catSlider";
import "./Home.css";
import SliderBanner from "./slider/index";
import Banners from "../../../components/banners";
import Product from "../../../components/product";
import TopProducts from "./TopProducts";

const Home = (props) => {
  const [prodData, setprodData] = useState(props.data);
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
            {prodData[0]?.items[0]?.products?.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <Product item={item} />
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
