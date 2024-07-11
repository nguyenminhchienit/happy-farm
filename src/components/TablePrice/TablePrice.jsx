// import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
// import {
//   Card,
//   CardHeader,
//   Typography,
//   Button,
//   CardBody,
//   CardFooter,
// } from "@material-tailwind/react";

// import axios from "../../../axios";
// import { useEffect, useState } from "react";

// const TABLE_HEAD = ["Thị trường", "Trung bình", "Thay đổi"];

// export function TablePrice() {
//   const [dataT, setDataT] = useState([]);
//   const [activeTabIndex, setActiveTabIndex] = useState(0);

//   const getPrice = (url) => {
//     return axios({
//       url: `/scraper/${url}`,
//       method: "get",
//     });
//   };

//   const getAll = async (url) => {
//     const res = await getPrice(url);
//     if (res.status) {
//       setDataT(res.data);
//     }
//   };

//   useEffect(() => {
//     if (activeTabIndex === 0) {
//       getAll("getcoffeeprice");
//     } else if (activeTabIndex === 1) {
//       getAll("getpepperprice");
//     } else if (activeTabIndex === 2) {
//       getAll("getpricevegetables");
//     } else {
//       getAll("getpriceferilizer");
//     }
//   }, [activeTabIndex]);

//   const tabsData = [
//     {
//       label: "Cà phê",
//     },
//     {
//       label: "Tiêu",
//     },
//     {
//       label: "Rau củ",
//     },
//     {
//       label: "Phân bón",
//     },
//   ];

//   return (
//     <div className="mt-[250px] ml-10 mr-10">
//       <div className="flex space-x-3 border-b">
//         {tabsData.map((tab, idx) => {
//           return (
//             <button
//               key={idx}
//               className={`py-2 border-b-4 transition-colors duration-300 ${
//                 idx === activeTabIndex
//                   ? "border-teal-500"
//                   : "border-transparent hover:border-gray-200"
//               }`}
//               onClick={() => setActiveTabIndex(idx)}
//             >
//               {tab.label}
//             </button>
//           );
//         })}
//       </div>
//       <div className="py-4">
//         <Card className="ml-10 mr-10">
//           <CardHeader floated={false} shadow={false} className="rounded-none">
//             <div className=" flex items-center justify-between gap-8">
//               <div>
//                 <Typography
//                   variant="h5"
//                   color="blue-gray"
//                   className="text-4xl mb-3"
//                 >
//                   Giá {tabsData[activeTabIndex].label} hôm nay
//                 </Typography>
//                 <Typography color="gray" className="mt-1 font-normal text-xl">
//                   Thông tin giá nông sản mới nhất, nhanh nhất
//                 </Typography>
//               </div>
//             </div>
//           </CardHeader>
//           <CardBody className="px-0">
//             <table className="mt-4 w-full min-w-max table-auto text-left">
//               <thead>
//                 <tr>
//                   {TABLE_HEAD.map((head, index) => (
//                     <th
//                       key={head}
//                       className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
//                     >
//                       <Typography
//                         variant="small"
//                         color="black"
//                         className="flex items-center text-xl justify-between gap-2 font-bold leading-none"
//                       >
//                         {head}{" "}
//                         {index !== TABLE_HEAD.length - 1 && (
//                           <ChevronUpDownIcon
//                             strokeWidth={2}
//                             className="h-4 w-4"
//                           />
//                         )}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {dataT.map(({ market, price, change }, index) => {
//                   const isLast = index === dataT.length - 1;
//                   const classes = isLast
//                     ? "p-4"
//                     : "p-4 border-b border-blue-gray-50";

//                   return (
//                     <tr key={index}>
//                       <td className={classes}>
//                         <div className="flex items-center gap-3">
//                           <div className="flex flex-col">
//                             <Typography
//                               variant="small"
//                               color=""
//                               className="font-normal text-2xl text-black"
//                             >
//                               {market}
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className={classes}>
//                         <div className="flex flex-col">
//                           <Typography
//                             variant="small"
//                             color=""
//                             className="font-normal text-2xl text-black"
//                           >
//                             {price}
//                           </Typography>
//                         </div>
//                       </td>
//                       <td className={classes}>
//                         <div className="flex flex-col">
//                           <Typography
//                             variant="small"
//                             color="red"
//                             className="font-normal text-2xl"
//                           >
//                             {change}
//                           </Typography>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </CardBody>
//           <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
//             <Typography
//               variant="small"
//               color="blue-gray"
//               className="font-normal"
//             >
//               Page 1 of 10
//             </Typography>
//             <div className="flex gap-2">
//               <Button variant="outlined" size="sm">
//                 Previous
//               </Button>
//               <Button variant="outlined" size="sm">
//                 Next
//               </Button>
//             </div>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// }

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import axios from "../../../axios";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["Thị trường", "Trung bình", "Thay đổi"];

export function TablePrice() {
  const [dataT, setDataT] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const getPrice = (url) => {
    return axios({
      url: `/scraper/${url}`,
      method: "get",
    });
  };

  const getAll = async (url) => {
    const res = await getPrice(url);
    console.log("du lieu goi dc ",res)
    if (res) {
      setDataT(res.data);
    }
  };

  useEffect(() => {
    if (activeTabIndex === 0) {
      getAll("getcoffeeprice");
    } else if (activeTabIndex === 1) {
      getAll("getpepperprice");
    } else if (activeTabIndex === 2) {
      getAll("getpricevegetables");
    } else {
      getAll("getpriceferilizer");
    }
  }, [activeTabIndex]);

  const tabsData = [
    { label: "Cà phê" },
    { label: "Tiêu" },
    { label: "Rau củ" },
    { label: "Phân bón" },
  ];

  return (
    <div className="mt-[250px] mx-4 sm:mx-10">
      <div className="flex space-x-3 border-b">
        {tabsData.map((tab, idx) => (
          <button
            key={idx}
            className={`py-2 border-b-4 transition-colors duration-300 ${
              idx === activeTabIndex
                ? "border-teal-500"
                : "border-transparent hover:border-gray-200"
            }`}
            onClick={() => setActiveTabIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        <Card className="mx-0 sm:mx-10">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="flex items-center justify-between gap-8">
              <div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="text-2xl sm:text-4xl mb-3"
                >
                  Giá {tabsData[activeTabIndex].label} hôm nay
                </Typography>
                <Typography
                  color="gray"
                  className="mt-1 font-normal text-sm sm:text-xl"
                >
                  Thông tin giá nông sản mới nhất, nhanh nhất
                </Typography>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-0">
            <div className="overflow-x-auto">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={head}
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                      >
                        <Typography
                          variant="small"
                          color="black"
                          className="flex items-center text-sm sm:text-xl justify-between gap-2 font-bold leading-none"
                        >
                          {head}{" "}
                          {index !== TABLE_HEAD.length - 1 && (
                            <ChevronUpDownIcon
                              strokeWidth={2}
                              className="h-4 w-4"
                            />
                          )}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataT.map(({ market, price, change }, index) => {
                    const isLast = index === dataT.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color=""
                                className="font-normal text-sm sm:text-2xl text-black"
                              >
                                {market}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color=""
                              className="font-normal text-sm sm:text-2xl text-black"
                            >
                              {price}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="red"
                              className="font-normal text-sm sm:text-2xl"
                            >
                              {change}
                            </Typography>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
