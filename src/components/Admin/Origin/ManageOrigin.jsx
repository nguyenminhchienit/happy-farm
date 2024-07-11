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
  getAllOriginNotDelete,
  updateOriginFertilizer,
} from "../../../api/OriginFertilizer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Id", "Tên Nguồn Gốc", "Trạng Thái Ẩn Hiện", "Hành Động"];

const ManageOrigin = ({ setSelectedItem }) => {
  const navigate = useNavigate();
  const [origins, setOrigins] = useState([]);
  const [originUpdate, setOriginUpdate] = useState({
    idOrigin: "",
    nameOrigin: "",
    delete: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllOriginNotDelete();
        console.log("dữ liệu gọi đc ", response.data);
        setOrigins(response.data); // Giả sử response.data chứa danh sách phân bón
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (Origins) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      Origins.delete = true;
      console.log("Xóa item với id:", Origins);
      try {
        const response = await updateOriginFertilizer(
          Origins.idOrigin,
          Origins
        );
        console.log("day la dư lieu", response);
        if (response.data) {
          alert("ẩn thành công");
          window.location.reload();
        }
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    navigate(`/admin/edit-origin/${item.idOrigin}`);
  };

  return (
    <Card className="m-10 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-4xl mb-3"
            >
              Quản lý Nguồn Gốc Xuất Xứ
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
                    {head}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {origins.map((item, index) => {
              const isLast = index === origins.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item.idOrigin}>
                  {/* id nguồn gốc */}
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color=""
                          className="font-normal text-2xl text-black"
                        >
                          {item.idOrigin}
                        </Typography>
                      </div>
                    </div>
                  </td>

                  {/* tên nguồn gốc */}
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color=""
                        className="font-normal text-2xl text-black"
                      >
                        {item.nameOrigin}
                      </Typography>
                    </div>
                  </td>

                  {/* nguồn gốc xuất xứ */}
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color=""
                        className="font-normal text-2xl text-black"
                      >
                        {item.delete.toString()}
                      </Typography>
                    </div>
                  </td>

                  <td className={`${classes} flex gap-2`}>
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-orange-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => handleEdit(item)}
                    >
                      Sửa
                    </button>
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-red-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => handleDelete(item)}
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
  );
};

export default ManageOrigin;
