/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import {
  ListFerNotDelete,
  deleteFertilizer,
  getAll,
} from "../../../api/Fertilizer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [
  "Tên loại",
  "Giá",
  "nguồn gốc xuất xứ",
  "Thương hiệu",
  "Hiển Thị",
  "Hành động",
];

const TABLE_ROWS = [
  {
    name: "Cà phê",
    job: "Gia Lai",
    online: 112000,
    date: "Carbon",
    actions: "Sell, Export",
  },
  {
    name: "Hồ tiêu",
    job: "Tây Nguyên",
    online: 203000,
    date: "Viettel",
    actions: "Buy, Process",
  },
  {
    name: "Gạo",
    job: "Đồng Bằng Sông Cửu Long",
    online: 89500,
    date: "Vinaphone",
    actions: "Export",
  },
  {
    name: "Cao su",
    job: "Tây Nguyên",
    online: 145000,
    date: "Nokia",
    actions: "Sell, Process",
  },
  {
    name: "Điều",
    job: "Bình Phước",
    online: 67800,
    date: "Suzuki",
    actions: "Buy, Export",
  },
];

export function ManageProduct({ setSelectedItem }) {
  const [fertilizers, setFertilizers] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [sizeOfPage, setSizeOfPage] = useState(2); // default items on one page
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAll(page, sizeOfPage);
        setFertilizers(response?.data ?? []);
        setTotalPages(response.numberOfPages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [page, sizeOfPage]);

  const handleEdit = (item) => {
    console.log(item);
    setSelectedItem(item);
    navigate("/admin/edit-product/" + item.idFertilizer);
  };

  const handleDelete = async (item) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      try {
        const response = await deleteFertilizer(item.idFertilizer);
        console.log(response);
        if (response) {
          alert("xóa thành công");
          window.location.reload();
        }
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
    console.log("next ", page);
  };
  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  console.log("root   ", page);
  return (
    <Card className="m-10 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex items-center justify-between gap-8">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-4xl mb-3"
            >
              Quản lý sản phẩm
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">
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
                    className="flex items-center text-xl justify-between gap-2 font-bold leading-none"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fertilizers.map((item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item.nameFertilizer}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color=""
                          className="font-normal text-2xl text-black"
                        >
                          {item.nameFertilizer}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color=""
                        className="font-normal text-2xl text-black"
                      >
                        {/* giá  */}
                        {item.price}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color=""
                        className="font-normal text-2xl text-black"
                      >
                        {/* nguồn gốc xuất xứ */}
                        {item.originFer?.nameOrigin}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="red"
                      className="font-normal text-2xl text-red-700"
                    >
                      {item.brandName?.nameBrand}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="red"
                      className="font-normal text-2xl text-red-700"
                    >
                      {item.delete ? "Tạm Ẩn" : "Hiển thị"}
                    </Typography>
                  </td>

                  <td className={`${classes} flex gap-2`}>
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-orange-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => handleEdit(item)}
                      disabled={page === 0}
                    >
                      Sửa
                    </button>

                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-red-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => handleDelete(item)}
                      disabled={page === totalPages - 1}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {page + 1} of {totalPages}
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" onClick={handlePreviousPage}>
            Previous
          </Button>
          <Button variant="outlined" size="sm" onClick={handleNextPage}>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
