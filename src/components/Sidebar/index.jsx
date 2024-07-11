/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React, { useEffect, useState, useContext } from "react";
// import bannerImg from "../../assets/images/banner1.jpg";
// import { Link, useParams } from "react-router-dom";

// import "react-range-slider-input/dist/style.css";
// import { getAllBrand } from "../../api/Brand";

// const Sidebar = (props) => {
//   const [brand, setBrand] = useState([]);

//   let { id } = useParams();

//   useEffect(() => {
//     getAllBrand().then((response) => {
//       setBrand(response.data);
//     });
//   }, []);

//   const filterByBrand = (keyword) => {
//     props.filterByBrand(keyword);
//   };

//   return (
//     <>
//       <div className={`sidebar ${true && "open"}`}>
//         <div className="card border-0 shadow res-hide">
//           <h3>Category</h3>
//           <div className="catList">
//             {brand?.length !== 0 &&
//               brand?.map((item, index) => {
//                 return (
//                   <Link
//                     to={`/cat/${item?.nameBrand?.toLowerCase()}`}
//                     key={index}
//                   >
//                     <div className="catItem d-flex align-items-center">
//                       <span className="img">
//                         <img
//                           src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
//                           width={30}
//                         />
//                       </span>
//                       <h4 className="mb-0 ml-3 mr-3 text-capitalize">
//                         {item?.nameBrand}
//                       </h4>
//                     </div>
//                   </Link>
//                 );
//               })}
//           </div>
//         </div>

//         {/* <div className="card border-0 shadow">
//           <div className="filters">
//             <h5>Filter By Brand</h5>

//             <ul className="mb-0">
//               <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 defaultValue="female"
//                 name="radio-buttons-group"
//               >
//                 {brand?.length !== 0 &&
//                   brand?.map((item, index) => {
//                     return (
//                       <li key={index}>
//                         {" "}
//                         <FormControlLabel
//                           value={item?.nameBrand}
//                           control={
//                             <Radio
//                               onChange={() => filterByBrand(item?.nameBrand)}
//                             />
//                           }
//                           label={item?.nameBrand}
//                         />
//                       </li>
//                     );
//                   })}
//               </RadioGroup>
//             </ul>
//           </div>

//           <div className="d-flex filterWrapper">
//             <Button
//               className="btn btn-g w-100"
//               onClick={() => context.openFilters()}
//             >
//               <FilterAltOutlinedIcon /> Filter
//             </Button>
//           </div>
//         </div> */}

//         <img src={bannerImg} className="w-100" />
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/images/banner1.jpg";
import { Link, useParams } from "react-router-dom";
import { getAllBrand } from "../../api/Brand";

const Sidebar = (props) => {
  const [brand, setBrand] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getAllBrand().then((response) => {
      setBrand(response.data);
    });
  }, []);

  const filterByBrand = (keyword) => {
    props.filterByBrand(keyword);
  };

  return (
    <div className="hidden md:block md:w-64 z-50">
      <div className="card border-0 shadow res-hide p-8">
        <h3 className="text-lg font-semibold mb-4">Danh mục</h3>
        <div className="catList">
          {brand?.length !== 0 &&
            brand?.map((item, index) => (
              <div
                className="catItem flex items-center mb-4 hover:cursor-pointer"
                key={index}
                onClick={() => filterByBrand(item?.nameBrand)}
              >
                <span className="img">
                  <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                    alt={item?.nameBrand}
                    className="w-8"
                  />
                </span>
                <h4 className="mb-0 ml-3 text-capitalize text-black">
                  {item?.nameBrand}
                </h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
