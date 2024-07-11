/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Sidebar from "../../../components/Sidebar";
// import Product from "../../../components/product";
// import { Button } from "@mui/material";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
// import { getAll } from "../../../api/Fertilizer";

// const Listing = (props) => {
//   const [isOpenDropDown, setisOpenDropDown] = useState(false);
//   const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
//   const [showPerPage, setHhowPerPage] = useState(3);
//   const [data, setData] = useState([]);

//   let { id } = useParams();
//   console.log("id: ", id);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     getAll().then((response) => {
//       setData(response.data);
//     });
//   }, [id]);

//   const filterByBrand = (keyword) => {};

//   const filterByPrice = (minValue, maxValue) => {};

//   const filterByRating = (keyword) => {};

//   return (
//     <div style={{ marginTop: "180px" }}>
//       {false && (
//         <>
//           {false === false && (
//             <Button
//               className="btn-g btn-lg w-100 filterBtn"
//               onClick={() => context.openFilters()}
//             >
//               Filters
//             </Button>
//           )}
//         </>
//       )}

//       <section className="listingPage">
//         <div className="container-fluid">
//           {
//             <div className="breadcrumb flex-column">
//               {/* <h1 className="text-capitalize">{id.split("-").join(" ")}</h1> */}
//               <ul className="list list-inline mb-0">
//                 <li className="list-inline-item">
//                   <Link to={""}>Trang chủ</Link>
//                 </li>
//                 <li className="list-inline-item">/</li>
//                 <li className="list-inline-item">
//                   <div className="text-capitalize">Phân bón</div>
//                 </li>
//               </ul>
//             </div>
//           }

//           <div className="listingData">
//             <div className="row">
//               <div
//                 className={`col-md-3 sidebarWrapper ${
//                   true === true && "click"
//                 }`}
//               >
//                 {data?.length !== 0 && (
//                   <Sidebar
//                     data={props.data}
//                     currentCatData={data}
//                     filterByBrand={filterByBrand}
//                     filterByPrice={filterByPrice}
//                     filterByRating={filterByRating}
//                   />
//                 )}
//               </div>

//               <div className="col-md-9 rightContent homeProducts pt-0">
//                 <div className="topStrip d-flex align-items-center">
//                   <p className="mb-0">
//                     We found <span className="text-success">{data.length}</span>{" "}
//                     items for you!
//                   </p>
//                   <div className="ml-auto d-flex align-items-center">
//                     <div className="tab_ position-relative">
//                       <Button
//                         className="btn_"
//                         onClick={() => setisOpenDropDown(!isOpenDropDown)}
//                       >
//                         <GridViewOutlinedIcon /> Show: {showPerPage * 5}
//                       </Button>
//                       {isOpenDropDown !== false && (
//                         <ul className="dropdownMenu">
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => {
//                                 setisOpenDropDown(false);
//                                 setHhowPerPage(1);
//                               }}
//                             >
//                               5
//                             </Button>
//                           </li>
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => {
//                                 setisOpenDropDown(false);
//                                 setHhowPerPage(2);
//                               }}
//                             >
//                               10
//                             </Button>
//                           </li>

//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => {
//                                 setisOpenDropDown(false);
//                                 setHhowPerPage(3);
//                               }}
//                             >
//                               15
//                             </Button>
//                           </li>

//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => {
//                                 setisOpenDropDown(false);
//                                 setHhowPerPage(4);
//                               }}
//                             >
//                               20
//                             </Button>
//                           </li>
//                         </ul>
//                       )}
//                     </div>
//                     <div className="tab_ ml-3 position-relative">
//                       <Button
//                         className="btn_"
//                         onClick={() => setisOpenDropDown2(!isOpenDropDown2)}
//                       >
//                         <FilterListOutlinedIcon /> Sort by: Featured{" "}
//                       </Button>
//                       {isOpenDropDown2 !== false && (
//                         <ul className="dropdownMenu">
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => setisOpenDropDown2(false)}
//                             >
//                               Featured
//                             </Button>
//                           </li>
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => setisOpenDropDown2(false)}
//                             >
//                               {" "}
//                               Price: Low to High
//                             </Button>
//                           </li>
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => setisOpenDropDown2(false)}
//                             >
//                               {" "}
//                               Price: High to Low
//                             </Button>
//                           </li>
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => setisOpenDropDown2(false)}
//                             >
//                               {" "}
//                               Release Date
//                             </Button>
//                           </li>
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => setisOpenDropDown2(false)}
//                             >
//                               {" "}
//                               Avg. Rating
//                             </Button>
//                           </li>
//                         </ul>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="productRow pl-4 pr-3">
//                   {data?.length !== 0 &&
//                     data?.map((item, index) => {
//                       return (
//                         <div className="item" key={index}>
//                           <Product item={item} />
//                         </div>
//                       );
//                     })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Listing;

// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Sidebar from "../../../components/Sidebar";
// import Product from "../../../components/product";
// import { Button } from "@mui/material";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
// import { apiFilterBrand, getAll, getAllPagi } from "../../../api/Fertilizer";
// import { getAllBrand } from "../../../api/Brand";

// const Listing = (props) => {
//   const [isOpenDropDown, setIsOpenDropDown] = useState(false);
//   const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
//   const [showPerPage, setShowPerPage] = useState(2);
//   const [data, setData] = useState([]);
//   const [totalPage, setTotalPage] = useState(0);

//   let { id } = useParams();
//   const [brand, setBrand] = useState([]);

//   useEffect(() => {
//     getAllBrand().then((response) => {
//       setBrand(response.data);
//     });
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     getAllPagi().then((response) => {
//       setTotalPage(response?.numberOfPages);
//       setData(response.data);
//     });
//   }, [id]);

//   const filterByBrand = (keyword) => {
//     setCurentPage(1);
//     window.scrollTo(0, 0);
//     apiFilterBrand(0, limit, keyword).then((response) => {
//       setTotalPage(response?.numberOfPages);
//       setData(response.data);
//     });
//   };

//   const filterByPrice = (minValue, maxValue) => {};

//   const filterByRating = (keyword) => {};
//   const [currentPage, setCurentPage] = useState(1);

//   const handleClickPage = (page) => {
//     setCurentPage(page);
//     window.scrollTo(0, 0);
//     getAllPagi(page - 1, limit).then((response) => {
//       setTotalPage(response?.numberOfPages);
//       setData(response.data);
//     });
//   };

//   const [limit, setLimit] = useState(8);

//   const handleClickPageShow = (page, limit) => {
//     setCurentPage(page);
//     window.scrollTo(0, 0);
//     getAllPagi(page - 1, limit).then((response) => {
//       setTotalPage(response?.numberOfPages);
//       setData(response.data);
//     });
//   };

//   const handleClickBrand = (page, limit, brand) => {
//     setCurentPage(page);
//     window.scrollTo(0, 0);
//     apiFilterBrand(page - 1, limit, brand).then((response) => {
//       setTotalPage(response?.numberOfPages);
//       setData(response.data);
//     });
//   };

//   return (
//     <div className="mt-[180px]">
//       {false && (
//         <>
//           {false === false && (
//             <Button
//               className="btn-g btn-lg w-full filterBtn"
//               onClick={() => context.openFilters()}
//             >
//               Filters
//             </Button>
//           )}
//         </>
//       )}

//       <section className="listingPage">
//         <div className="container-fluid">
//           {
//             <div className="breadcrumb flex flex-col">
//               <ul className="list-none mb-0 flex space-x-2">
//                 <li>
//                   <Link to={""}>Trang chủ</Link>
//                 </li>
//                 <li>/</li>
//                 <li>
//                   <div className="capitalize">Phân bón</div>
//                 </li>
//               </ul>
//             </div>
//           }

//           <div className="listingData">
//             <div className="flex flex-wrap">
//               <div
//                 className={`w-full md:w-1/4 sidebarWrapper ${
//                   true === true && "click"
//                 }`}
//               >
//                 {
//                   <Sidebar
//                     data={props.data}
//                     currentCatData={data}
//                     filterByBrand={filterByBrand}
//                     filterByPrice={filterByPrice}
//                     filterByRating={filterByRating}
//                   />
//                 }
//               </div>

//               <div className="w-full md:w-3/4 rightContent homeProducts pt-0">
//                 <div className="topStrip flex items-center">
//                   <p className="mb-0">
//                     Tìm thấy{" "}
//                     <span className="text-green-500">{data.length}</span> sản
//                     phẩm trong {currentPage}/{totalPage} trang
//                   </p>
//                   <div className="ml-auto flex items-center">
//                     <div className="relative tab_">
//                       <Button
//                         className="btn_"
//                         onClick={() => setIsOpenDropDown(!isOpenDropDown)}
//                       >
//                         <GridViewOutlinedIcon /> Show: {showPerPage * 4}
//                       </Button>
//                       {isOpenDropDown !== false && (
//                         <ul className="dropdownMenu">
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => {
//                                 setIsOpenDropDown(false);
//                                 setShowPerPage(1);
//                                 setLimit(4);
//                                 handleClickPageShow(1, 4);
//                               }}
//                             >
//                               4
//                             </Button>
//                           </li>
//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => {
//                                 setIsOpenDropDown(false);
//                                 setShowPerPage(2);
//                                 setLimit(8);
//                                 handleClickPageShow(1, 8);
//                               }}
//                             >
//                               8
//                             </Button>
//                           </li>

//                           <li>
//                             <Button
//                               className="align-items-center"
//                               onClick={() => {
//                                 setIsOpenDropDown(false);
//                                 setShowPerPage(3);
//                                 setLimit(12);
//                                 handleClickPageShow(1, 12);
//                               }}
//                             >
//                               12
//                             </Button>
//                           </li>
//                         </ul>
//                       )}
//                     </div>
//                     <div className="relative tab_ ml-3">
//                       <Button
//                         className="btn_"
//                         onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}
//                       >
//                         <FilterListOutlinedIcon /> Danh mục
//                       </Button>
//                       {isOpenDropDown2 !== false && (
//                         <ul className="dropdownMenu">
//                           {brand?.length !== 0 &&
//                             brand?.map((item, index) => (
//                               <li key={index}>
//                                 <Button
//                                   className="align-items-center"
//                                   onClick={() => {
//                                     setIsOpenDropDown2(false);
//                                     handleClickBrand(1, limit, item?.nameBrand);
//                                   }}
//                                 >
//                                   {item?.nameBrand}
//                                 </Button>
//                               </li>
//                             ))}
//                         </ul>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="productRow pl-4 pr-3">
//                   {data?.length !== 0 &&
//                     data?.map((item, index) => {
//                       return (
//                         <div className="item" key={index}>
//                           <Product item={item} />
//                         </div>
//                       );
//                     })}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <nav
//             aria-label="Page navigation example"
//             className="flex justify-end pr-8"
//           >
//             {Array.from({ length: totalPage }, (_, index) => (
//               <ul className="list-style-none flex gap-3" key={index}>
//                 <li
//                   className={`
//               ${
//                 currentPage === index + 1
//                   ? "text-white h-[50px] w-[50px] bg-green-700 rounded-full flex justify-center items-center"
//                   : ""
//               }`}
//                 >
//                   <a
//                     onClick={() => handleClickPage(index + 1)}
//                     className={`relative hover:cursor-pointer block rounded bg-transparent
//                   text-2xl px-3 py-1.5 text-neutral-600 transition-all duration-300
//                    hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white
//                     ${currentPage === index + 1 ? "text-white" : ""}
//                    `}
//                   >
//                     {index + 1}
//                   </a>
//                 </li>
//               </ul>
//             ))}
//           </nav>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Listing;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Product from "../../../components/product";
import { Button } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { apiFilterBrand, getAllPagi } from "../../../api/Fertilizer";
import { getAllBrand } from "../../../api/Brand";

const Listing = (props) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
  const [showPerPage, setShowPerPage] = useState(2);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const { id } = useParams();
  const [brand, setBrand] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    getAllBrand().then((response) => {
      setBrand(response.data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllPagi().then((response) => {
      setTotalPage(response?.numberOfPages);
      setData(response.data);
    });
  }, [id]);

  const filterByBrand = (keyword) => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
    apiFilterBrand(0, limit, keyword).then((response) => {
      setTotalPage(response?.numberOfPages);
      setData(response.data);
    });
  };

  const handleClickPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    getAllPagi(page - 1, limit).then((response) => {
      setTotalPage(response?.numberOfPages);
      setData(response.data);
    });
  };

  const handleClickPageShow = (page, limit) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    getAllPagi(page - 1, limit).then((response) => {
      setTotalPage(response?.numberOfPages);
      setData(response.data);
    });
  };

  const handleClickBrand = (page, limit, brand) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    apiFilterBrand(page - 1, limit, brand).then((response) => {
      setTotalPage(response?.numberOfPages);
      setData(response.data);
    });
  };

  return (
    <div className="mt-[180px]">
      <section className="listingPage">
        <div className="container-fluid">
          <div className="breadcrumb flex flex-col">
            <ul className="list-none mb-0 flex space-x-2">
              <li>
                <Link to={""}>Trang chủ</Link>
              </li>
              <li>/</li>
              <li>
                <div className="capitalize">Phân bón</div>
              </li>
            </ul>
          </div>

          <div className="listingData">
            <div className="flex flex-wrap">
              <div
                className={`w-full md:w-1/4 sidebarWrapper ${true && "click"}`}
              >
                <Sidebar
                  data={props.data}
                  currentCatData={data}
                  filterByBrand={filterByBrand}
                />
              </div>

              <div className="w-full md:w-3/4 rightContent homeProducts pt-0">
                <div className="topStrip flex items-center">
                  <p className="mb-0">
                    Tìm thấy{" "}
                    <span className="text-green-500">{data.length}</span> sản
                    phẩm trong {currentPage}/{totalPage} trang
                  </p>
                  <div className="ml-auto flex items-center">
                    <div className="relative tab_">
                      <Button
                        className="btn_"
                        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                      >
                        <GridViewOutlinedIcon /> Show: {showPerPage * 4}
                      </Button>
                      {isOpenDropDown && (
                        <ul className="dropdownMenu">
                          {[4, 8, 12].map((perPage, index) => (
                            <li key={index}>
                              <Button
                                className="align-items-center"
                                onClick={() => {
                                  setIsOpenDropDown(false);
                                  setShowPerPage(perPage / 4);
                                  setLimit(perPage);
                                  handleClickPageShow(1, perPage);
                                }}
                              >
                                {perPage}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="relative tab_ ml-3">
                      <Button
                        className="btn_"
                        onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}
                      >
                        <FilterListOutlinedIcon /> Danh mục
                      </Button>
                      {isOpenDropDown2 && (
                        <ul className="dropdownMenu">
                          {brand.length > 0 &&
                            brand.map((item, index) => (
                              <li key={index}>
                                <Button
                                  className="align-items-center"
                                  onClick={() => {
                                    setIsOpenDropDown2(false);
                                    handleClickBrand(1, limit, item.nameBrand);
                                  }}
                                >
                                  {item.nameBrand}
                                </Button>
                              </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div className="productRow pl-4 pr-3">
                  {data.length > 0 &&
                    data.map((item, index) => (
                      <div className="item" key={index}>
                        <Product item={item} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <nav
            aria-label="Page navigation example"
            className="flex justify-center pr-8"
          >
            <ul className="list-style-none flex gap-3">
              {Array.from({ length: totalPage }, (_, index) => (
                <li
                  key={index}
                  className={` 
              ${
                currentPage === index + 1
                  ? "text-white h-[50px] w-[50px] bg-green-700 rounded-full flex justify-center items-center"
                  : ""
              }`}
                >
                  <a
                    onClick={() => handleClickPage(index + 1)}
                    className={`relative hover:cursor-pointer block rounded bg-transparent 
                  text-2xl px-3 py-1.5 text-neutral-600 transition-all duration-300
                   hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white
                    ${currentPage === index + 1 ? "text-white" : ""}
                   `}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Listing;
