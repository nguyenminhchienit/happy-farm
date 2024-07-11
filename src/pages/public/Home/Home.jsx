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
import {
  apiCheapPrice,
  getAll,
  apiExpensive,
  apiMostBuy,
  apiRecentAdd,
  ListFerNotDelete,
} from "../../../api/Fertilizer";

const Home = (props) => {
  const [prodData, setProdData] = useState(props.data);
  const [newProduct, setNewProduct] = useState([]);
  const [mostBuy, setMostBuy] = useState([]);
  const [cheap, setCheap] = useState([]);
  const [expensive, setExpensive] = useState([]);

  useEffect(() => {
    ListFerNotDelete(0, 5).then((response) => {
      setProdData(response.data);
    });
    apiCheapPrice().then((res) => {
      setCheap(res.data);
    });
    apiExpensive().then((res) => {
      setExpensive(res.data);
    });
    apiMostBuy().then((res) => {
      setMostBuy(res.data);
    });
    apiRecentAdd().then((res) => {
      setNewProduct(res.data);
    });
  }, []);

  return (
    <div style={{ display: "block" }}>
      <SliderBanner />
      <CatSlider data={prodData} />

      <Banners />

      <section className="homeProducts homeProductWrapper">
        <div className="container-fluid">
          <div className="d-flex align-items-center homeProductsTitleWrap">
            <h2 className="hd mb-0 mt-0 res-full">Sản phẩm nổi bật</h2>
          </div>

          <div className={`productRow`}>
            {prodData.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <Product item={item} brand={item.brandName?.nameBrand} />
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
              <TopProducts title="Mới nhất" data={newProduct} />
            </div>

            <div className="col">
              <TopProducts title="Bán chạy" data={mostBuy} />
            </div>

            <div className="col">
              <TopProducts title="Chất lượng" data={expensive} />
            </div>

            <div className="col">
              <TopProducts title="Rẻ nhất" data={cheap} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
