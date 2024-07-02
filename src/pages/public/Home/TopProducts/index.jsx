/* eslint-disable react/prop-types */

import "./style.css";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const TopProducts = (props) => {
  return (
    <>
      <div className="topSelling_box">
        <h3>{props.title}</h3>

        {props?.data?.slice(0, 3)?.map((item, index) => {
          return (
            <div className="items d-flex align-items-center" key={index}>
              <div className="img">
                <Link to="">
                  <img
                    src={item?.imageRepresent}
                    className="w-[140px] h-[140px]"
                  />
                </Link>
              </div>

              <div className="info px-3">
                <Link to="">
                  <h4>{item?.nameFertilizer}</h4>
                </Link>
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={0.5}
                  readOnly
                />
                <div className="d-flex align-items-center">
                  <span className="price text-g font-weight-bold">
                    {item?.price}
                  </span>{" "}
                  <span className="oldPrice">{item.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopProducts;
